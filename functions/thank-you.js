import {
  page, messagePage, esc, stripe, saveOrder, getOrder, orderExpiry,
  signDownloadToken, SESSION_ID_PATTERN, DOWNLOAD_WINDOW_HOURS, MAX_DOWNLOADS, BUSINESS,
} from "./_lib.js";
import { filesForItems } from "./_catalog.js";

// GET /thank-you?session_id=cs_...
export async function onRequestGet({ request, env }) {
  const sessionId = new URL(request.url).searchParams.get("session_id") || "";
  if (!SESSION_ID_PATTERN.test(sessionId)) {
    return messagePage({ title: "Order not found", message: `We couldn't find that order. If you've paid, email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>.`, status: 404 });
  }

  let order = await getOrder(env, sessionId);

  // Webhook may not have arrived yet: confirm directly with Stripe.
  if (!order) {
    try {
      const session = await stripe(env, "GET", `checkout/sessions/${encodeURIComponent(sessionId)}`);
      if (session.payment_status === "paid") {
        await saveOrder(env, session);
        order = await getOrder(env, sessionId);
      }
    } catch (err) {
      console.error("thank-you lookup failed", err.message);
    }
  }

  if (!order) {
    return page({
      title: "Confirming your payment | SocialCarePro",
      noindex: true,
      head: '<meta http-equiv="refresh" content="8">',
      body: `<section class="wrap prose narrow">
  <h1>We're confirming your payment</h1>
  <p>This usually takes a few seconds. This page will refresh by itself.</p>
  <p><a class="btn" href="/thank-you?session_id=${esc(sessionId)}">Check again</a></p>
  <p class="muted">Still waiting after a few minutes? Email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>.</p>
</section>`,
    });
  }

  if (order.refunded) {
    return messagePage({ title: "This order was refunded", message: `Downloads are no longer available for this order. Questions? Email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>.` });
  }

  const expiresAt = orderExpiry(order);
  if (expiresAt <= Date.now()) {
    return messagePage({ title: "Your download links have expired", message: `Links work for ${DOWNLOAD_WINDOW_HOURS} hours after purchase. Email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a> from your order email address and we'll send you new ones.` });
  }

  const files = filesForItems(order.items.split(","));
  const rows = await Promise.all(
    files.map(async (p) => {
      const token = await signDownloadToken(env, order.session_id, p.id, expiresAt);
      return `<li><div><p><strong>${esc(p.title)}</strong></p><p class="small muted">${esc(p.format)}</p></div>
<a class="btn btn-small" href="/api/download?token=${encodeURIComponent(token)}">Download</a></li>`;
    })
  );

  const expiry = new Date(expiresAt).toLocaleString("en-GB", { timeZone: "Europe/London", dateStyle: "long", timeStyle: "short" });

  return page({
    title: "Thank you for your order | SocialCarePro",
    noindex: true,
    body: `<section class="wrap prose">
  <h1>Thank you. Your files are ready.</h1>
  <p>A receipt has been sent to <strong>${esc(order.email)}</strong>.</p>
  <ul class="downloads">${rows.join("")}</ul>
  <p class="notice">Your links work until ${esc(expiry)} (${DOWNLOAD_WINDOW_HOURS} hours), with up to ${MAX_DOWNLOADS} downloads in total. Save your files now. Need a new link? Email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a> from your order email address.</p>
  <p class="muted">Please adapt each template to your service, current law and CQC guidance before use.</p>
</section>`,
  });
}

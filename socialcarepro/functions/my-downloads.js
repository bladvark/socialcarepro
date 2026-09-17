import {
  page, esc, stripe, downloadList, londonTime, SECURITY_HEADERS,
  DOWNLOAD_WINDOW_HOURS, BUSINESS,
} from "./_lib.js";
import { filesForItems } from "./_catalog.js";

// Customers get fresh links with their email address + the invoice or receipt number from Stripe's email.
const MAX_ATTEMPTS_PER_HOUR = 8;

function form({ email = "", error = "" } = {}) {
  return page({
    title: "My downloads | SocialCarePro",
    description: "Get fresh download links for templates you've bought from SocialCarePro.",
    noindex: true,
    body: `<section class="wrap prose narrow">
  <h1>My downloads</h1>
  <p>Enter the email address you used at checkout and the <strong>invoice number</strong> or <strong>receipt number</strong> from the email Stripe sent you. We'll show fresh download links straight away.</p>
  ${error ? `<p class="error" role="alert">${error}</p>` : ""}
  <form class="stack-form" method="post" action="/my-downloads">
    <label>Email address
      <input type="email" name="email" required autocomplete="email" value="${esc(email)}">
    </label>
    <label>Invoice or receipt number
      <input type="text" name="reference" required autocomplete="off" placeholder="e.g. ABCD1234-0001 or 1234-5678">
    </label>
    <button class="btn" type="submit">Show my downloads</button>
  </form>
  <p class="small muted">Can't find the email? Check your spam folder for a message from Stripe or SocialCarePro. Still stuck? Email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a>.</p>
</section>`,
  });
}

const normalise = (v) => String(v || "").toUpperCase().replace(/[^A-Z0-9]/g, "");

export function onRequestGet() {
  return form();
}

export async function onRequestPost({ request, env }) {
  const data = await request.formData().catch(() => null);
  const email = String(data?.get("email") || "").trim().toLowerCase().slice(0, 254);
  const reference = normalise(data?.get("reference")).slice(0, 60);
  const notFound = "We couldn't find an order with those details. Check the email address and the number, then try again.";

  if (!email || reference.length < 6) return form({ email, error: notFound });

  // Basic brute-force protection: limit attempts per email address.
  const since = new Date(Date.now() - 3600 * 1000).toISOString();
  const attempts = await env.DB.prepare("SELECT COUNT(*) AS n FROM recovery_attempts WHERE email = ?1 AND at > ?2")
    .bind(email, since)
    .first();
  if ((attempts?.n || 0) >= MAX_ATTEMPTS_PER_HOUR) {
    return form({ email, error: "Too many attempts. Please wait an hour and try again." });
  }
  await env.DB.prepare("DELETE FROM recovery_attempts WHERE at < ?1").bind(new Date(Date.now() - 86400 * 1000).toISOString()).run();
  await env.DB.prepare("INSERT INTO recovery_attempts (email, at) VALUES (?1, ?2)").bind(email, new Date().toISOString()).run();

  const { results: orders = [] } = await env.DB.prepare(
    "SELECT * FROM orders WHERE lower(email) = ?1 ORDER BY created_at DESC LIMIT 10"
  )
    .bind(email)
    .all();

  let match = null;
  for (const order of orders) {
    try {
      const s = await stripe(
        env,
        "GET",
        `checkout/sessions/${encodeURIComponent(order.session_id)}?expand[]=invoice&expand[]=payment_intent.latest_charge`
      );
      const refs = [s.invoice?.number, s.invoice?.receipt_number, s.payment_intent?.latest_charge?.receipt_number]
        .map(normalise)
        .filter(Boolean);
      if (refs.includes(reference)) {
        match = order;
        break;
      }
    } catch (err) {
      console.error("recovery lookup failed", err.message);
    }
  }

  if (!match) return form({ email, error: notFound });
  if (match.refunded) return form({ email, error: "That order was refunded, so its downloads are no longer available." });

  const expiresAt = Date.now() + DOWNLOAD_WINDOW_HOURS * 3600 * 1000;
  const list = await downloadList(env, match, filesForItems(match.items.split(",")), expiresAt);

  const res = await page({
    title: "My downloads | SocialCarePro",
    noindex: true,
    body: `<section class="wrap prose">
  <h1>Your downloads</h1>
  <p>Order placed ${esc(londonTime(new Date(match.created_at).getTime()))}.</p>
  ${list}
  <p class="notice">These links work until ${esc(londonTime(expiresAt))}. Save your files to your computer.</p>
</section>`,
  });
  return new Response(res.body, { status: 200, headers: { ...Object.fromEntries(res.headers), ...SECURITY_HEADERS, "Cache-Control": "private, no-store" } });
}

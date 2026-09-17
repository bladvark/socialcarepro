import { json, stripe, saveOrder, verifyStripeSignature } from "../_lib.js";

// POST /api/stripe-webhook
// Events: checkout.session.completed, checkout.session.async_payment_succeeded, charge.refunded
export async function onRequestPost({ request, env }) {
  const payload = await request.text();
  const signature = request.headers.get("Stripe-Signature");

  const valid = await verifyStripeSignature(payload, signature, env.STRIPE_WEBHOOK_SECRET);
  if (!valid) return json({ error: "Invalid signature" }, 400);

  let event;
  try {
    event = JSON.parse(payload);
  } catch {
    return json({ error: "Invalid payload" }, 400);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object;
        if (session.payment_status === "paid") await saveOrder(env, session);
        break;
      }
      case "charge.refunded": {
        const charge = event.data.object;
        // Only block downloads on a full refund.
        if (charge.refunded && charge.payment_intent) {
          const result = await env.DB.prepare("UPDATE orders SET refunded = 1 WHERE payment_intent = ?1")
            .bind(charge.payment_intent)
            .run();
          if (!result.meta?.changes) {
            // Order saved before payment_intent was known: find the session from Stripe.
            const list = await stripe(env, "GET", `checkout/sessions?payment_intent=${encodeURIComponent(charge.payment_intent)}&limit=1`);
            const sessionId = list.data?.[0]?.id;
            if (sessionId) {
              await env.DB.prepare("UPDATE orders SET refunded = 1, payment_intent = ?1 WHERE session_id = ?2")
                .bind(charge.payment_intent, sessionId)
                .run();
            }
          }
        }
        break;
      }
      default:
        break; // ignore other events
    }
  } catch (err) {
    console.error("webhook error", event.type, err.message);
    return json({ error: "Webhook handling failed" }, 500); // Stripe will retry
  }

  return json({ received: true });
}

export function onRequest() {
  return json({ error: "Method not allowed" }, 405);
}

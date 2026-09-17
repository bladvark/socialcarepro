import { json, stripe, BUSINESS } from "../_lib.js";
import { findItem, normaliseCart } from "../_catalog.js";

// POST /api/checkout  body: { items: ["1", "b2", ...] }
export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Your basket couldn't be read." }, 400);
  }

  const raw = Array.isArray(body?.items) ? body.items.slice(0, 50) : [];
  const { items } = normaliseCart(raw);
  if (!items.length) return json({ error: "Your basket is empty." }, 400);

  const origin = new URL(request.url).origin;
  const vatRegistered = env.VAT_REGISTERED === "true";

  const params = {
    mode: "payment",
    currency: "gbp",
    line_items: items.map((id) => {
      const item = findItem(id); // price always comes from the server catalogue
      return {
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: item.price,
          tax_behavior: vatRegistered ? "inclusive" : undefined,
          product_data: {
            name: item.title,
            description: item.items ? `Bundle of ${item.items.length} editable resources (digital download)` : "Editable template (digital download)",
          },
        },
      };
    }),
    customer_creation: "always",
    billing_address_collection: "auto",
    metadata: { items: items.join(",") },
    payment_intent_data: { metadata: { items: items.join(",") } },
    success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/#cart`,
    consent_collection: { terms_of_service: "required" },
    custom_text: {
      terms_of_service_acceptance: {
        message: `I agree to the [Terms](${BUSINESS.site}/terms) and request immediate access to my digital download. I understand that once download starts I lose my 14-day right to cancel.`,
      },
    },
    invoice_creation: {
      enabled: "true",
      invoice_data: {
        footer: "Need your files again? Visit socialcarepro.com/my-downloads and enter your email address and this invoice number.",
      },
    },
    automatic_tax: vatRegistered ? { enabled: "true" } : undefined,
  };

  try {
    const session = await stripe(env, "POST", "checkout/sessions", params);
    return json({ url: session.url });
  } catch (err) {
    console.error("checkout error", err.message);
    return json({ error: "Checkout couldn't start." }, 502);
  }
}

export function onRequest() {
  return json({ error: "Method not allowed" }, 405);
}

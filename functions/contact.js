import { page, BUSINESS, esc } from "./_lib.js";

export function onRequestGet() {
  return page({
    title: "Contact | SocialCarePro",
    description: "Contact SocialCarePro about orders, downloads or the templates.",
    body: `<section class="wrap prose">
  <h1>Contact</h1>
  <p>Email is the quickest way to reach us. We aim to reply within one working day.</p>
  <p><a class="btn" href="mailto:${BUSINESS.email}">${BUSINESS.email}</a></p>
  <h2>Order help</h2>
  <p>If you've lost your download links, a file won't open, or you'd like a refund, email us from the address you used at checkout so we can find your order.</p>
  <h2>Business details</h2>
  <p>${esc(BUSINESS.tradingName)}<br>${esc(BUSINESS.legalEntity)}<br>${esc(BUSINESS.address)}</p>
</section>`,
  });
}

import { page, BUSINESS, sellerSentence } from "./_lib.js";

export function onRequestGet() {
  return page({
    title: "Contact | SocialCarePro",
    description: "Contact SocialCarePro about orders, downloads or the templates.",
    body: `<section class="wrap prose">
  <h1>Contact</h1>
  <p>Email is the quickest way to reach us. We aim to reply within one working day.</p>
  <h2>Orders and downloads</h2>
  <p>If you've lost your download links, a file won't open, or you'd like a refund, email us from the address you used at checkout so we can find your order.</p>
  <p><a class="btn" href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a></p>
  <h2>General enquiries</h2>
  <p>For questions about the templates, partnerships or anything else.</p>
  <p><a class="btn btn-quiet" href="mailto:${BUSINESS.infoEmail}">${BUSINESS.infoEmail}</a></p>
  ${sellerSentence() ? `<h2>Business details</h2><p>${sellerSentence()}</p>` : ""}
</section>`,
  });
}

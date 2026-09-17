import { legalPage, BUSINESS } from "./_lib.js";

export function onRequestGet() {
  return legalPage({
    title: "Refund policy",
    description: "When and how you can get a refund from SocialCarePro.",
    updated: "16 September 2026",
    content: `
<h2>Before you download</h2>
<p>If you haven't downloaded any files from your order, you can cancel within 14 days for a full refund.</p>
<h2>Faulty or not as described</h2>
<p>If a file won't open, is damaged, or doesn't match its description, we'll send a working replacement. If we can't fix the problem, we'll refund you.</p>
<h2>After downloading</h2>
<p>Because the files are digital content you've chosen to access immediately, we can't normally refund you just because you've changed your mind once a download has started. This doesn't affect your statutory rights.</p>
<h2>How to ask</h2>
<p>Email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a> from the address you used at checkout, and tell us which item and what went wrong. Refunds go back to your original payment method, usually within 5 to 10 working days. Download links stop working once an order is refunded.</p>`,
  });
}

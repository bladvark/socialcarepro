import { legalPage, BUSINESS, esc } from "./_lib.js";

export function onRequestGet() {
  const b = BUSINESS;
  return legalPage({
    title: "Privacy policy",
    description: "How SocialCarePro collects and uses personal data.",
    updated: "16 September 2026",
    content: `
<h2>Who we are</h2>
<p>${esc(b.tradingName)}, ${esc(b.address)}, is the data controller for personal data collected through this website. Contact: <a href="mailto:${b.email}">${b.email}</a>.</p>
<h2>What we collect</h2>
<ul>
  <li>Your name, email address and billing details when you buy something (card details are handled by Stripe and never reach us).</li>
  <li>Your order details: what you bought, when, the amount paid and how many times files were downloaded.</li>
  <li>Anything you send us by email.</li>
  <li>Basic technical data such as IP address, recorded by our hosting provider for security.</li>
</ul>
<h2>Why we use it</h2>
<ul>
  <li>To take payment, deliver your files and send receipts (to perform our contract with you).</li>
  <li>To answer your questions and handle refunds (contract, and our legitimate interest in supporting customers).</li>
  <li>To keep accounting records (legal obligation).</li>
  <li>To protect the site from abuse (legitimate interest).</li>
</ul>
<p>We don't send marketing emails and we don't sell your data.</p>
<h2>Who we share it with</h2>
<ul>
  <li>Stripe, for payments and receipts.</li>
  <li>Cloudflare, for website hosting, file storage and our order database.</li>
  <li>Zoho, for our email.</li>
</ul>
<p>Some of these providers may process data outside the UK under appropriate safeguards, such as the UK International Data Transfer Addendum or adequacy regulations.</p>
<h2>How long we keep it</h2>
<p>Order records are kept for 6 years after the end of the financial year they relate to, to meet accounting requirements. Support emails are kept for up to 2 years.</p>
<h2>Your rights</h2>
<p>You can ask to see, correct or delete your data, to restrict or object to how we use it, and to receive a copy in a portable format. Email us to make a request. If you're unhappy with how we've handled your data, you can complain to the Information Commissioner's Office at <a href="https://ico.org.uk">ico.org.uk</a> or on 0303 123 1113.</p>`,
  });
}

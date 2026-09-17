import { legalPage, BUSINESS, esc, sellerSentence } from "./_lib.js";

export function onRequestGet() {
  const b = BUSINESS;
  return legalPage({
    title: "Terms of sale and use",
    description: "Terms for buying and using SocialCarePro templates.",
    updated: "16 September 2026",
    content: `
<h2>1. Who we are</h2>
<p>${sellerSentence() || "These terms apply to purchases from SocialCarePro (socialcarepro.com)."} Email: <a href="mailto:${b.supportEmail}">${b.supportEmail}</a>.${b.vatNumber ? ` VAT number: ${esc(b.vatNumber)}.` : ""}</p>

<h2>2. What you're buying</h2>
<p>You're buying digital templates (editable Word and Excel files) delivered by download. Each listing describes what's included and the file format. Prices are shown in pounds sterling${b.vatNumber ? " and include VAT" : ""}.</p>

<h2>3. Payment and delivery</h2>
<p>Payment is taken securely by Stripe. Once payment is confirmed you'll see download links, which work for 72 hours, with up to 20 downloads per order. You can get fresh links later on the <a href=\"/my-downloads\">My downloads</a> page. If you have trouble downloading, email us and we'll help.</p>

<h2>4. Your right to cancel</h2>
<p>Under the Consumer Contracts Regulations 2013, you'd normally have 14 days to cancel. For digital content, this right ends once the download starts, provided you've agreed to immediate access and acknowledged losing the right. You're asked to confirm this at checkout. Before you download anything, you can still cancel and get a full refund.</p>

<h2>5. Faulty files</h2>
<p>This doesn't affect your statutory rights. If a file is faulty or not as described, we'll repair or replace it, or refund you if that isn't possible. See our <a href="/refunds">refund policy</a>.</p>

<h2>6. Licence</h2>
<p>When you buy a template, we give you a non-exclusive, non-transferable licence to use and adapt it within your own organisation, including across its branches. You may not:</p>
<ul>
  <li>resell, sublicense, give away or share the files, or edited versions of them, with other organisations;</li>
  <li>upload them to other websites, marketplaces or shared libraries;</li>
  <li>present them as your own product for sale.</li>
</ul>
<p>We (or our licensors) keep all copyright in the templates.</p>

<h2>7. Using the templates</h2>
<p>The templates are practical starting points written from care management experience. They aren't legal, clinical or regulatory advice. You're responsible for adapting them to your service and checking them against current law, CQC guidance and your local authority requirements before use.</p>

<h2>8. Our liability</h2>
<p>Our total liability for any order is limited to the price you paid for it. We aren't liable for indirect or business losses. Nothing in these terms limits liability where the law doesn't allow it, including for death or personal injury caused by negligence, or for fraud.</p>

<h2>9. Changes</h2>
<p>We may update these terms. The version shown when you placed your order applies to that order.</p>

<h2>10. Law</h2>
<p>These terms are governed by the law of England and Wales. Disputes are subject to the courts of England and Wales, though if you're a consumer living elsewhere in the UK you can use your local courts.</p>`,
  });
}

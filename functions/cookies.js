import { legalPage, BUSINESS } from "./_lib.js";

export function onRequestGet() {
  return legalPage({
    title: "Cookies",
    description: "How SocialCarePro uses cookies and browser storage.",
    updated: "16 September 2026",
    content: `
<p>This site doesn't use advertising or analytics cookies, so there's no cookie banner.</p>
<h2>What we do store</h2>
<ul>
  <li><strong>Your basket.</strong> The items in your basket are saved in your browser's local storage so they're still there if you reload the page. This never leaves your device and you can clear it at any time in your browser settings.</li>
  <li><strong>Security.</strong> Our hosting provider, Cloudflare, may set strictly necessary cookies to protect the site from attacks and abuse.</li>
</ul>
<h2>Paying with Stripe</h2>
<p>When you check out, you move to Stripe's secure payment page, which uses its own cookies for fraud prevention. See <a href="https://stripe.com/gb/legal/cookies-policy">Stripe's cookie policy</a>.</p>
<p>If we ever add analytics, we'll update this page and ask for your consent first. Questions: <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>.</p>`,
  });
}

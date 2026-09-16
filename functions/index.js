import { page, BUSINESS } from "./_lib.js";
import { publicCatalog, PRODUCTS, BUNDLES } from "./_catalog.js";

export async function onRequestGet() {
  const catalog = publicCatalog();

  // JSON inside <script type="application/json"> is data, not code; escape "<" so it can't close the tag.
  const catalogJson = JSON.stringify(catalog).replace(/</g, "\\u003c");

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [...PRODUCTS, ...BUNDLES].map((item) => ({
      "@type": "Product",
      name: item.title,
      description: item.blurb,
      brand: { "@type": "Brand", name: "SocialCarePro" },
      offers: {
        "@type": "Offer",
        price: (item.price / 100).toFixed(2),
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: `${BUSINESS.site}/#item-${item.id}`,
      },
    })),
  }).replace(/</g, "\\u003c");

  const body = `
<section class="hero">
  <div class="wrap hero-inner">
    <div class="hero-copy">
      <h1>The paperwork behind good care, ready to edit.</h1>
      <p class="lede">Policies, care plans, assessments and training packs for UK domiciliary care services. Written by a CQC Registered Manager who uses this kind of paperwork every week.</p>
      <p class="hero-actions">
        <a class="btn" href="#shop">Browse the templates</a>
        <a class="btn btn-quiet" href="#bundles">See the bundles</a>
      </p>
    </div>
    <ul class="hero-facts" aria-label="What you get">
      <li><strong>18</strong> editable resources</li>
      <li><strong>3</strong> bundles that cost less than buying separately</li>
      <li><strong>Word and Excel</strong> files you can brand and adapt</li>
      <li><strong>Instant</strong> download after payment</li>
    </ul>
  </div>
</section>

<section class="section" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="section-head">
      <h2 id="shop-title">Templates</h2>
      <div class="controls">
        <div class="filters" role="group" aria-label="Filter by topic" data-filters></div>
        <label class="sort">Sort
          <select data-sort>
            <option value="default">Recommended</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
            <option value="title">Name, A to Z</option>
          </select>
        </label>
      </div>
    </div>
    <ol class="register" data-products aria-live="polite"></ol>
    <noscript><p class="notice">Please turn on JavaScript to add items to your basket. You can also email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a> to order.</p></noscript>
  </div>
</section>

<section class="section section-alt" id="bundles" aria-labelledby="bundles-title">
  <div class="wrap">
    <h2 id="bundles-title">Bundles</h2>
    <p class="section-intro">Five related templates in one purchase, for less than buying them one by one.</p>
    <div class="bundles" data-bundles></div>
  </div>
</section>

<section class="section" id="about" aria-labelledby="about-title">
  <div class="wrap about">
    <h2 id="about-title">Who writes these</h2>
    <div>
      <p class="about-quote">Created by a CQC Registered Manager with years of frontline experience running a domiciliary care agency in West London.</p>
      <p>Every template comes from the day-to-day work of running a regulated home care service: care planning, safeguarding, supervision, rotas and audits. They're written to be practical for small and growing providers.</p>
      <p class="muted">Templates are a starting point, not legal advice. Adapt each one to your service, current law and CQC guidance before use.</p>
    </div>
    <!-- Genuine customer reviews can go here once you have them. -->
  </div>
</section>

<section class="section section-alt" id="faq" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title">Questions</h2>
    <details><summary>What format are the files?</summary><p>All templates are editable Word documents (.docx), except the Rota &amp; Workforce Planning Templates, which is an Excel workbook (.xlsx). They open in Microsoft Office, Google Docs/Sheets and LibreOffice.</p></details>
    <details><summary>How do I get my files?</summary><p>After you pay, you're taken straight to a page with a download button for each file. Your links work for ${72} hours, so save the files to your computer straight away.</p></details>
    <details><summary>Can I add my own logo?</summary><p>Yes. The files are fully editable, so you can add your branding, service name and details.</p></details>
    <details><summary>Can I share the files?</summary><p>You can use them across your own organisation. You can't resell them, share them with other organisations or upload them elsewhere. See the <a href="/terms">terms</a>.</p></details>
    <details><summary>What if a file doesn't open or isn't as described?</summary><p>Email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a> and we'll replace it or refund you. See the <a href="/refunds">refund policy</a>.</p></details>
  </div>
</section>

<div class="drawer" data-cart hidden>
  <div class="drawer-backdrop" data-close-cart></div>
  <aside class="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title">
    <div class="drawer-head">
      <h2 id="cart-title">Your basket</h2>
      <button class="icon-btn" type="button" data-close-cart aria-label="Close basket">×</button>
    </div>
    <p class="notice" data-cart-notice hidden></p>
    <ul class="cart-lines" data-cart-lines></ul>
    <div class="drawer-foot">
      <p class="cart-total"><span>Total</span><strong data-cart-total>£0.00</strong></p>
      <p class="error" data-cart-error role="alert" hidden></p>
      <button class="btn btn-block" type="button" data-checkout>Pay securely with Stripe</button>
      <p class="small muted">You'll be asked to agree to the <a href="/terms">terms</a> and confirm you want immediate access to your download.</p>
    </div>
  </aside>
</div>

<div class="modal" data-modal hidden>
  <div class="drawer-backdrop" data-close-modal></div>
  <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="icon-btn modal-close" type="button" data-close-modal aria-label="Close">×</button>
    <div data-modal-body></div>
  </div>
</div>

<script type="application/json" id="catalog-data">${catalogJson}</script>`;

  return page({
    title: "SocialCarePro | Editable templates for UK care providers",
    description: "Editable policies, care plans, risk assessments and training packs for UK domiciliary care services, written by a CQC Registered Manager.",
    head: `<script type="application/ld+json">${structuredData}</script>`,
    body,
    scripts: '<script src="/app.js" defer></script>',
  });
}

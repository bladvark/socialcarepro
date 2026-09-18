// SocialCarePro — generated bundle. Edit PRODUCTS/BUNDLES below to change the shop.

// Single source of truth for products, bundles, prices (in pence) and R2 file keys.
// The server ALWAYS looks prices up here. Never trust prices sent from the browser.

const DOCX = "Editable Word document (.docx)";
const XLSX = "Excel workbook (.xlsx)";

const CATEGORIES = [
  { id: "compliance", label: "Compliance & policy" },
  { id: "care", label: "Care planning & records" },
  { id: "staff", label: "Staff & recruitment" },
  { id: "training", label: "Training" },
  { id: "business", label: "Running the business" },
];

const PRODUCTS = [
  {
    id: "1", title: "Mental Capacity Assessment Pack", price: 1499, was: 2200, category: "care",
    file: "01-Mental-Capacity-Assessment-Pack.docx", format: DOCX,
    blurb: "Carry out and record two-stage capacity assessments and best interests decisions in line with the Mental Capacity Act 2005.",
    includes: ["MCA step-by-step guide", "Two-stage capacity assessment form", "Best interests decision record", "Worked case studies", "Legal and guidance references"],
  },
  {
    id: "2", title: "Risk Assessment Bundle", price: 1999, was: null, category: "compliance",
    file: "02-Risk-Assessment-Bundle.docx", format: DOCX,
    blurb: "Five core risk assessments for home care visits, ready to adapt to each person you support.",
    includes: ["Falls risk assessment", "Pressure ulcer risk assessment", "Nutrition and hydration screening record", "Moving and handling risk assessment (TILEO)", "Medication risk assessment"],
  },
  {
    id: "3", title: "Person-Centred Care Plan Template", price: 1299, was: 1800, category: "care",
    file: "03-Person-Centred-Care-Plan.docx", format: DOCX,
    blurb: "A care and support plan built around the person: who they are, what matters to them and how they want to be supported.",
    includes: ["Guidance notes", "About me and one-page profile", "Care and support plan", "Goals and outcomes", "Culture, identity and preferences", "Review schedule"],
  },
  {
    id: "4", title: "Safeguarding Adults Policy & Procedure", price: 1699, was: null, category: "compliance",
    file: "04-Safeguarding-Policy-and-Procedure.docx", format: DOCX,
    blurb: "A safeguarding adults policy with the procedure, forms and records staff and managers need when a concern is raised.",
    includes: ["Safeguarding adults policy (incl. whistleblowing)", "Response procedure", "Concern reporting form", "Manager referral record", "Staff training record", "Manager guidance notes"],
  },
  {
    id: "5", title: "Data Protection & UK GDPR Policy Pack", price: 1499, was: null, category: "compliance",
    file: "05-Data-Protection-GDPR-Pack.docx", format: DOCX,
    blurb: "Policy, privacy notices and procedures for handling personal data in a care service under UK GDPR.",
    includes: ["Data protection policy", "Privacy notice – people using services", "Privacy notice – staff", "Subject access procedure, log and response letter", "Data breach procedure and log"],
  },
  {
    id: "6", title: "Staff Supervision & Appraisal Templates", price: 1199, was: 1600, category: "staff",
    file: "06-Staff-Supervision-Templates.docx", format: DOCX,
    blurb: "Run consistent one-to-ones and annual appraisals, and keep track of who is due.",
    includes: ["Guidance for managers", "One-to-one supervision record", "Annual appraisal", "Supervision action plan", "Supervision tracker"],
  },
  {
    id: "7", title: "Medication Awareness Workbook", price: 999, was: null, category: "training",
    file: "07-Medication-Awareness-Workbook.docx", format: DOCX,
    blurb: "A self-study workbook for care workers, with a knowledge check and competency sign-off.",
    includes: ["Seven learning modules", "Knowledge check", "Answer sheet", "Competency assessment", "Certificate of completion"],
  },
  {
    id: "8", title: "Daily Care Record Pack", price: 899, was: 1200, category: "care",
    file: "08-Daily-Care-Record-Pack.docx", format: DOCX,
    blurb: "Everyday recording forms for care visits, with guidance on writing clear, factual notes.",
    includes: ["Record-keeping guidance", "Daily care notes", "Food and fluid chart", "Continence record", "ABC behaviour chart", "Body map record"],
  },
  {
    id: "9", title: "New Care Business Starter Pack", price: 7999, was: 12000, category: "business",
    file: "09-New-Care-Business-Starter-Pack.docx", format: DOCX,
    blurb: "A practical starting point for setting up a regulated care service, from CQC registration to your first 90 days.",
    includes: ["CQC registration checklist", "Statement of Purpose template", "Business plan outline", "34-policy framework with standard policy structure", "Marketing one-pager", "First 90 days checklist"],
  },
  {
    id: "10", title: "Dementia Care Assessment Toolkit", price: 1799, was: 2400, category: "care",
    file: "10-Dementia-Care-Assessment-Toolkit.docx", format: DOCX,
    blurb: "Observation, life history and communication tools for supporting people living with dementia.",
    includes: ["Cognition and daily living observation record", "Life history profile", "Distress and behaviour monitoring form", "Communication passport", "Family liaison record"],
  },
  {
    id: "11", title: "End of Life Care Plan", price: 1399, was: null, category: "care",
    file: "11-End-of-Life-Care-Plan.docx", format: DOCX,
    blurb: "Plan and record care in the last months and days of life, including advance wishes and bereavement support.",
    includes: ["End of life care plan", "Advance care planning record", "Comfort care checklist", "Bereavement support guide", "CPR decisions information sheet"],
  },
  {
    id: "12", title: "Rota & Workforce Planning Templates", price: 1099, was: 1499, category: "staff",
    file: "12-Rota-and-Workforce-Planning-Templates.xlsx", format: XLSX,
    blurb: "A working rota spreadsheet that calculates paid hours, including overnight shifts, and flags anyone over 48 hours.",
    includes: ["Weekly rota with automatic paid-hours calculation", "Monthly shift planner", "Holiday tracker", "Staffing calculator", "Guidance sheet"],
  },
  {
    id: "13", title: "Pre-Employment Checks Checklist", price: 799, was: null, category: "staff",
    file: "13-Pre-Employment-Checks-Checklist.docx", format: DOCX,
    blurb: "Safer recruitment checks in one place, from references and DBS to right to work and induction.",
    includes: ["Safer recruitment checklist", "Reference request template", "DBS tracking sheet", "Right to work check log", "Induction record"],
  },
  {
    id: "14", title: "Infection Prevention & Control Policy Pack", price: 1399, was: 1800, category: "compliance",
    file: "14-Infection-Control-Policy-Pack.docx", format: DOCX,
    blurb: "IPC policy and protocols for home care, including outbreak management for respiratory infections.",
    includes: ["IPC policy", "Hand hygiene protocol", "PPE guide", "Outbreak management plan incl. respiratory infections such as COVID-19", "Staff IPC training record"],
  },
  {
    id: "15", title: "Moving & Handling Training Pack", price: 1899, was: 2500, category: "training",
    file: "15-Moving-and-Handling-Training-Pack.docx", format: DOCX,
    blurb: "Everything a trainer needs to deliver a moving and handling session and assess competency.",
    includes: ["Trainer session plan", "Slide-by-slide presentation notes", "Learner handout", "Scenario cards", "TILEO risk assessment form", "Competency assessment sheet"],
  },
  {
    id: "16", title: "Environmental Health & Safety Audit", price: 1199, was: null, category: "compliance",
    file: "16-Environmental-Health-and-Safety-Audit.docx", format: DOCX,
    blurb: "Monthly and annual checks for your premises, fire safety and equipment, with an action log.",
    includes: ["Monthly premises check", "Annual health and safety audit", "Fire safety checklist", "Equipment checklist", "Action log"],
  },
  {
    id: "17", title: "Care Provider Marketing Pack", price: 1599, was: 2200, category: "business",
    file: "17-Care-Marketing-Pack.docx", format: DOCX,
    blurb: "Templates to help families and commissioners find your service, from social posts to a brochure.",
    includes: ["Marketing basics", "12 social media post templates", "Newsletter template", "Service brochure template", "Google Business Profile guide", "Review request emails"],
  },
  {
    id: "18", title: "Incident & Accident Report Pack", price: 999, was: null, category: "compliance",
    file: "18-Incident-and-Accident-Report-Pack.docx", format: DOCX,
    blurb: "Report, investigate and learn from incidents and accidents in a consistent way.",
    includes: ["Incident reporting flow chart", "Accident and incident report form", "Serious incident template", "Investigation checklist", "Lessons learned log"],
  },
];

const BUNDLES = [
  {
    id: "b1", title: "CQC Compliance Bundle", price: 4999, items: ["2", "4", "5", "14", "16"],
    blurb: "Core policies, risk assessments and audits for a well-led, safe service.",
  },
  {
    id: "b2", title: "Care Business Starter Bundle", price: 8999, items: ["3", "6", "8", "9", "11"],
    blurb: "The starter pack plus the care plans, records and supervision tools a new service needs from day one.",
  },
  {
    id: "b3", title: "Staff Training Resource Bundle", price: 4499, items: ["1", "7", "10", "13", "15"],
    blurb: "Workbooks, training packs and toolkits to develop and check your team's skills.",
  },
];

// "Was" prices are kept in the data but hidden until products have genuinely sold at that price.
const SHOW_WAS_PRICE = false;

const productById = new Map(PRODUCTS.map((p) => [p.id, p]));
const bundleById = new Map(BUNDLES.map((b) => [b.id, b]));

function findItem(id) {
  return productById.get(id) || bundleById.get(id) || null;
}

function bundleSaving(bundle) {
  const individual = bundle.items.reduce((sum, id) => sum + productById.get(id).price, 0);
  return individual - bundle.price;
}

// Removes unknown IDs, duplicates, and products already covered by a bundle in the cart.
function normaliseCart(ids) {
  const clean = [...new Set((Array.isArray(ids) ? ids : []).map(String))].filter((id) => findItem(id));
  const covered = new Set(clean.filter((id) => bundleById.has(id)).flatMap((id) => bundleById.get(id).items));
  const removed = clean.filter((id) => productById.has(id) && covered.has(id));
  return { items: clean.filter((id) => !removed.includes(id)), removed };
}

// Expands a list of purchased IDs into the unique product files the customer may download.
function filesForItems(ids) {
  const productIds = new Set();
  for (const id of ids) {
    if (bundleById.has(id)) bundleById.get(id).items.forEach((p) => productIds.add(p));
    else if (productById.has(id)) productIds.add(id);
  }
  return [...productIds]
    .sort((a, b) => Number(a) - Number(b))
    .map((id) => productById.get(id));
}

// Public data for the storefront (no file keys).
function publicCatalog() {
  return {
    categories: CATEGORIES,
    showWasPrice: SHOW_WAS_PRICE,
    products: PRODUCTS.map(({ file, ...rest }) => rest),
    bundles: BUNDLES.map((b) => ({ ...b, saving: bundleSaving(b) })),
  };
}

// Shared helpers for all Pages Functions.

// ---- Business details: fill these in once, they appear on every page ----
const BUSINESS = {
  // Leave any of these empty ("") and it simply won't appear on the site.
  operator: "Social Care Pro Limited", // must match Companies House exactly
  companyNumber: "", // e.g. "12345678" (limited companies only)
  address: "Westminster Business Centre, Printing House Lane, Hayes, London UB3 1AP",
  vatNumber: "", // e.g. "GB123456789" if VAT-registered
  supportEmail: "support@socialcarepro.com", // orders, downloads, refunds
  infoEmail: "info@socialcarepro.com", // general enquiries, privacy
  site: "https://socialcarepro.com",
};

// "SocialCarePro is operated by Example Ltd (company no. 123), Address." — only the parts that are filled in.
function sellerSentence() {
  const b = BUSINESS;
  if (!b.operator) return b.address ? `SocialCarePro, ${esc(b.address)}.` : "";
  const parts = [`SocialCarePro is operated by ${esc(b.operator)}`];
  if (b.companyNumber) parts[0] += `, a company registered in England and Wales (company number ${esc(b.companyNumber)})`;
  if (b.address) parts.push(`${b.companyNumber ? "registered office: " : ""}${esc(b.address)}`);
  return parts.join(", ") + ".";
}

const DOWNLOAD_WINDOW_HOURS = 72;
const MAX_DOWNLOADS = 20;
const RECOVERY_PATH = "/my-downloads";

// ---- HTML ----
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function gbp(pence) {
  return "£" + (pence / 100).toFixed(2);
}

const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "form-action 'self' https://checkout.stripe.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
].join("; ");

const SECURITY_HEADERS = {
  "Content-Security-Policy": CSP,
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "X-Frame-Options": "DENY",
};

function page({ title, description = "", body, head = "", status = 200, noindex = false, scripts = "" }) {
  const year = new Date().getUTCFullYear();
  const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : ""}
<meta property="og:site_name" content="SocialCarePro">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Young+Serif&display=swap">
<link rel="stylesheet" href="/styles.css">
${head}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="logo" href="/">SocialCare<span>Pro</span></a>
    <nav class="nav" aria-label="Main">
      <a href="/#shop">Shop</a>
      <a href="/#bundles">Bundles</a>
      <a href="/#about">About</a>
      <a href="/contact">Contact</a>
      <button class="cart-button" type="button" data-open-cart hidden>Basket <span class="cart-count" data-cart-count>0</span></button>
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap footer-inner">
    <div>
      <p class="logo">SocialCare<span>Pro</span></p>
      <p>Editable templates for UK care providers, written by care sector professionals.</p>
    </div>
    <nav aria-label="Legal">
      <a href="/my-downloads">My downloads</a>
      <a href="/terms">Terms</a>
      <a href="/privacy">Privacy</a>
      <a href="/refunds">Refunds</a>
      <a href="/cookies">Cookies</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>
  <div class="wrap footer-legal">
    <p>© ${year} SocialCarePro${BUSINESS.operator ? `. ${sellerSentence()}` : BUSINESS.address ? ` · ${esc(BUSINESS.address)} ·` : "."} <a href="mailto:${BUSINESS.infoEmail}">${BUSINESS.infoEmail}</a>${BUSINESS.vatNumber ? ` · VAT no. ${esc(BUSINESS.vatNumber)}` : ""}</p>
  </div>
</footer>
${scripts}
</body>
</html>`;
  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": noindex ? "private, no-store" : "public, max-age=300", ...SECURITY_HEADERS },
  });
}

function legalPage({ title, description, updated, content }) {
  return page({
    title: `${title} | SocialCarePro`,
    description,
    body: `<article class="wrap prose">
  <h1>${esc(title)}</h1>
  <p class="muted">Last updated ${esc(updated)}</p>
  ${content}
</article>`,
  });
}

function messagePage({ title, message, status = 200 }) {
  return page({
    title: `${title} | SocialCarePro`,
    status,
    noindex: true,
    body: `<section class="wrap prose narrow"><h1>${esc(title)}</h1><p>${message}</p><p><a class="btn" href="/">Back to the shop</a></p></section>`,
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

// ---- Stripe (plain fetch, no SDK) ----
function formEncode(obj, prefix = "", out = new URLSearchParams()) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;
    const name = prefix ? `${prefix}[${key}]` : key;
    if (typeof value === "object") formEncode(value, name, out);
    else out.append(name, String(value));
  }
  return out;
}

async function stripe(env, method, path, params) {
  if (!env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY is not set");
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params ? formEncode(params).toString() : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Stripe ${res.status}: ${data?.error?.message || "unknown error"}`);
  return data;
}

// ---- Crypto ----
const enc = new TextEncoder();

async function hmacKey(secret) {
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
}

async function hmacHex(secret, message) {
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function b64url(str) {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function unb64url(str) {
  return atob(str.replace(/-/g, "+").replace(/_/g, "/"));
}

// Download token: base64url(sessionId|productId|expiry) . hmac
async function signDownloadToken(env, sessionId, productId, expiresAt) {
  const payload = `${sessionId}|${productId}|${expiresAt}`;
  const sig = await hmacHex(env.DOWNLOAD_SIGNING_SECRET, payload);
  return `${b64url(payload)}.${sig}`;
}

async function verifyDownloadToken(env, token) {
  if (!env.DOWNLOAD_SIGNING_SECRET || typeof token !== "string") return null;
  const [encoded, sig] = token.split(".");
  if (!encoded || !sig) return null;
  let payload;
  try {
    payload = unb64url(encoded);
  } catch {
    return null;
  }
  const expected = await hmacHex(env.DOWNLOAD_SIGNING_SECRET, payload);
  if (!safeEqual(sig, expected)) return null;
  const [sessionId, productId, expiresAt] = payload.split("|");
  if (!sessionId || !productId || !(Number(expiresAt) > Date.now())) return null;
  return { sessionId, productId, expiresAt: Number(expiresAt) };
}

// Stripe webhook signature check (header: t=...,v1=...)
async function verifyStripeSignature(payload, header, secret, toleranceSeconds = 300) {
  if (!header || !secret) return false;
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const i = p.indexOf("=");
      return [p.slice(0, i), p.slice(i + 1)];
    })
  );
  const signatures = header.split(",").filter((p) => p.startsWith("v1=")).map((p) => p.slice(3));
  const timestamp = Number(parts.t);
  if (!timestamp || !signatures.length) return false;
  if (Math.abs(Date.now() / 1000 - timestamp) > toleranceSeconds) return false;
  const expected = await hmacHex(secret, `${timestamp}.${payload}`);
  return signatures.some((s) => safeEqual(s, expected));
}

// ---- Orders ----
const SESSION_ID_PATTERN = /^cs_(test|live)_[A-Za-z0-9]{10,200}$/;

// Idempotent: re-sending the same Stripe event never duplicates or resets an order.
async function saveOrder(env, session) {
  const email = session.customer_details?.email || session.customer_email || "";
  const items = session.metadata?.items || "";
  if (!items) throw new Error(`Session ${session.id} has no items metadata`);
  const createdAt = new Date((session.created || Math.floor(Date.now() / 1000)) * 1000).toISOString();
  await env.DB.prepare(
    `INSERT INTO orders (session_id, payment_intent, email, items, amount_total, created_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6)
     ON CONFLICT(session_id) DO UPDATE SET payment_intent = COALESCE(excluded.payment_intent, orders.payment_intent)`
  )
    .bind(session.id, session.payment_intent || null, email, items, session.amount_total || 0, createdAt)
    .run();
}

async function getOrder(env, sessionId) {
  return env.DB.prepare("SELECT * FROM orders WHERE session_id = ?1").bind(sessionId).first();
}

function orderExpiry(order) {
  return new Date(order.created_at).getTime() + DOWNLOAD_WINDOW_HOURS * 3600 * 1000;
}

// Download buttons for an order, valid until expiresAt.
async function downloadList(env, order, files, expiresAt) {
  const rows = await Promise.all(
    files.map(async (p) => {
      const token = await signDownloadToken(env, order.session_id, p.id, expiresAt);
      return `<li><div><p><strong>${esc(p.title)}</strong></p><p class="small muted">${esc(p.format)}</p></div>
<a class="btn btn-small" href="/api/download?token=${encodeURIComponent(token)}">Download</a></li>`;
    })
  );
  return `<ul class="downloads">${rows.join("")}</ul>`;
}

function londonTime(ms) {
  return new Date(ms).toLocaleString("en-GB", { timeZone: "Europe/London", dateStyle: "long", timeStyle: "short" });
}

async function homeGet() {
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
      <h1>Resources for social care, ready to use.</h1>
      <p class="lede">Policies, care plans, assessments and training resources for UK care providers, managers and teams. Written by care sector professionals who work with this paperwork every day.</p>
      <p class="hero-actions">
        <a class="btn" href="#shop">Browse resources</a>
        <a class="btn btn-quiet" href="#bundles">See the bundles</a>
      </p>
    </div>
    <ul class="hero-facts" aria-label="What you get">
      <li><strong>Policies</strong> and procedures</li>
      <li><strong>Care planning</strong> and assessments</li>
      <li><strong>Staff</strong> recruitment, supervision and training</li>
      <li><strong>Editable</strong> Word and Excel, instant download</li>
    </ul>
  </div>
</section>

<section class="section" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="section-head">
      <h2 id="shop-title">Browse resources</h2>
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
    <noscript><p class="notice">Please turn on JavaScript to add items to your basket. You can also email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a> to order.</p></noscript>
  </div>
</section>

<section class="section section-alt" id="bundles" aria-labelledby="bundles-title">
  <div class="wrap">
    <h2 id="bundles-title">Bundles</h2>
    <p class="section-intro">Related resources grouped together, for less than buying them one by one.</p>
    <div class="bundles" data-bundles></div>
  </div>
</section>

<section class="section" id="about" aria-labelledby="about-title">
  <div class="wrap about">
    <h2 id="about-title">Who writes these</h2>
    <div>
      <p class="about-quote">Created by care sector professionals with hands-on experience in management, compliance and frontline care.</p>
      <p>Every template comes from the day-to-day work of regulated care services: care planning, safeguarding, supervision, rotas and audits. They're written to be practical for small and growing providers.</p>
      <p class="muted">Templates are a starting point, not legal advice. Adapt each one to your service, current law and CQC guidance before use.</p>
    </div>
    <!-- Genuine customer reviews can go here once you have them. -->
  </div>
</section>

<section class="section section-alt" id="faq" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title">Questions</h2>
    <details><summary>What format are the files?</summary><p>All templates are editable Word documents (.docx), except the Rota &amp; Workforce Planning Templates, which is an Excel workbook (.xlsx). They open in Microsoft Office, Google Docs/Sheets and LibreOffice.</p></details>
    <details><summary>How do I get my files?</summary><p>After you pay, you're taken straight to a page with a download button for each file. Your links work for 72 hours, so save the files to your computer straight away. If you lose them, you can get fresh links any time on the <a href="/my-downloads">My downloads</a> page.</p></details>
    <details><summary>Can I add my own logo?</summary><p>Yes. The files are fully editable, so you can add your branding, service name and details.</p></details>
    <details><summary>Can I share the files?</summary><p>You can use them across your own organisation. You can't resell them, share them with other organisations or upload them elsewhere. See the <a href="/terms">terms</a>.</p></details>
    <details><summary>What if a file doesn't open or isn't as described?</summary><p>Email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a> and we'll replace it or refund you. See the <a href="/refunds">refund policy</a>.</p></details>
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
    title: "SocialCarePro | Resources for UK social care",
    description: "Editable policies, care plans, risk assessments and training resources for UK social care providers, written by care sector professionals.",
    head: `<script type="application/ld+json">${structuredData}</script>`,
    body,
    scripts: '<script src="/app.js" defer></script>',
  });
}

function contactGet() {
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

function termsGet() {
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

function privacyGet() {
  const b = BUSINESS;
  return legalPage({
    title: "Privacy policy",
    description: "How SocialCarePro collects and uses personal data.",
    updated: "16 September 2026",
    content: `
<h2>Who we are</h2>
<p>${sellerSentence()} ${b.operator ? esc(b.operator) : "SocialCarePro"} is the data controller for personal data collected through this website. Contact: <a href="mailto:${b.infoEmail}">${b.infoEmail}</a>.</p>
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

function refundsGet() {
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

function cookiesGet() {
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
<p>If we ever add analytics, we'll update this page and ask for your consent first. Questions: <a href="mailto:${BUSINESS.infoEmail}">${BUSINESS.infoEmail}</a>.</p>`,
  });
}

// GET /thank-you?session_id=cs_...
async function thankYouGet({ request, env }) {
  const sessionId = new URL(request.url).searchParams.get("session_id") || "";
  if (!SESSION_ID_PATTERN.test(sessionId)) {
    return messagePage({ title: "Order not found", message: `We couldn't find that order. If you've paid, email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a>.`, status: 404 });
  }

  let order = await getOrder(env, sessionId);

  // Webhook may not have arrived yet: confirm directly with Stripe.
  if (!order) {
    try {
      const session = await stripe(env, "GET", `checkout/sessions/${encodeURIComponent(sessionId)}`);
      if (session.payment_status === "paid") {
        await saveOrder(env, session);
        order = await getOrder(env, sessionId);
      }
    } catch (err) {
      console.error("thank-you lookup failed", err.message);
    }
  }

  if (!order) {
    return page({
      title: "Confirming your payment | SocialCarePro",
      noindex: true,
      head: '<meta http-equiv="refresh" content="8">',
      body: `<section class="wrap prose narrow">
  <h1>We're confirming your payment</h1>
  <p>This usually takes a few seconds. This page will refresh by itself.</p>
  <p><a class="btn" href="/thank-you?session_id=${esc(sessionId)}">Check again</a></p>
  <p class="muted">Still waiting after a few minutes? Email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a>.</p>
</section>`,
    });
  }

  if (order.refunded) {
    return messagePage({ title: "This order was refunded", message: `Downloads are no longer available for this order. Questions? Email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a>.` });
  }

  const expiresAt = orderExpiry(order);
  if (expiresAt <= Date.now()) {
    return messagePage({ title: "Your download links have expired", message: `Links on this page work for ${DOWNLOAD_WINDOW_HOURS} hours. <a href="${RECOVERY_PATH}">Get fresh download links</a> using your email address and the invoice or receipt number from your Stripe email.` });
  }

  const files = filesForItems(order.items.split(","));
  const list = await downloadList(env, order, files, expiresAt);
  const expiry = londonTime(expiresAt);

  return page({
    title: "Thank you for your order | SocialCarePro",
    noindex: true,
    body: `<section class="wrap prose">
  <h1>Thank you. Your files are ready.</h1>
  <p>A receipt has been sent to <strong>${esc(order.email)}</strong>.</p>
  ${list}
  <p class="notice">Your links work until ${esc(expiry)} (${DOWNLOAD_WINDOW_HOURS} hours), with up to ${MAX_DOWNLOADS} downloads in total. Save your files to your computer now.</p>
  <p>Lost your files later? Get fresh links any time at <a href="${RECOVERY_PATH}">socialcarepro.com${RECOVERY_PATH}</a> with your email address and the invoice or receipt number from your Stripe email.</p>
  <p class="muted">Please adapt each template to your service, current law and CQC guidance before use.</p>
</section>`,
  });
}

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

function myDownloadsGet() {
  return form();
}

async function myDownloadsPost({ request, env }) {
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

// POST /api/checkout  body: { items: ["1", "b2", ...] }
async function checkoutPost({ request, env }) {
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

// POST /api/stripe-webhook
// Events: checkout.session.completed, checkout.session.async_payment_succeeded, charge.refunded
async function webhookPost({ request, env }) {
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

const TYPES = {
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const help = `You can get fresh links any time at <a href="${RECOVERY_PATH}">socialcarepro.com${RECOVERY_PATH}</a> using your email address and the invoice or receipt number from your Stripe email. Still stuck? Email <a href="mailto:${BUSINESS.supportEmail}">${BUSINESS.supportEmail}</a>.`;

// GET /api/download?token=...
async function downloadGet({ request, env }) {
  const token = new URL(request.url).searchParams.get("token");
  const claim = await verifyDownloadToken(env, token);
  if (!claim) {
    return messagePage({ title: "This download link has expired", message: `Download links work for 72 hours. ${help}`, status: 403 });
  }

  const order = await getOrder(env, claim.sessionId);
  if (!order) return messagePage({ title: "Order not found", message: help, status: 404 });
  if (order.refunded) return messagePage({ title: "This order was refunded", message: `Downloads are no longer available for refunded orders. ${help}`, status: 403 });

  const product = filesForItems(order.items.split(",")).find((p) => p.id === claim.productId);
  if (!product) return messagePage({ title: "File not part of this order", message: help, status: 403 });

  // Count the download only if the order is still under the limit (atomic).
  const counted = await env.DB.prepare(
    "UPDATE orders SET download_count = download_count + 1 WHERE session_id = ?1 AND refunded = 0 AND download_count < ?2"
  )
    .bind(order.session_id, MAX_DOWNLOADS)
    .run();
  if (!counted.meta?.changes) {
    return messagePage({ title: "Download limit reached", message: `This order has reached its limit of ${MAX_DOWNLOADS} downloads. Please email <a href=\"mailto:${BUSINESS.supportEmail}\">${BUSINESS.supportEmail}</a> if you need more.`, status: 403 });
  }

  const object = await env.PRODUCTS.get(product.file);
  if (!object) {
    console.error("missing R2 object for product", product.id);
    await env.DB.prepare("UPDATE orders SET download_count = download_count - 1 WHERE session_id = ?1").bind(order.session_id).run();
    return messagePage({ title: "File temporarily unavailable", message: `We couldn't fetch this file just now. ${help}`, status: 404 });
  }

  const ext = product.file.split(".").pop();
  return new Response(object.body, {
    headers: {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${product.file}"`,
      "Content-Length": String(object.size),
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}


const GET_ROUTES = {
  "/": homeGet,
  "/contact": contactGet,
  "/terms": termsGet,
  "/privacy": privacyGet,
  "/refunds": refundsGet,
  "/cookies": cookiesGet,
  "/thank-you": thankYouGet,
  "/my-downloads": myDownloadsGet,
  "/api/download": downloadGet,
};

const POST_ROUTES = {
  "/my-downloads": myDownloadsPost,
  "/api/checkout": checkoutPost,
  "/api/stripe-webhook": webhookPost,
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const ctxArg = { request, env, ctx, params: {}, waitUntil: ctx.waitUntil.bind(ctx) };

    try {
      if (request.method === "GET" || request.method === "HEAD") {
        const handler = GET_ROUTES[path];
        if (handler) return await handler(ctxArg);
        if (POST_ROUTES[path]) return new Response("Method not allowed", { status: 405 });
      } else if (request.method === "POST") {
        const handler = POST_ROUTES[path];
        if (handler) return await handler(ctxArg);
        if (GET_ROUTES[path]) return new Response("Method not allowed", { status: 405 });
      } else if (POST_ROUTES[path] || GET_ROUTES[path]) {
        return new Response("Method not allowed", { status: 405 });
      }
      // anything else: static files (styles.css, app.js, favicon.svg, 404.html …)
      return await env.ASSETS.fetch(request);
    } catch (err) {
      console.error("unhandled error", path, err && err.message);
      return messagePage({
        title: "Something went wrong",
        message: "Please try again in a moment. If it keeps happening, email " + BUSINESS.supportEmail + ".",
        status: 500,
      });
    }
  },
};


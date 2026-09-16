// Shared helpers for all Pages Functions.

// ---- Business details: fill these in once, they appear on every page ----
export const BUSINESS = {
  tradingName: "[Trading name]",
  legalEntity: "[Legal entity / company number]",
  address: "[Registered or trading address]",
  vatNumber: "", // e.g. "GB123456789" if VAT-registered, otherwise leave empty
  email: "hello@socialcarepro.com",
  site: "https://socialcarepro.com",
};

export const DOWNLOAD_WINDOW_HOURS = 72;
export const MAX_DOWNLOADS = 10;

// ---- HTML ----
export function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function gbp(pence) {
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

export const SECURITY_HEADERS = {
  "Content-Security-Policy": CSP,
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "X-Frame-Options": "DENY",
};

export function page({ title, description = "", body, head = "", status = 200, noindex = false, scripts = "" }) {
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
      <p>Editable templates for UK care providers, written by a CQC Registered Manager.</p>
    </div>
    <nav aria-label="Legal">
      <a href="/terms">Terms</a>
      <a href="/privacy">Privacy</a>
      <a href="/refunds">Refunds</a>
      <a href="/cookies">Cookies</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>
  <div class="wrap footer-legal">
    <p>© ${year} ${esc(BUSINESS.tradingName)}, ${esc(BUSINESS.address)}. <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>${BUSINESS.vatNumber ? `. VAT no. ${esc(BUSINESS.vatNumber)}` : ""}</p>
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

export function legalPage({ title, description, updated, content }) {
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

export function messagePage({ title, message, status = 200 }) {
  return page({
    title: `${title} | SocialCarePro`,
    status,
    noindex: true,
    body: `<section class="wrap prose narrow"><h1>${esc(title)}</h1><p>${message}</p><p><a class="btn" href="/">Back to the shop</a></p></section>`,
  });
}

export function json(data, status = 200) {
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

export async function stripe(env, method, path, params) {
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

export async function hmacHex(secret, message) {
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function safeEqual(a, b) {
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
export async function signDownloadToken(env, sessionId, productId, expiresAt) {
  const payload = `${sessionId}|${productId}|${expiresAt}`;
  const sig = await hmacHex(env.DOWNLOAD_SIGNING_SECRET, payload);
  return `${b64url(payload)}.${sig}`;
}

export async function verifyDownloadToken(env, token) {
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
export async function verifyStripeSignature(payload, header, secret, toleranceSeconds = 300) {
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
export const SESSION_ID_PATTERN = /^cs_(test|live)_[A-Za-z0-9]{10,200}$/;

// Idempotent: re-sending the same Stripe event never duplicates or resets an order.
export async function saveOrder(env, session) {
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

export async function getOrder(env, sessionId) {
  return env.DB.prepare("SELECT * FROM orders WHERE session_id = ?1").bind(sessionId).first();
}

export function orderExpiry(order) {
  return new Date(order.created_at).getTime() + DOWNLOAD_WINDOW_HOURS * 3600 * 1000;
}

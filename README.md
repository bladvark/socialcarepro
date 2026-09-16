# SocialCarePro.com

Storefront on Cloudflare Pages, with Stripe Checkout, a D1 order database and private R2 file storage.
There is NO package.json on purpose: nothing needs installing or building.

## Folder layout

    public/            static files served to visitors (Build output directory)
    functions/         server code: pages, checkout, webhook, downloads
    schema.sql         database table (run once in D1)

## Cloudflare Pages settings (Settings > Build)

- Framework preset: None
- Build command: (leave empty)
- Build output directory: public

## One-time setup

1. D1: create database `socialcarepro-orders`, open its Console, paste schema.sql, run.
2. R2: create private bucket `socialcarepro-products`. Upload the 18 product files with these exact names:
   01-Mental-Capacity-Assessment-Pack.docx ... 18-Incident-and-Accident-Report-Pack.docx
   (full list in functions/_catalog.js). Keep public access OFF.
3. Pages project > Settings > Bindings:
   - D1 database  -> variable name `DB`        -> socialcarepro-orders
   - R2 bucket    -> variable name `PRODUCTS`  -> socialcarepro-products
4. Pages project > Settings > Variables and secrets (type: Secret):
   - STRIPE_SECRET_KEY        sk_test_... (sk_live_... when going live)
   - STRIPE_WEBHOOK_SECRET    whsec_...   (from step 5)
   - DOWNLOAD_SIGNING_SECRET  any long random string (40+ characters)
   - VAT_REGISTERED           plain text `true` only if VAT-registered; otherwise leave it out
5. Stripe Dashboard > Developers > Webhooks > Add endpoint:
   - URL: https://socialcarepro.com/api/stripe-webhook
   - Events: checkout.session.completed, checkout.session.async_payment_succeeded, charge.refunded
6. Stripe Dashboard > Settings > Public details: business name, support email hello@socialcarepro.com,
   Terms of service URL https://socialcarepro.com/terms (required for the checkout terms tickbox).
7. Edit the BUSINESS block at the top of functions/_lib.js (trading name, legal entity, address).
8. Security > WAF > Rate limiting: add a rule for URI path starting /api/ (e.g. 30 requests per minute per IP).
9. Redeploy after changing bindings or secrets.

## Test (Stripe test mode, card 4242 4242 4242 4242)

Single product, bundle (5 files), bundle + one of its products (deduplicated), tampered/expired link (403),
11th download (blocked), refund (downloads blocked), resend webhook (no duplicate order).

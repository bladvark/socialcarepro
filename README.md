# SocialCarePro.com

Resource store on Cloudflare Pages, with Stripe Checkout, a D1 order database and private R2 file storage.
There is NO package.json on purpose: nothing needs installing or building.

## Folder layout

    public/            static files served to visitors (Build output directory)
    functions/         server code: pages, checkout, webhook, downloads, My downloads
    schema.sql         database tables (already applied to socialcarepro-orders)

## Cloudflare Pages settings (Settings > Build)

- Framework preset: None
- Build command: (leave empty)
- Build output directory: public

## One-time setup

1. D1 database `socialcarepro-orders`: DONE (orders and recovery_attempts tables created).
   If you ever recreate it, open its Console, paste schema.sql and run it.
2. R2 bucket `socialcarepro-products`: DONE (private). Upload every product file named exactly as the
   `file` value for that product in functions/_catalog.js. Keep Public access and the r2.dev URL OFF.
3. Pages project > Settings > Bindings:
   - D1 database -> variable name `DB`       -> socialcarepro-orders
   - R2 bucket   -> variable name `PRODUCTS` -> socialcarepro-products
4. Pages project > Settings > Variables and secrets (type: Secret):
   - STRIPE_SECRET_KEY        sk_test_... (sk_live_... when going live)
   - STRIPE_WEBHOOK_SECRET    whsec_...   (from step 5)
   - DOWNLOAD_SIGNING_SECRET  any long random string (40+ characters)
   - VAT_REGISTERED           plain text `true` only if VAT-registered; otherwise leave it out
5. Stripe Dashboard > Developers > Webhooks > Add destination:
   - URL: https://socialcarepro.com/api/stripe-webhook
   - Events: checkout.session.completed, checkout.session.async_payment_succeeded, charge.refunded
6. Stripe Dashboard (Test mode OFF to edit):
   - Settings > Business > Public details: business name SocialCarePro,
     support email support@socialcarepro.com, Terms of service URL https://socialcarepro.com/terms
   - Settings > Customer emails: turn ON successful payments and invoice emails
     (customers need the invoice number for the My downloads page)
7. Business details: edit the BUSINESS block at the top of functions/_lib.js
   (operator, companyNumber, address, vatNumber, emails). Empty fields are simply not shown.
8. Security > WAF > Rate limiting: add a rule for URI path starting /api/ or equal to /my-downloads
   (e.g. 30 requests per minute per IP).
9. Redeploy after changing bindings or secrets (Deployments > ... > Retry deployment).
10. Going live: swap STRIPE_SECRET_KEY to sk_live_..., create the same webhook in live mode and
    replace STRIPE_WEBHOOK_SECRET with the live whsec_..., then redeploy.

## Adding a product

Add an entry to PRODUCTS in functions/_catalog.js (unique id, title, price in pence, category, file,
format, blurb, includes), upload the file to R2 with the same name, and commit. It appears automatically.

## Test (Stripe test mode, card 4242 4242 4242 4242)

- Single product: thank-you page shows one download that works
- Bundle: all its files appear
- Bundle + one of its products in the basket: the duplicate is removed
- Tampered or expired download link: "link has expired" page
- 21st download on one order: blocked
- My downloads page: email + invoice (or receipt) number shows fresh links; wrong number is rejected
- Refund in Stripe: downloads and My downloads are blocked for that order
- Resend a webhook from Stripe: no duplicate order

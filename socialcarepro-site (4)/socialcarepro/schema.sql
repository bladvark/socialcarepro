-- SocialCarePro orders database (Cloudflare D1: socialcarepro-orders)
CREATE TABLE IF NOT EXISTS orders (
  session_id      TEXT PRIMARY KEY,
  payment_intent  TEXT,
  email           TEXT NOT NULL,
  items           TEXT NOT NULL,
  amount_total    INTEGER NOT NULL,
  created_at      TEXT NOT NULL,
  download_count  INTEGER NOT NULL DEFAULT 0,
  refunded        INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_orders_payment_intent ON orders (payment_intent);

-- Limits "My downloads" lookups to protect against guessing
CREATE TABLE IF NOT EXISTS recovery_attempts (
  email TEXT NOT NULL,
  at    TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_recovery_email_at ON recovery_attempts (email, at);

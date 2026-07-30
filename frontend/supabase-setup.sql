-- ============================================================
-- Run this in your Supabase project → SQL Editor → New Query
-- ============================================================

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id           BIGSERIAL PRIMARY KEY,
  sender_name  VARCHAR(100)  NOT NULL,
  sender_email VARCHAR(150)  NOT NULL,
  subject      VARCHAR(100)  NOT NULL,
  message      TEXT          NOT NULL,
  want_collab  BOOLEAN       NOT NULL DEFAULT FALSE,
  sender_ip    VARCHAR(60)   NOT NULL DEFAULT 'unknown',
  status       VARCHAR(20)   NOT NULL DEFAULT 'pending',
  created_at   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  read_at      TIMESTAMPTZ
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_created_at  ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_status       ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_sender_ip    ON contact_messages(sender_ip);

-- Row Level Security — only service role can read/write
-- (your Vercel Function uses the service role key)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow the service role full access (used by Vercel Function)
CREATE POLICY "service_role_all"
  ON contact_messages
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Verify
SELECT 'Table created successfully ✔' AS status;

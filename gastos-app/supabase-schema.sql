-- ============================================================
-- SUPABASE SQL: Crear la tabla "gastos"
-- Corré este script en: Supabase → SQL Editor → New Query
-- ============================================================

CREATE TABLE IF NOT EXISTS gastos (
  id          BIGSERIAL PRIMARY KEY,
  descripcion TEXT        NOT NULL,
  monto       NUMERIC     NOT NULL CHECK (monto > 0),
  categoria   TEXT        NOT NULL CHECK (categoria IN ('comida', 'transporte', 'ocio', 'otros')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índice para ordenar rápido por fecha
CREATE INDEX IF NOT EXISTS gastos_created_at_idx ON gastos (created_at DESC);

-- ── Row Level Security (RLS) ──
-- Habilitar RLS para que la anon key funcione
ALTER TABLE gastos ENABLE ROW LEVEL SECURITY;

-- Política: permitir TODO al rol "anon" (público, sin auth)
-- Si después agregás autenticación, cambiá esto.
CREATE POLICY "Acceso público a gastos"
  ON gastos
  FOR ALL
  TO anon
  USING (true)
  WITH CHECK (true);

-- ── Datos de ejemplo (opcional) ──
-- INSERT INTO gastos (descripcion, monto, categoria) VALUES
--   ('Almuerzo en el trabajo', 1200.00, 'comida'),
--   ('Subte ida y vuelta',      350.00, 'transporte'),
--   ('Netflix mensual',         999.00, 'ocio');

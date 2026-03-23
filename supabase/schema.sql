-- Criar tabelas para o Supabase

CREATE TABLE IF NOT EXISTS study_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_number text,
  category text,
  question text,
  answer text,
  source_block text,
  is_duplicate boolean DEFAULT false,
  order_index integer,
  created_at timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid, -- Nullable para usuários não logados se houver tracking anônimo no backend
  study_item_id uuid REFERENCES study_items(id),
  reviewed boolean DEFAULT false,
  difficult boolean DEFAULT false,
  got_it_right boolean,
  got_it_wrong boolean,
  review_later boolean DEFAULT false,
  updated_at timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS study_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  mode text,
  total_answered integer DEFAULT 0,
  total_right integer DEFAULT 0,
  total_wrong integer DEFAULT 0,
  created_at timestamp DEFAULT now()
);

-- fintegrade.ai — segmentacja zapytań z formularza kontaktowego
-- Uruchom w Supabase SQL Editor przed wdrożeniem wersji formularza z polem "Czego dotyczy kontakt?".

alter table public.contact_messages
  add column if not exists topic text;

comment on column public.contact_messages.topic is
  'Temat kontaktu: micro_product, controlling_ai, partnership lub other.';

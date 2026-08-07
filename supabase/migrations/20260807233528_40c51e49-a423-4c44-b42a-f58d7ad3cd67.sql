ALTER TABLE public.products ADD COLUMN IF NOT EXISTS slug text;

UPDATE public.products
SET slug = (CASE WHEN condition = 'new' THEN 'new-' ELSE 'pre-owned-' END)
  || regexp_replace(lower(model), '[^a-z0-9]+', '-', 'g');

ALTER TABLE public.products ALTER COLUMN slug SET NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS products_slug_key ON public.products (slug);
CREATE TABLE public.admin_emails (
  email TEXT PRIMARY KEY
);
GRANT SELECT ON public.admin_emails TO authenticated;
GRANT ALL ON public.admin_emails TO service_role;
ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;

INSERT INTO public.admin_emails (email) VALUES ('gadgetzone.tech.za@gmail.com'), ('altairwebs24@gmail.com');

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_emails
    WHERE lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

CREATE POLICY "Admins can view admin emails" ON public.admin_emails
FOR SELECT TO authenticated USING (public.is_admin());

CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  model TEXT NOT NULL,
  condition TEXT NOT NULL CHECK (condition IN ('new','preowned')),
  price_zar INTEGER NOT NULL,
  image_key TEXT NOT NULL DEFAULT 'iphone-x',
  image_path TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Admins can insert products" ON public.products FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update products" ON public.products FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admins can delete products" ON public.products FOR DELETE TO authenticated USING (public.is_admin());

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER products_updated_at BEFORE UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE POLICY "Admins can upload product images" ON storage.objects
FOR INSERT TO authenticated WITH CHECK (bucket_id = 'product-images' AND public.is_admin());
CREATE POLICY "Admins can update product images" ON storage.objects
FOR UPDATE TO authenticated USING (bucket_id = 'product-images' AND public.is_admin());
CREATE POLICY "Admins can delete product images" ON storage.objects
FOR DELETE TO authenticated USING (bucket_id = 'product-images' AND public.is_admin());
CREATE POLICY "Admins can read product images" ON storage.objects
FOR SELECT TO authenticated USING (bucket_id = 'product-images' AND public.is_admin());

INSERT INTO public.products (model, condition, price_zar, image_key, sort_order) VALUES
('iPhone X','new',3200,'iphone-x',1),
('iPhone XR','new',3800,'iphone-xr',2),
('iPhone XS Max','new',4000,'iphone-x',3),
('iPhone 11','new',4200,'iphone-11',4),
('iPhone 11 Pro','new',4500,'iphone-11',5),
('iPhone 11 Pro Max','new',4800,'iphone-11',6),
('iPhone 12','new',5000,'iphone-12',7),
('iPhone 12 Pro Max','new',5200,'iphone-12',8),
('iPhone 12 Pro','new',5500,'iphone-12',9),
('iPhone 13','new',6200,'iphone-13',10),
('iPhone 13 Pro Max','new',6600,'iphone-13',11),
('iPhone 14','new',9000,'iphone-14',12),
('iPhone 14 Pro','new',9200,'iphone-14',13),
('iPhone 14 Pro Max','new',10200,'iphone-14',14),
('iPhone 15','new',11000,'iphone-15',15),
('iPhone 15 Pro','new',12000,'iphone-15',16),
('iPhone 15 Pro Max','new',12800,'iphone-15',17),
('iPhone 16','new',13000,'iphone-16',18),
('iPhone 16 Pro','new',14500,'iphone-16',19),
('iPhone 16 Pro Max','new',15000,'iphone-16',20),
('iPhone 17','new',17000,'iphone-17',21),
('iPhone 17 Pro','new',18500,'iphone-17',22),
('iPhone 17 Pro Max','new',20000,'iphone-17',23),
('iPhone X','preowned',1200,'iphone-x',1),
('iPhone XR','preowned',1800,'iphone-xr',2),
('iPhone XS Max','preowned',2000,'iphone-x',3),
('iPhone 11','preowned',2200,'iphone-11',4),
('iPhone 11 Pro','preowned',2500,'iphone-11',5),
('iPhone 11 Pro Max','preowned',2800,'iphone-11',6),
('iPhone 12','preowned',3000,'iphone-12',7),
('iPhone 12 Pro Max','preowned',3500,'iphone-12',8),
('iPhone 12 Pro','preowned',3800,'iphone-12',9),
('iPhone 13','preowned',4200,'iphone-13',10),
('iPhone 13 Pro Max','preowned',4200,'iphone-13',11),
('iPhone 14','preowned',5000,'iphone-14',12),
('iPhone 14 Pro','preowned',5200,'iphone-14',13),
('iPhone 14 Pro Max','preowned',5800,'iphone-14',14),
('iPhone 15','preowned',6000,'iphone-15',15),
('iPhone 15 Pro','preowned',6200,'iphone-15',16),
('iPhone 15 Pro Max','preowned',6800,'iphone-15',17),
('iPhone 16','preowned',7000,'iphone-16',18),
('iPhone 16 Pro','preowned',7500,'iphone-16',19),
('iPhone 16 Pro Max','preowned',8000,'iphone-16',20),
('iPhone 17','preowned',8400,'iphone-17',21),
('iPhone 17 Pro','preowned',9500,'iphone-17',22),
('iPhone 17 Pro Max','preowned',10000,'iphone-17',23);
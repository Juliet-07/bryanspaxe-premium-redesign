CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  project_description text NOT NULL,
  attachment_name text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.quote_requests TO authenticated;
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit quote requests" ON public.quote_requests FOR INSERT TO anon, authenticated WITH CHECK (length(full_name) BETWEEN 2 AND 120 AND length(company) BETWEEN 2 AND 160 AND length(email) BETWEEN 5 AND 254 AND length(phone) BETWEEN 5 AND 40 AND length(project_description) BETWEEN 10 AND 5000);

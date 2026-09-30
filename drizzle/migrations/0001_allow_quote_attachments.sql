CREATE POLICY "Anyone can upload quote attachments" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'quote-attachments' AND (storage.foldername(name))[1] = 'requests');

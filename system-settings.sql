-- SYSTEM_SETTINGS

INSERT INTO system_settings (key, value, description, type, is_public, updated_at) VALUES
('site_title', 'Protek Analitik - Türkiye''nin Laboratuvar Teknolojileri Lideri', 'Ana site başlığı', 'string', 1, '2024-01-01 00:00:00'),
('site_description', 'Laboratuvar teknolojilerinde lider, güvenilir, yenilikçi ve kullanıcı odaklı çözümler.', 'Site açıklaması', 'string', 1, '2024-01-01 00:00:00'),
('company_name', 'Protek Analitik', 'Şirket adı', 'string', 1, '2024-01-01 00:00:00'),
('company_email', 'info@protekanalitik.com', 'Şirket e-posta', 'string', 1, '2024-01-01 00:00:00'),
('company_phone', '+90 212 555 0100', 'Şirket telefonu', 'string', 1, '2024-01-01 00:00:00'),
('company_address', 'Maslak Mahallesi, Ahi Evran Caddesi No:6, 34398 Şişli/İstanbul', 'Şirket adresi', 'string', 1, '2024-01-01 00:00:00'),
('maintenance_mode', 'false', 'Bakım modu durumu', 'boolean', 0, '2024-01-01 00:00:00'),
('max_file_upload_size', '5242880', 'Maksimum dosya boyutu (5MB)', 'number', 0, '2024-01-01 00:00:00'),
('products_per_page', '12', 'Sayfa başına ürün sayısı', 'number', 0, '2024-01-01 00:00:00'),
('news_per_page', '9', 'Sayfa başına haber sayısı', 'number', 0, '2024-01-01 00:00:00');

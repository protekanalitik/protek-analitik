-- Sample Data for Protek Analitik D1 Database
-- CMS Panel forms ile uyumlu complete table structure

-- Categories (Ana Kategoriler)
INSERT INTO categories (id, name, key, description, icon, is_active, created_at, updated_at) VALUES 
('lab-equipment', 'Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler', 'laboratuvar-ekipmanlari', 'Laboratuvar işletmeleriniz için kapsamlı ekipman, malzeme ve kit çözümleri', 'beaker', 1, datetime('now'), datetime('now')),
('process-control', 'Proses Kontrol Ve Hat Tipi Analiz Çözümleri', 'proses-kontrol', 'Üretim hattında gerçek zamanlı analiz ve kontrol çözümleri', 'cube', 1, datetime('now'), datetime('now')),
('pilot-production', 'Pilot Tipi Üretim ve Proses Simülasyon Sistemleri', 'pilot-uretim', 'Pilot ölçekte üretim ve proses geliştirme sistemleri', 'wrench', 1, datetime('now'), datetime('now'));

-- Subcategories (Alt Kategoriler)  
INSERT INTO subcategories (id, category_id, name, key, description, is_active, created_at, updated_at) VALUES
('genel-lab', 'lab-equipment', 'Genel Laboratuvar Ekipmanları', 'genel-lab', 'Temel laboratuvar ekipmanları ve araçları', 1, datetime('now'), datetime('now')),
('fiziksel-analiz', 'lab-equipment', 'Fiziksel Analiz Ekipmanları', 'fiziksel-analiz', 'Fiziksel özellik analizi için cihazlar', 1, datetime('now'), datetime('now')),
('kimyasal-analiz', 'lab-equipment', 'Kimyasal Analiz Ekipmanları', 'kimyasal-analiz', 'Kimyasal kompozisyon analizi cihazları', 1, datetime('now'), datetime('now')),
('proses-analiz', 'process-control', 'Proses Analiz Sistemleri', 'proses-analiz', 'Gerçek zamanlı proses analiz çözümleri', 1, datetime('now'), datetime('now')),
('hat-tipi', 'process-control', 'Hat Tipi Analiz Cihazları', 'hat-tipi', 'Üretim hattına entegre analiz sistemleri', 1, datetime('now'), datetime('now')),
('pilot-sistemler', 'pilot-production', 'Pilot Üretim Sistemleri', 'pilot-sistemler', 'Küçük ölçekli üretim sistemleri', 1, datetime('now'), datetime('now'));

-- Users already exist from schema, skipping to avoid conflicts

-- Sample Products (Her kategori için örnek ürünler)
INSERT INTO products (id, name, description, overview, category_id, subcategory_id, image, images, features, applications, specifications, data_sheet, catalog_files, price, is_warrantied, has_free_shipping, is_featured, is_active, display_order, meta_title, meta_description, created_at, updated_at) VALUES

-- Lab Equipment Products
('prod-1', 'Analitik Terazi XAW220', 'Yüksek hassasiyetli analitik terazi laboratoriumlarda hassas ölçümler için tasarlandı', 'Protek Analitik XAW220 Analitik Terazi, 0.1 mg hassasiyetle çalışan ve günlük laboratuvar uygulamaları için ideal olan profesyonel bir cihazdır.', 'lab-equipment', 'genel-lab', '/images/products/terazi-1.jpg', '["\/images\/products\/terazi-1.jpg","\/images\/products\/terazi-2.jpg","\/images\/products\/terazi-3.jpg"]', '["0.1 mg hassasiyet","220g kapasite","İç kalibrasyon","Anti-vibrasyon sistemi","USB ve RS232 çıkış"]', '["Kimyasal analiz","Numune hazırlama","Kalite kontrol","Araştırma laboratuvarları"]', '{"Kapasite":"220g","Hassasiyet":"0.1mg","Kalibrasyon":"İç ve dış","İletişim":"USB, RS232","Ekran":"5.7 inç dokunmatik","Boyutlar":"230x350x340mm"}', 'https://docs.example.com/xaw220-datasheet.pdf', '["Kullanım Kılavuzu|https:\/\/docs.example.com\/xaw220-manual.pdf","Kalibrasyon Sertifikası|https:\/\/docs.example.com\/xaw220-certificate.pdf"]', 'Teklif alınız', 1, 1, 1, 1, 1, 'Analitik Terazi XAW220 - Protek Analitik', '0.1 mg hassasiyetli analitik terazi, laboratuvar kullanımı için ideal', datetime('now'), datetime('now')),

('prod-2', 'pH Metre PH-2600', 'Masaüstü dijital pH metre yüksek doğruluk ve güvenilirlik sağlar', 'PH-2600 masaüstü pH metre, gıda, su ve kimya laboratuvarlarında kullanım için tasarlanmış profesyonel bir cihazdır.', 'lab-equipment', 'kimyasal-analiz', '/images/products/ph-metre-1.jpg', '["\/images\/products\/ph-metre-1.jpg","\/images\/products\/ph-metre-2.jpg"]', '["±0.01 pH doğruluk","Otomatik kalibrasyon","Hafıza: 500 ölçüm","USB veri transfer","GLP uyumlu"]', '["Su analizi","Gıda kontrolü","Kimyasal prosesler","Çevre monitörlüğü"]', '{"pH Aralığı":"-2.00 ~ 20.00 pH","Doğruluk":"±0.01 pH","Sıcaklık":"0~100°C","Kalibrasyon":"1-5 nokta","Ekran":"LCD, arka ışıklı","Boyutlar":"160x190x70mm"}', 'https://docs.example.com/ph2600-datasheet.pdf', '["Teknik Broşür|https:\/\/docs.example.com\/ph2600-brochure.pdf"]', '4.850 ₺', 1, 0, 0, 1, 2, 'pH Metre PH-2600 - Dijital pH Ölçüm Cihazı', 'Yüksek doğruluklu masaüstü pH metre, laboratuvar ve saha kullanımı için', datetime('now'), datetime('now')),

-- Process Control Products
('prod-3', 'İnline NIR Spektrometre NIR-8000', 'Gerçek zamanlı NIR spektroskopi ile proses kontrolü', 'NIR-8000 inline spektrometre, üretim hattında kesintisiz ölçüm yaparak proses optimizasyonu sağlar.', 'process-control', 'proses-analiz', '/images/products/nir-1.jpg', '["\/images\/products\/nir-1.jpg","\/images\/products\/nir-2.jpg","\/images\/products\/nir-3.jpg","\/images\/products\/nir-4.jpg"]', '["1100-2500 nm dalga boyu","Gerçek zamanlı ölçüm","Ethernet bağlantı","Ex-proof tasarım","Uzaktan erişim"]', '["Gıda üretimi","İlaç endüstrisi","Petrokimya","Plastik üretimi"]', '{"Dalga Boyu":"1100-2500 nm","Çözünürlük":"10 nm","Ölçüm Süresi":"< 1 saniye","İletişim":"Ethernet, Modbus","Çalışma Sıcaklığı":"-20 ~ +60°C","Koruma Sınıfı":"IP65"}', 'https://docs.example.com/nir8000-datasheet.pdf', '["Uygulama Rehberi|https:\/\/docs.example.com\/nir8000-applications.pdf","Kurulum Kılavuzu|https:\/\/docs.example.com\/nir8000-installation.pdf"]', 'Teklif alınız', 1, 1, 1, 1, 3, 'İnline NIR Spektrometre NIR-8000 - Gerçek Zamanlı Analiz', 'Gerçek zamanlı NIR spektroskopi ile proses kontrolü ve optimizasyon', datetime('now'), datetime('now')),

-- Pilot Production Products  
('prod-4', 'Mini Reaktör Sistemi MR-500', 'Küçük ölçekli kimyasal reaksiyon sistemi', 'MR-500 mini reaktör sistemi, proses geliştirme ve pilot üretim uygulamaları için tasarlanmıştır.', 'pilot-production', 'pilot-sistemler', '/images/products/reaktor-1.jpg', '["\/images\/products\/reaktor-1.jpg","\/images\/products\/reaktor-2.jpg"]', '["500ml hacim","Basınç kontrolü","Sıcaklık kontrolü","Karıştırma sistemi","Güvenlik sistemleri"]', '["İlaç geliştirme","Kimyasal sentez","Katalizör testi","Proses optimizasyonu"]', '{"Hacim":"500 mL","Basınç":"0-10 bar","Sıcaklık":"0-200°C","Karıştırma":"50-1500 rpm","Materyal":"Borosilikat cam","Kontrol":"PID kontrolör"}', 'https://docs.example.com/mr500-datasheet.pdf', '["Güvenlik Kılavuzu|https:\/\/docs.example.com\/mr500-safety.pdf"]', '28.500 ₺', 1, 1, 0, 1, 4, 'Mini Reaktör Sistemi MR-500 - Pilot Üretim', 'Küçük ölçekli kimyasal reaksiyon sistemi, proses geliştirme için ideal', datetime('now'), datetime('now'));

-- News (Haberler)
INSERT INTO news (id, title, content, excerpt, author, image_url, category, tags, is_published, is_featured, published_at, created_at, updated_at) VALUES
('news-1', 'Yeni Laboratuvar Açılışımız', '<p>İstanbul Teknopark''ta yeni laboratuvarımızı açtık. Modern cihazlar ve uzman kadromuzla hizmetinizdeyiz.</p>', 'İstanbul Teknopark''ta yeni laboratuvarımız açıldı', 'Protek Analitik', '/images/news/lab-opening.jpg', 'Kurumsal', 'laboratuvar,açılış,istanbul', 1, 1, datetime('now'), datetime('now'), datetime('now')),
('news-2', 'Yeni Ürün Lansmanı: XAW220 Analitik Terazi', '<p>Yeni nesil analitik terazimiz XAW220 ile tanışın. 0.1 mg hassasiyetle çalışan bu cihaz...</p>', 'XAW220 Analitik Terazi lansmanı gerçekleştirildi', 'Protek Analitik', '/images/news/product-launch.jpg', 'Ürün', 'ürün,terazi,lansman', 1, 0, datetime('now'), datetime('now'), datetime('now'));

-- Events (Etkinlikler)
INSERT INTO events (id, title, description, content, location, event_date, end_date, image_url, category, max_participants, registration_required, registration_url, is_published, is_featured, created_at, updated_at) VALUES
('event-1', 'Laboratuvar Ekipmanları Fuarı 2024', 'Laboratuvar teknolojilerinin sergilendiği büyük fuar', '<p>2024 yılının en kapsamlı laboratuvar ekipmanları fuarında bizi ziyaret edin.</p>', 'İstanbul Fuar Merkezi', '2024-09-15 09:00:00', '2024-09-17 18:00:00', '/images/events/lab-fair.jpg', 'Fuar', 1000, 0, '', 1, 1, datetime('now'), datetime('now')),
('event-2', 'pH Metre Kullanım Eğitimi', 'pH metre cihazlarının doğru kullanımı eğitimi', '<p>Uzmanlarımızdan pH metre kullanımını öğrenin.</p>', 'Protek Analitik Eğitim Merkezi', '2024-08-20 14:00:00', '2024-08-20 17:00:00', '/images/events/training.jpg', 'Eğitim', 20, 1, 'https://protekanalitik.com/egitim-kayit', 1, 0, datetime('now'), datetime('now'));

-- System Settings (Sistem ayarları)
INSERT INTO system_settings (setting_key, setting_value, description, created_at, updated_at) VALUES
('site_title', 'Protek Analitik', 'Site başlığı', datetime('now'), datetime('now')),
('site_description', 'Türkiye''nin Laboratuvar Teknolojileri Lideri', 'Site açıklaması', datetime('now'), datetime('now')),
('contact_email', 'info@protekanalitik.com', 'İletişim e-posta adresi', datetime('now'), datetime('now')),
('contact_phone', '+90 212 XXX XX XX', 'İletişim telefon numarası', datetime('now'), datetime('now')),
('maintenance_mode', '0', 'Bakım modu (0: Kapalı, 1: Açık)', datetime('now'), datetime('now'));

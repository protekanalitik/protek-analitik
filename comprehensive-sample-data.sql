-- Comprehensive Sample Data for Protek Analitik D1 Database
-- This file contains professional sample data matching website structure

-- =============================================================================
-- NEWS DATA (Haberler) - Website uyumlu profesyonel içerikler
-- =============================================================================

INSERT INTO news (id, title, slug, summary, content, category, author, publish_date, image_url, tags, is_featured, is_published, created_at, updated_at) VALUES
('protek-yeni-urun-serisi-2024', 
 'Protek Analitik 2024 Yılında Yeni Laboratuvar Ekipmanları Serisi Tanıttı',
 'Gıda analizi alanında çığır açacak yeni ürün serimiz ile laboratuvarlarınızın verimliliğini artırın.',
 'Protek Analitik olarak, 2024 yılının ilk çeyreğinde gıda analizi sektöründe devrim niteliğinde yeni ürünlerimizi tanıtmaktan büyük mutluluk duyuyoruz.

**Yeni Ürün Serisi Özellikler**

*Hızlı Protein Analiz Sistemi (HPA-2024)*
- **30 saniyede** protein analizi
- %99.8 doğruluk oranı
- Otomatik kalibrasyon özelliği
- Kullanıcı dostu arayüz

*Mikrobiyal Hızlı Test Kiti (MHT-Pro)*
- E.coli, Salmonella, Listeria testi bir arada
- 15 dakikada sonuç
- Sahada kullanım imkanı
- 500+ test kapasitesi

*Smart Lab Entegrasyon Sistemi*
- IoT tabanlı veri toplama
- Gerçek zamanlı raporlama
- Mobil uygulama desteği
- Bulut tabanlı veri saklama

**Sektördeki Etkisi**

Bu yeni ürün serisi ile laboratuvarlar:
- Test sürelerini %80 oranında kısaltabilecek
- İnsan hatası riskini minimize edecek
- Maliyet tasarrufu sağlayacak
- Kalite güvencesini artıracak',
 'sirket-haberleri',
 'Protek Analitik',
 '/images/lab-equipment-2024.jpg',
 'Yeni Ürün,Laboratuvar Ekipmanları,Gıda Analizi,Teknoloji',
 true,
 true,
 'protek-yeni-urun-serisi-2024',
 '2024-03-15',
 '2024-03-15 09:00:00',
 '2024-03-15 09:00:00'),

('ai-analytics-trend-2024',
 'Yapay Zeka ve Analitik Sektörde 2024 Trendleri',
 'Laboratuvar analitik sektöründe yapay zeka uygulamalarının nasıl devrim yarattığını keşfedin.',
 'Yapay zeka teknolojileri, laboratuvar analitik sektöründe büyük değişimler yaratıyor. 2024 yılında öne çıkan başlıca trendler:

**1. Otomatik Veri Analizi**
- Büyük veri setlerinin hızlı işlenmesi
- Kalıp tanıma ve anomali tespiti
- Tahmine dayalı bakım

**2. Akıllı Kalite Kontrol**
- Gerçek zamanlı kalite izleme
- Otomatik kalibrasyon sistemleri
- Hata tahmin modelleri

**3. Dijital Lab Asistanları**
- Sesli komut sistemleri
- Akıllı protokol önerileri
- Otomatik raporlama

**Protek Analitik''in Yaklaşımı**

Şirketimiz olarak, bu teknolojik dönüşümün öncüsü olmaya devam ediyoruz. 2024 yılında AI destekli ürünlerimizle sektöre yön vermeye kararlıyız.',
 'sektor-guncel',
 'Teknoloji Ekibi',
 '/images/ai-analytics.jpg',
 'Yapay Zeka,Analitik,Teknoloji,Trend',
 true,
 true,
 'ai-analytics-trend-2024',
 '2024-02-20',
 '2024-02-20 14:30:00',
 '2024-02-20 14:30:00'),

('iso-sertifika-guncelleme',
 'ISO 9001:2015 Kalite Yönetim Sistemi Sertifikamızı Yeniledik',
 'Protek Analitik kalite standartlarını sürdürmek adına ISO sertifikasını başarıyla yeniledi.',
 'Protek Analitik olarak, kalite yönetim sistemimizin ISO 9001:2015 standardına uygunluğunu gösteren sertifikamızı başarıyla yeniledik.

**Sertifika Kapsamı:**
- Laboratuvar ekipmanları satışı
- Teknik destek hizmetleri
- Kalibrasyon ve bakım
- Eğitim programları

**Kalite Politikamız:**
- Müşteri memnuniyeti odaklı hizmet
- Sürekli iyileştirme kültürü
- Çevre ve güvenlik bilinci
- Teknolojik yenilik

Bu sertifika, müşterilerimize sunduğumuz hizmet kalitesinin uluslararası standartlarda olduğunun garantisidir.',
 'sirket-haberleri',
 'Kalite Departmanı',
 '/images/iso-certificate.jpg',
 'ISO,Kalite,Sertifika,Standart',
 false,
 true,
 'iso-sertifika-guncelleme',
 '2024-01-10',
 '2024-01-10 11:00:00',
 '2024-01-10 11:00:00');

-- =============================================================================
-- EVENTS DATA (Etkinlikler) - Fuarlar, seminerler, eğitimler
-- =============================================================================

INSERT INTO events (id, title, description, event_type, start_date, end_date, location, address, registration_url, max_participants, current_participants, is_featured, is_published, organizer, contact_email, contact_phone, created_at, updated_at) VALUES
('analytica-2024-munich',
 'Analytica 2024 Münih Fuarı',
 'Dünyanın en büyük analitik teknolojiler fuarı olan Analytica 2024''te standımızı ziyaret edin. En yeni ürünlerimizi tanıtacağız ve canlı demonstrasyonlar gerçekleştireceğiz.

**Fuar Programımız:**
- Stand No: 123A, Hall B2
- Canlı ürün demonstrasyonları
- Teknik uzmanlarımızla birebir görüşme
- Özel fuar indirimleri
- Yeni ürün tanıtımları

**Sergileyeceğimiz Ürünler:**
- Protein analiz sistemleri
- Mikrobiyal test kitleri  
- pH ve iletkenlik ölçüm cihazları
- Spektrofotometreler',
 'fuar',
 '2024-04-09 09:00:00',
 '2024-04-12 18:00:00',
 'Messe München, Almanya',
 'Am Messesee 2, 81829 München, Deutschland',
 'https://analytica.de',
 NULL,
 0,
 true,
 true,
 'Protek Analitik Uluslararası Ekibi',
 'fuar@protekanalitik.com',
 '+90 212 555 0123',
 '2024-01-15 10:00:00',
 '2024-01-15 10:00:00'),

('gida-analizi-semineri-2024',
 'Gıda Analizi Teknikleri Semineri',
 'Gıda endüstrisinde kalite kontrol ve güvenlik analizi konularında uzmanlaşmak isteyen profesyoneller için kapsamlı seminer.

**Program İçeriği:**
- Gıda güvenliği analiz yöntemleri
- Mikrobiyal kontaminasyon testi
- Beslenme değeri analizi
- Pestisit kalıntı analizi
- HACCP ve kalite sistemleri

**Hedef Kitle:**
- Gıda mühendisleri
- Kalite kontrol uzmanları
- Laboratuvar teknisyenleri
- R&D personeli

**Eğitmen Kadrosu:**
- Prof. Dr. Ayşe Yılmaz (İTÜ Gıda Mühendisliği)
- Mehmet Özkan (Protek Analitik Teknik Uzmanı)
- Dr. Fatma Kaya (TÜBITAK MAM)',
 'seminer',
 '2024-03-25 09:00:00',
 '2024-03-25 17:00:00',
 'Protek Analitik Eğitim Merkezi',
 'Maslak Mahallesi, Ahi Evran Caddesi No:6, 34398 Şişli/İstanbul',
 'https://protekanalitik.com/events/gida-semineri',
 40,
 23,
 true,
 true,
 'Protek Analitik Eğitim Departmanı',
 'egitim@protekanalitik.com',
 '+90 212 555 0145',
 '2024-02-01 14:00:00',
 '2024-02-01 14:00:00'),

('lab-teknisyeni-egitimi',
 'Laboratuvar Teknisyenleri İçin Temel Analiz Teknikleri Eğitimi',
 'Yeni mezun laboratuvar teknisyenleri ve sektöre yeni giren profesyoneller için pratik odaklı eğitim programı.

**Eğitim Modülleri:**
1. Laboratuvar güvenliği ve hijyen
2. Temel analiz cihazları kullanımı
3. Kalibrasyon ve validasyon
4. Veri kayıt ve raporlama
5. Kalite güvencesi
6. Troubleshooting teknikleri

**Uygulamalı Çalışmalar:**
- pH metre kullanımı
- Spektrofotometre analizi
- Mikroskop teknikleri
- Pipetleme teknikleri

**Sertifika:**
Eğitimi başarıyla tamamlayan katılımcılara Protek Analitik sertifikası verilir.',
 'egitim',
 '2024-05-15 09:00:00',
 '2024-05-17 17:00:00',
 'Protek Analitik Eğitim Merkezi',
 'Maslak Mahallesi, Ahi Evran Caddesi No:6, 34398 Şişli/İstanbul',
 'https://protekanalitik.com/events/teknisyen-egitimi',
 25,
 12,
 false,
 true,
 'Protek Analitik Eğitim Departmanı',
 'egitim@protekanalitik.com',
 '+90 212 555 0145',
 '2024-03-01 11:00:00',
 '2024-03-01 11:00:00');

-- =============================================================================
-- SYSTEM_SETTINGS - Site ayarları
-- =============================================================================

INSERT INTO system_settings (setting_key, setting_value, description, created_at, updated_at) VALUES
('site_title', 'Protek Analitik - Türkiye''nin Laboratuvar Teknolojileri Lideri', 'Ana site başlığı', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('site_description', 'Laboratuvar teknolojilerinde lider, güvenilir, yenilikçi ve kullanıcı odaklı çözümler.', 'Site açıklaması', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('company_name', 'Protek Analitik', 'Şirket adı', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('company_email', 'info@protekanalitik.com', 'Şirket iletişim e-postası', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('company_phone', '+90 212 555 0100', 'Şirket telefonu', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('company_address', 'Maslak Mahallesi, Ahi Evran Caddesi No:6, 34398 Şişli/İstanbul', 'Şirket adresi', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('maintenance_mode', 'false', 'Bakım modu durumu', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('max_file_upload_size', '5242880', 'Maksimum dosya yükleme boyutu (5MB)', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('products_per_page', '12', 'Sayfa başına ürün sayısı', '2024-01-01 00:00:00', '2024-01-01 00:00:00'),
('news_per_page', '9', 'Sayfa başına haber sayısı', '2024-01-01 00:00:00', '2024-01-01 00:00:00');

-- =============================================================================
-- CONTACT_MESSAGES - Örnek iletişim mesajları
-- =============================================================================

INSERT INTO contact_messages (id, name, email, phone, company, subject, message, message_type, is_read, replied, replied_at, replied_by, created_at) VALUES
('msg-' || substr(hex(randomblob(8)), 1, 12),
 'Ahmet Yılmaz',
 'ahmet.yilmaz@example.com',
 '+90 532 123 4567',
 'ABC Gıda Ltd.',
 'pH Metre Fiyat Talebi',
 'Merhaba, 

Laboratuvarımız için pH metre satın almayı planlıyoruz. Özellikle gıda analizi için uygun, otomatik kalibrasyon özellikli modelleri hakkında bilgi alabilir miyim?

Ayrıca fiyat listesi ve teslimat süresi bilgilerini de paylaşabilirseniz memnun olurum.

Teşekkürler.',
 'genel',
 false,
 false,
 NULL,
 NULL,
 '2024-01-20 10:30:00'),

('msg-' || substr(hex(randomblob(8)), 1, 12),
 'Dr. Fatma Öztürk',
 'fatma.ozturk@universitesi.edu.tr',
 '+90 544 987 6543',
 'XYZ Üniversitesi',
 'Spektrofotometre Eğitimi',
 'Sayın Protek Analitik ekibi,

Üniversitemizde yeni kurduğumuz analitik kimya laboratuvarında spektrofotometre kullanımı konusunda personel eğitimi almak istiyoruz. 

Bu konuda vereceğiniz eğitim programları var mı? Varsa detayları hakkında bilgi alabilir miyim?

İyi çalışmalar.',
 'egitim',
 true,
 true,
 '2024-01-21 14:00:00',
 'admin',
 '2024-01-20 14:45:00'),

('msg-' || substr(hex(randomblob(8)), 1, 12),
 'Mehmet Kaya',
 'm.kaya@labtech.com',
 '+90 505 111 2233',
 'LabTech Analiz',
 'Teknik Destek Talebi',
 'Merhabalar,

2022 yılında aldığımız LC-MS cihazında kalibrasyon problemi yaşıyoruz. Teknik destek ekibinizden yardım alabilir miyiz?

Cihaz seri no: LT-2022-0156

Acil durumda olduğumuz için en kısa sürede dönüş bekliyoruz.

Saygılarımla.',
 'teknik-destek',
 true,
 false,
 NULL,
 NULL,
 '2024-01-22 16:20:00');

-- =============================================================================
-- QUOTE_REQUESTS - Teklif talepleri
-- =============================================================================

INSERT INTO quote_requests (id, name, email, phone, company, title, products, additional_info, budget_range, deadline, status, created_at, updated_at) VALUES
('quote-' || substr(hex(randomblob(8)), 1, 12),
 'Zeynep Demir',
 'zeynep.demir@foodcorp.com',
 '+90 555 789 0123',
 'FoodCorp A.Ş.',
 'Gıda Laboratuvarı Kurulum Projesi',
 'pH Metre (5 adet), Spektrofotometre (2 adet), Mikroskop (3 adet), İnkübatör (1 adet)',
 'Yeni kuracağımız gıda analiz laboratuvarı için komple ekipman teklifi istiyoruz. 

Kurulum, eğitim ve 2 yıl teknik destek dahil olmak üzere kapsamlı bir teklif hazırlayabilir misiniz?

Laboratuvar alanı: 150 m²
Personel sayısı: 8 kişi
Analiz kapasitesi: Günde 100 numune

ISO 17025 akreditasyonu için uygun ekipmanlar tercih ediyoruz.',
 '₺500,000 - ₺750,000',
 '2024-02-15',
 'beklemede',
 '2024-01-18 09:15:00',
 '2024-01-18 09:15:00'),

('quote-' || substr(hex(randomblob(8)), 1, 12),
 'Ali Çelik',
 'ali.celik@research.org',
 '+90 533 456 7890',
 'Araştırma Enstitüsü',
 'Mikrobiyal Analiz Ekipmanları',
 'Otomatik Koloni Sayım Sistemi, Mikrobiyal İdentifikasyon Sistemi, Sterilizatör',
 'R&D projemiz kapsamında mikrobiyal analiz laboratuvarımızı güncellemek istiyoruz.

Özellikle hızlı sonuç alabilecek, otomatize sistemler arıyoruz.

Proje süresi: 6 ay
TÜBİTAK destekli proje
Akademik indirim uygulanabilir mi?',
 '₺200,000 - ₺300,000',
 '2024-03-01',
 'teklif-gonderildi',
 '2024-01-25 11:30:00',
 '2024-01-26 14:20:00');

-- =============================================================================
-- AUDIT_LOGS - Sistem audit kayıtları
-- =============================================================================

INSERT INTO audit_logs (id, table_name, record_id, action, old_values, new_values, user_id, ip_address, user_agent, created_at) VALUES
('audit-' || substr(hex(randomblob(8)), 1, 12),
 'products',
 'magnetik-karistirici-ms300',
 'UPDATE',
 '{"price": "Teklif alınız", "is_active": false}',
 '{"price": "₺25,000", "is_active": true}',
 'admin',
 '192.168.1.100',
 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
 '2024-01-20 10:15:00'),

('audit-' || substr(hex(randomblob(8)), 1, 12),
 'news',
 'protek-yeni-urun-serisi-2024',
 'CREATE',
 NULL,
 '{"title": "Protek Analitik 2024 Yılında Yeni Laboratuvar Ekipmanları Serisi Tanıttı", "is_published": true}',
 'admin',
 '10.0.0.50',
 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
 '2024-01-15 14:30:00'),

('audit-' || substr(hex(randomblob(8)), 1, 12),
 'categories',
 'laboratuvar-ekipmanlari',
 'UPDATE',
 '{"display_order": 2}',
 '{"display_order": 1}',
 'admin',
 '172.16.0.10',
 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
 '2024-01-10 09:45:00');

-- =============================================================================
-- FILE_UPLOADS - Dosya yükleme kayıtları
-- =============================================================================

INSERT INTO file_uploads (id, original_filename, stored_filename, file_path, file_size, mime_type, uploaded_by, entity_type, entity_id, upload_purpose, is_active, created_at) VALUES
('file-' || substr(hex(randomblob(8)), 1, 12),
 'spektrofotometre-katalog.pdf',
 'spektrofotometre-katalog-2024.pdf',
 '/uploads/catalogs/spektrofotometre-katalog-2024.pdf',
 2048576,
 'application/pdf',
 'admin',
 'product',
 'spektrofotometre-uv-vis-2024',
 'catalog',
 true,
 '2024-01-15 11:20:00'),

('file-' || substr(hex(randomblob(8)), 1, 12),
 'ph-metre-resim.jpg',
 'ph-metre-resim-001.jpg',
 '/uploads/products/ph-metre-resim-001.jpg',
 524288,
 'image/jpeg',
 'admin',
 'product',
 'ph-metre-digital-2024',
 'product_image',
 true,
 '2024-01-18 09:30:00'),

('file-' || substr(hex(randomblob(8)), 1, 12),
 'lab-setup-guide.pdf',
 'lab-setup-guide-v2.pdf',
 '/uploads/documents/lab-setup-guide-v2.pdf',
 1572864,
 'application/pdf',
 'admin',
 'general',
 NULL,
 'documentation',
 true,
 '2024-01-20 16:45:00');

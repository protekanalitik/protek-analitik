-- Correct Categories and Subcategories based on actual website structure

-- Insert subcategories for "Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler"
INSERT INTO subcategories (id, category_id, name, key, description, display_order, is_active, created_at, updated_at) VALUES
('fiziksel-analiz', 'lab-equipment', 'Fiziksel Analiz Ekipmanları', 'fiziksel-analiz', 'Fiziksel özellik analizi için profesyonel ekipmanlar', 1, 1, datetime('now'), datetime('now')),
('kimyasal-analiz', 'lab-equipment', 'Kimyasal Analiz Ekipmanları', 'kimyasal-analiz', 'Kimyasal kompozisyon analizi için gelişmiş cihazlar', 2, 1, datetime('now'), datetime('now')),
('mikrobiyoloji', 'lab-equipment', 'Mikrobiyoloji Analiz Ekipmanları', 'mikrobiyoloji', 'Mikrobiyolojik analiz ve kalite kontrol sistemleri', 3, 1, datetime('now'), datetime('now')),
('molekuler-biyoloji', 'lab-equipment', 'Moleküler Biyoloji/Genetik Analiz Ekipmanları', 'molekuler-biyoloji', 'DNA, RNA ve protein analizi için ileri teknoloji sistemler', 4, 1, datetime('now'), datetime('now')),
('test-olcu', 'lab-equipment', 'Test, Ölçü Kontrol Sistemleri', 'test-olcu', 'Kalibrasyon ve ölçüm kontrol ekipmanları', 5, 1, datetime('now'), datetime('now')),
('ambalaj-test', 'lab-equipment', 'Ambalaj ve Malzeme Test Sistemleri', 'ambalaj-test', 'Ambalaj ve malzeme dayanıklılık test cihazları', 6, 1, datetime('now'), datetime('now')),
('arge-ekipmanlari', 'lab-equipment', 'AR-GE Ekipmanları', 'arge-ekipmanlari', 'Araştırma ve geliştirme için özel ekipmanlar', 7, 1, datetime('now'), datetime('now'));

-- Insert subcategories for "Proses Kontrol Ve Hat Tipi Analiz Çözümleri"
INSERT INTO subcategories (id, category_id, name, key, description, display_order, is_active, created_at, updated_at) VALUES
('hat-tipi-analiz', 'process-control', 'Hat Tipi Analiz Sistemleri', 'hat-tipi-analiz', 'Üretim hattında gerçek zamanlı analiz sistemleri', 1, 1, datetime('now'), datetime('now')),
('proses-sensorleri', 'process-control', 'Proses Sensörleri ve Kontrol Sistemleri', 'proses-sensorleri', 'Süreç kontrolü için endüstriyel sensörler ve ölçüm sistemleri', 2, 1, datetime('now'), datetime('now'));

-- Insert subcategories for "Pilot Tipi Üretim ve Proses Simülasyon Sistemleri"
INSERT INTO subcategories (id, category_id, name, key, description, display_order, is_active, created_at, updated_at) VALUES
('karistirma', 'pilot-production', 'Karıştırma ve Homojenizasyon', 'karistirma', 'Karıştırma, homojenizasyon ve dağıtma ekipmanları', 1, 1, datetime('now'), datetime('now')),
('kurutma-isleme', 'pilot-production', 'Kurutma ve İşleme', 'kurutma-isleme', 'Spray dryer, fluid bed dryer ve kurutma sistemleri', 2, 1, datetime('now'), datetime('now')),
('filtrasyon', 'pilot-production', 'Filtrasyon ve Ayrıştırma', 'filtrasyon', 'Pilot ölçekte filtrasyon ve ayrıştırma sistemleri', 3, 1, datetime('now'), datetime('now'));

-- Insert some sample products for testing
INSERT INTO products (id, category_id, subcategory_id, name, description, overview, images, features, applications, specifications, price, is_featured, is_active, created_at, updated_at) VALUES
('brix-001', 'lab-equipment', 'fiziksel-analiz', 'Digital Refraktometre DR-A1', 'Brix ve refraktif indeks tayini için otomatik sıcaklık kompanzasyonlu dijital refraktometre', 
'Digital Refraktometre DR-A1, gıda endüstrisi ve içecek üretiminde en yüksek hassasiyetle Brix ve refraktif indeks ölçümü yapan profesyonel bir laboratuvar cihazıdır.

Bu gelişmiş refraktometre, otomatik sıcaklık kompanzasyonu teknolojisi sayesinde çevresel sıcaklık değişimlerinden etkilenmeden doğru sonuçlar verir. Su geçirmez tasarımı ile zorlu laboratuvar koşullarında güvenle kullanılabilir.

Kolay kalibasyon özelliği ile hızlı kurulum sağlar ve rutin bakım gereksinimlerini minimize eder. Özellikle şeker analizi, meyve suyu kalite kontrolü ve gıda üretim süreçlerinde tercih edilen güvenilir bir çözümdür.',
'["/images/lab-1.jpg"]',
'["Otomatik sıcaklık kompanzasyonu", "Su geçirmez tasarım", "Kolay kalibasyon"]',
'["Gıda endüstrisi", "İçecek üretimi", "Şeker analizi"]',
'{"Ölçüm Aralığı": "0-85% Brix", "Hassasiyet": "±0.1% Brix", "Sıcaklık Aralığı": "10-40°C"}',
NULL, 1, 1, datetime('now'), datetime('now')),

('su-aktivite-001', 'lab-equipment', 'fiziksel-analiz', 'AquaLab 4TE Su Aktivite Ölçer', 'Su aktivite tayini ve sorpsiyon-desorpsiyon analizi için yüksek hassasiyetli cihaz',
'AquaLab 4TE Su Aktivite Ölçer, gıda güvenliği ve raf ömrü tayini için kritik öneme sahip su aktivite (aw) değerini hassas bir şekilde ölçen gelişmiş bir laboratuvar cihazıdır.',
'["/images/lab-2.jpg"]',
'["Hızlı ölçüm (5 dakida)", "Yüksek hassasiyet", "Otomatik kalibasyon"]',
'["Gıda güvenliği", "Raf ömrü tayini", "Mikrobiyolojik güvenlik"]',
'{"Ölçüm Aralığı": "0.000-1.000 aw", "Hassasiyet": "±0.003 aw", "Ölçüm Süresi": "5 dakika"}',
NULL, 1, 1, datetime('now'), datetime('now')),

('magnetik-karistirici-ms300', 'lab-equipment', 'fiziksel-analiz', 'Magnetik Karıştırıcı MS-300', 'Laboratuvar tipi magnetik karıştırıcı, hassas hız kontrolü ve sıcaklık göstergesi',
'MS-300 Magnetik Karıştırıcı, laboratuvar ortamında sıvı örneklerin homojen karıştırılması için tasarlanmış profesyonel bir cihazdır. Hassas hız kontrolü ve güvenlik özellikleri ile öne çıkar.',
'["/images/lab-5.jpg"]',
'["Hassas hız kontrolü", "Sıcaklık göstergesi", "Güvenlik özelliği"]',
'["Kimyasal analiz", "Çözelti hazırlama", "Numune karıştırma"]',
'{"Hız Aralığı": "100-1500 rpm", "Karıştırma Kapasitesi": "5L", "Güç": "150W"}',
NULL, 1, 1, datetime('now'), datetime('now'));

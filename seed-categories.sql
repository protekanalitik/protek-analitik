-- Categories Only
INSERT INTO categories (id, name, key, description, icon, is_active, created_at, updated_at) VALUES 
('lab-equipment', 'Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler', 'laboratuvar-ekipmanlari', 'Laboratuvar işletmeleriniz için kapsamlı ekipman, malzeme ve kit çözümleri', 'beaker', 1, datetime('now'), datetime('now')),
('process-control', 'Proses Kontrol Ve Hat Tipi Analiz Çözümleri', 'proses-kontrol', 'Üretim hattında gerçek zamanlı analiz ve kontrol çözümleri', 'cube', 1, datetime('now'), datetime('now')),
('pilot-production', 'Pilot Tipi Üretim ve Proses Simülasyon Sistemleri', 'pilot-uretim', 'Pilot ölçekte üretim ve proses geliştirme sistemleri', 'wrench', 1, datetime('now'), datetime('now'));

-- Subcategories
INSERT INTO subcategories (id, category_id, name, key, description, is_active, created_at, updated_at) VALUES
('genel-lab', 'lab-equipment', 'Genel Laboratuvar Ekipmanları', 'genel-lab', 'Temel laboratuvar ekipmanları ve araçları', 1, datetime('now'), datetime('now')),
('fiziksel-analiz', 'lab-equipment', 'Fiziksel Analiz Ekipmanları', 'fiziksel-analiz', 'Fiziksel özellik analizi için cihazlar', 1, datetime('now'), datetime('now')),
('kimyasal-analiz', 'lab-equipment', 'Kimyasal Analiz Ekipmanları', 'kimyasal-analiz', 'Kimyasal kompozisyon analizi cihazları', 1, datetime('now'), datetime('now')),
('proses-analiz', 'process-control', 'Proses Analiz Sistemleri', 'proses-analiz', 'Gerçek zamanlı proses analiz çözümleri', 1, datetime('now'), datetime('now')),
('hat-tipi', 'process-control', 'Hat Tipi Analiz Cihazları', 'hat-tipi', 'Üretim hattına entegre analiz sistemleri', 1, datetime('now'), datetime('now')),
('pilot-sistemler', 'pilot-production', 'Pilot Üretim Sistemleri', 'pilot-sistemler', 'Küçük ölçekli üretim sistemleri', 1, datetime('now'), datetime('now'));

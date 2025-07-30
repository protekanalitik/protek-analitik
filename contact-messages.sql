-- CONTACT_MESSAGES

INSERT INTO contact_messages (id, message_type, first_name, last_name, email, phone, company, subject, message, is_read, is_responded, created_at, updated_at) VALUES
('msg-001',
 'genel',
 'Ahmet',
 'Yılmaz',
 'ahmet.yilmaz@example.com',
 '+90 532 123 4567',
 'ABC Gıda Ltd.',
 'pH Metre Fiyat Talebi',
 'Merhaba, 

Laboratuvarımız için pH metre satın almayı planlıyoruz. Özellikle gıda analizi için uygun, otomatik kalibrasyon özellikli modelleri hakkında bilgi alabilir miyim?

Ayrıca fiyat listesi ve teslimat süresi bilgilerini de paylaşabilirseniz memnun olurum.

Teşekkürler.',
 0,
 0,
 '2024-01-20 10:30:00',
 '2024-01-20 10:30:00'),

('msg-002',
 'teknik-destek',
 'Fatma',
 'Öztürk',
 'fatma.ozturk@universitesi.edu.tr',
 '+90 544 987 6543',
 'XYZ Üniversitesi',
 'Spektrofotometre Eğitimi',
 'Sayın Protek Analitik ekibi,

Üniversitemizde yeni kurduğumuz analitik kimya laboratuvarında spektrofotometre kullanımı konusunda personel eğitimi almak istiyoruz. 

Bu konuda vereceğiniz eğitim programları var mı? Varsa detayları hakkında bilgi alabilir miyim?

İyi çalışmalar.',
 1,
 1,
 '2024-01-20 14:45:00',
 '2024-01-21 14:00:00'),

('msg-003',
 'satis',
 'Mehmet',
 'Kaya',
 'm.kaya@labtech.com',
 '+90 505 111 2233',
 'LabTech Analiz',
 'Laboratuvar Kurulum Projesi',
 'Merhabalar,

Yeni kuracağımız gıda analiz laboratuvarı için komple ekipman teklifi istiyoruz. 

Laboratuvar alanı: 100 m²
Personel sayısı: 5 kişi
Günlük analiz kapasitesi: 50 numune

Detaylı teklifin için görüşmek isteriz.

Saygılarımla.',
 1,
 0,
 '2024-01-22 16:20:00',
 '2024-01-22 16:20:00');

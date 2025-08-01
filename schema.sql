-- Protek Analitik D1 Database Schema
-- This file creates all necessary tables for the CMS system

-- Users table for authentication
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    role TEXT NOT NULL DEFAULT 'viewer' CHECK (role IN ('super_admin', 'admin', 'editor', 'viewer')),
    is_active BOOLEAN NOT NULL DEFAULT 1,
    last_login TEXT,
    login_attempts INTEGER NOT NULL DEFAULT 0,
    locked_until TEXT,
    password_reset_token TEXT,
    password_reset_expires TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    key TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Subcategories table
CREATE TABLE IF NOT EXISTS subcategories (
    id TEXT PRIMARY KEY,
    category_id TEXT NOT NULL,
    name TEXT NOT NULL,
    key TEXT NOT NULL,
    description TEXT,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE(category_id, key)
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    overview TEXT,
    category_id TEXT NOT NULL,
    subcategory_id TEXT NOT NULL,
    image TEXT,
    images TEXT, -- JSON array
    features TEXT, -- JSON array
    applications TEXT, -- JSON array
    specifications TEXT, -- JSON object
    data_sheet TEXT,
    catalog_files TEXT, -- JSON array
    price TEXT,
    is_warrantied BOOLEAN NOT NULL DEFAULT 0,
    has_free_shipping BOOLEAN NOT NULL DEFAULT 0,
    is_featured BOOLEAN NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT 1,
    display_order INTEGER NOT NULL DEFAULT 0,
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (subcategory_id) REFERENCES subcategories(id)
);

-- News table
CREATE TABLE IF NOT EXISTS news (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT,
    content TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'sirket-haberleri' CHECK (category IN ('sirket-haberleri', 'sektor-guncel', 'basari-hikayeleri')),
    author TEXT NOT NULL,
    publish_date TEXT NOT NULL,
    image_url TEXT,
    tags TEXT, -- JSON array
    is_featured BOOLEAN NOT NULL DEFAULT 0,
    is_published BOOLEAN NOT NULL DEFAULT 0,
    view_count INTEGER NOT NULL DEFAULT 0,
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    content TEXT,
    event_type TEXT NOT NULL DEFAULT 'seminer' CHECK (event_type IN ('seminer', 'webinar', 'fuar', 'egitim', 'konferans')),
    start_date TEXT NOT NULL,
    end_date TEXT,
    location TEXT,
    address TEXT,
    registration_url TEXT,
    max_participants INTEGER,
    current_participants INTEGER NOT NULL DEFAULT 0,
    image_url TEXT,
    tags TEXT, -- JSON array
    is_featured BOOLEAN NOT NULL DEFAULT 0,
    is_published BOOLEAN NOT NULL DEFAULT 0,
    registration_required BOOLEAN NOT NULL DEFAULT 0,
    is_online BOOLEAN NOT NULL DEFAULT 0,
    meeting_link TEXT,
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT 0,
    is_replied BOOLEAN NOT NULL DEFAULT 0,
    reply_message TEXT,
    replied_at TEXT,
    replied_by TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Quote requests table
CREATE TABLE IF NOT EXISTS quote_requests (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    product_id TEXT,
    product_name TEXT,
    quantity TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'quoted', 'completed', 'cancelled')),
    is_read BOOLEAN NOT NULL DEFAULT 0,
    quote_amount TEXT,
    quote_notes TEXT,
    quoted_at TEXT,
    quoted_by TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(is_published);
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);
CREATE INDEX IF NOT EXISTS idx_events_published ON events(is_published);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);

-- Insert default admin user
INSERT OR IGNORE INTO users (
    id, 
    username, 
    email, 
    password_hash, 
    first_name, 
    last_name, 
    role, 
    is_active
) VALUES (
    'admin-001',
    'protekadmin',
    'admin@protekanalitik.com',
    'c88ea408827eefc511d51f0cb5176f9cc1a683e34b352faeb22061db7c6558cb', -- SHA-256 hash of 'protek1234'
    'Protek',
    'Admin',
    'super_admin',
    1
);

-- Insert default categories
INSERT OR IGNORE INTO categories (id, name, key, description, display_order) VALUES
('cat-001', 'Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler', 'laboratuvar-ekipmanlari', 'Laboratuvar analiz cihazları ve sarf malzemeleri', 1),
('cat-002', 'Proses Kontrol Ve Hat Tipi Analiz Çözümleri', 'proses-kontrol', 'Endüstriyel proses kontrol ve hat tipi analiz sistemleri', 2),
('cat-003', 'Pilot Tipi Üretim ve Proses Simülasyon Sistemleri', 'pilot-uretim', 'Pilot ölçekli üretim ve simülasyon sistemleri', 3);

-- Insert default subcategories
INSERT OR IGNORE INTO subcategories (id, category_id, name, key, description, display_order) VALUES
-- Laboratuvar Ekipmanları subcategories
('sub-001', 'cat-001', 'Fiziksel Analiz Ekipmanları', 'fiziksel-analiz', 'Fiziksel özellik analiz cihazları', 1),
('sub-002', 'cat-001', 'Kimyasal Analiz Ekipmanları', 'kimyasal-analiz', 'Kimyasal kompozisyon analiz cihazları', 2),
('sub-003', 'cat-001', 'Mikrobiyoloji Analiz Ekipmanları', 'mikrobiyoloji-analiz', 'Mikrobiyolojik analiz ve test ekipmanları', 3),
('sub-004', 'cat-001', 'Moleküler Biyoloji/Genetik Analiz Ekipmanları', 'molekuler-biyoloji', 'DNA/RNA ve genetik analiz sistemleri', 4),
('sub-005', 'cat-001', 'Test, Ölçü Kontrol Sistemleri', 'test-olcu-kontrol', 'Ölçüm ve kontrol sistemleri', 5),
('sub-006', 'cat-001', 'Ambalaj ve Malzeme Test Sistemleri', 'ambalaj-test', 'Ambalaj ve malzeme test cihazları', 6),
('sub-007', 'cat-001', 'Araştırma ve Geliştirme Ekipmanları', 'arastirma-gelistirme', 'AR-GE laboratuvar ekipmanları', 7),

-- Proses Kontrol subcategories
('sub-008', 'cat-002', 'Hat Tipi Analiz Sistemleri', 'hat-tipi-analiz', 'Online proses analiz sistemleri', 1),
('sub-009', 'cat-002', 'Proses Sensörleri', 'proses-sensorleri', 'Endüstriyel proses sensörleri', 2),

-- Pilot Üretim subcategories
('sub-010', 'cat-003', 'Karıştırma ve Homojenizasyon', 'karistirma-homojenizasyon', 'Karıştırma ve homojenizasyon sistemleri', 1),
('sub-011', 'cat-003', 'Kurutma ve İşleme', 'kurutma-isleme', 'Kurutma ve işleme ekipmanları', 2),
('sub-012', 'cat-003', 'Filtrasyon ve Separasyon', 'filtrasyon-separasyon', 'Filtrasyon ve ayırma sistemleri', 3);

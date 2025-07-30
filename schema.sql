-- Protek Analitik Database Schema
-- Cloudflare D1 (SQLite) Compatible

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    key TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Subcategories Table
CREATE TABLE IF NOT EXISTS subcategories (
    id TEXT PRIMARY KEY,
    category_id TEXT NOT NULL,
    name TEXT NOT NULL,
    key TEXT NOT NULL,
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE(category_id, key)
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    overview TEXT,
    category_id TEXT NOT NULL,
    subcategory_id TEXT NOT NULL,
    image TEXT,
    images TEXT, -- JSON array of image URLs
    features TEXT, -- JSON array of features
    applications TEXT, -- JSON array of applications
    specifications TEXT, -- JSON object of specifications
    data_sheet TEXT,
    catalog_files TEXT, -- JSON array of catalog file URLs
    price TEXT,
    is_warrantied BOOLEAN DEFAULT 0,
    has_free_shipping BOOLEAN DEFAULT 0,
    is_featured BOOLEAN DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    display_order INTEGER DEFAULT 0,
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (subcategory_id) REFERENCES subcategories(id)
);

-- News Table
CREATE TABLE IF NOT EXISTS news (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT,
    content TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('sirket-haberleri', 'sektor-guncel', 'basari-hikayeleri')),
    author TEXT DEFAULT 'Protek Analitik',
    publish_date DATE NOT NULL,
    image_url TEXT,
    tags TEXT, -- JSON array of tags
    is_featured BOOLEAN DEFAULT 0,
    is_published BOOLEAN DEFAULT 1,
    view_count INTEGER DEFAULT 0,
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    content TEXT,
    event_type TEXT NOT NULL CHECK (event_type IN ('seminer', 'webinar', 'fuar', 'egitim', 'konferans')),
    start_date DATETIME NOT NULL,
    end_date DATETIME,
    location TEXT,
    address TEXT,
    registration_url TEXT,
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    image_url TEXT,
    tags TEXT, -- JSON array of tags
    is_featured BOOLEAN DEFAULT 0,
    is_published BOOLEAN DEFAULT 1,
    registration_required BOOLEAN DEFAULT 0,
    is_online BOOLEAN DEFAULT 0,
    meeting_link TEXT,
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id TEXT PRIMARY KEY,
    message_type TEXT NOT NULL CHECK (message_type IN ('genel', 'teknik-destek', 'satis', 'teklif-talebi', 'is-birligi')),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    position TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    interested_products TEXT, -- JSON array of product IDs
    budget_range TEXT,
    timeline TEXT,
    source TEXT, -- How they found us
    is_read BOOLEAN DEFAULT 0,
    is_responded BOOLEAN DEFAULT 0,
    priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    assigned_to TEXT,
    response_notes TEXT,
    ip_address TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Quote Requests Table (Multi-step form)
CREATE TABLE IF NOT EXISTS quote_requests (
    id TEXT PRIMARY KEY,
    step_1_data TEXT, -- JSON: Basic info (name, email, company, etc.)
    step_2_data TEXT, -- JSON: Project details (industry, application, etc.)
    step_3_data TEXT, -- JSON: Technical requirements
    step_4_data TEXT, -- JSON: Budget and timeline
    step_5_data TEXT, -- JSON: Additional requirements
    current_step INTEGER DEFAULT 1,
    is_completed BOOLEAN DEFAULT 0,
    total_estimated_value DECIMAL(10,2),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in-review', 'quoted', 'accepted', 'rejected', 'expired')),
    quote_valid_until DATE,
    assigned_to TEXT,
    internal_notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Users Table (Admin authentication)
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    role TEXT DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'editor', 'viewer')),
    is_active BOOLEAN DEFAULT 1,
    last_login DATETIME,
    login_attempts INTEGER DEFAULT 0,
    locked_until DATETIME,
    password_reset_token TEXT,
    password_reset_expires DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Audit Log Table
CREATE TABLE IF NOT EXISTS audit_logs (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    action TEXT NOT NULL,
    table_name TEXT NOT NULL,
    record_id TEXT,
    old_values TEXT, -- JSON
    new_values TEXT, -- JSON
    ip_address TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- File Uploads Table
CREATE TABLE IF NOT EXISTS file_uploads (
    id TEXT PRIMARY KEY,
    original_name TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    mime_type TEXT NOT NULL,
    upload_type TEXT NOT NULL CHECK (upload_type IN ('product_image', 'news_image', 'event_image', 'document', 'catalog')),
    related_id TEXT, -- ID of related record (product, news, etc.)
    uploaded_by TEXT,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- System Settings Table
CREATE TABLE IF NOT EXISTS system_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT,
    type TEXT DEFAULT 'string' CHECK (type IN ('string', 'number', 'boolean', 'json')),
    is_public BOOLEAN DEFAULT 0,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(is_published);
CREATE INDEX IF NOT EXISTS idx_news_featured ON news(is_featured);
CREATE INDEX IF NOT EXISTS idx_news_publish_date ON news(publish_date);
CREATE INDEX IF NOT EXISTS idx_events_type ON events(event_type);
CREATE INDEX IF NOT EXISTS idx_events_published ON events(is_published);
CREATE INDEX IF NOT EXISTS idx_events_start_date ON events(start_date);
CREATE INDEX IF NOT EXISTS idx_contact_messages_type ON contact_messages(message_type);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_table ON audit_logs(table_name);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON audit_logs(created_at);

-- Insert default system settings
INSERT OR IGNORE INTO system_settings (key, value, description, type, is_public) VALUES
('site_title', 'Protek Analitik', 'Site title', 'string', 1),
('site_description', 'Laboratuvar teknolojileri ve analitik çözümler', 'Site description', 'string', 1),
('contact_email', 'info@protekanalitik.com', 'Main contact email', 'string', 1),
('contact_phone', '+90 (212) 123 45 67', 'Main contact phone', 'string', 1),
('admin_email_notifications', 'true', 'Send email notifications to admin', 'boolean', 0),
('max_file_upload_size', '5242880', 'Max file upload size in bytes (5MB)', 'number', 0),
('allowed_file_types', '["jpg", "jpeg", "png", "gif", "pdf", "doc", "docx"]', 'Allowed file extensions', 'json', 0),
('maintenance_mode', 'false', 'Site maintenance mode', 'boolean', 0),
('api_rate_limit', '100', 'API requests per minute per IP', 'number', 0);

-- Insert default admin user (password: protek2024!)
INSERT OR IGNORE INTO users (id, username, email, password_hash, first_name, last_name, role) VALUES
('admin-001', 'protekadmin', 'admin@protekanalitik.com', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3L3jzjvQSG', 'Admin', 'User', 'super_admin');

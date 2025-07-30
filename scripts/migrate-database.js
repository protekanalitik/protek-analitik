// Database Migration Script for Cloudflare D1
// This script applies the schema and migrates data from JSON files to D1

const fs = require('fs')
const path = require('path')

async function runMigration() {
  console.log('🚀 Starting database migration...')
  
  try {
    // Check if wrangler is available
    const { execSync } = require('child_process')
    
    console.log('📋 Applying database schema...')
    
    // Apply schema to D1 database
    const schemaPath = path.join(process.cwd(), 'schema.sql')
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error('Schema file not found: schema.sql')
    }
    
    console.log('📝 Executing schema.sql...')
    
    // Execute schema using wrangler
    const schemaCommand = `wrangler d1 execute protekanalitik-d1 --file=schema.sql`
    
    try {
      const result = execSync(schemaCommand, { encoding: 'utf8' })
      console.log('✅ Schema applied successfully:')
      console.log(result)
    } catch (error) {
      console.error('❌ Schema application failed:')
      console.error(error.message)
      return
    }
    
    console.log('📊 Migrating data from JSON files...')
    
    // Migrate existing data from JSON files
    await migrateJsonData()
    
    console.log('🎉 Database migration completed successfully!')
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message)
    process.exit(1)
  }
}

async function migrateJsonData() {
  console.log('📁 Reading JSON data files...')
  
  const dataDir = path.join(process.cwd(), 'src/data')
  
  // Check if data directory exists
  if (!fs.existsSync(dataDir)) {
    console.log('ℹ️  No data directory found, skipping data migration')
    return
  }
  
  // Migrate products
  await migrateProducts()
  
  // Migrate news
  await migrateNews()
  
  // Migrate events
  await migrateEvents()
  
  // Migrate categories
  await migrateCategories()
  
  // Create default admin user
  await createDefaultAdmin()
  
  console.log('✅ Data migration completed')
}

async function migrateProducts() {
  const productsFile = path.join(process.cwd(), 'src/data/products-store.json')
  
  if (!fs.existsSync(productsFile)) {
    console.log('ℹ️  No products file found, skipping products migration')
    return
  }
  
  try {
    const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf-8'))
    
    if (productsData.products && productsData.products.length > 0) {
      console.log(`📦 Migrating ${productsData.products.length} products...`)
      
      // Generate SQL insert statements
      const insertSql = generateProductInserts(productsData.products)
      
      // Write to temporary SQL file
      const tempSqlFile = path.join(process.cwd(), 'temp-products.sql')
      fs.writeFileSync(tempSqlFile, insertSql)
      
      // Execute SQL
      const { execSync } = require('child_process')
      execSync(`wrangler d1 execute protekanalitik-d1 --file=temp-products.sql`)
      
      // Clean up
      fs.unlinkSync(tempSqlFile)
      
      console.log('✅ Products migrated successfully')
    }
  } catch (error) {
    console.error('❌ Products migration failed:', error.message)
  }
}

async function migrateNews() {
  const newsFile = path.join(process.cwd(), 'src/data/news-events-store.json')
  
  if (!fs.existsSync(newsFile)) {
    console.log('ℹ️  No news file found, skipping news migration')
    return
  }
  
  try {
    const newsData = JSON.parse(fs.readFileSync(newsFile, 'utf-8'))
    
    if (newsData.news && newsData.news.length > 0) {
      console.log(`📰 Migrating ${newsData.news.length} news articles...`)
      
      const insertSql = generateNewsInserts(newsData.news)
      const tempSqlFile = path.join(process.cwd(), 'temp-news.sql')
      fs.writeFileSync(tempSqlFile, insertSql)
      
      const { execSync } = require('child_process')
      execSync(`wrangler d1 execute protekanalitik-d1 --file=temp-news.sql`)
      
      fs.unlinkSync(tempSqlFile)
      console.log('✅ News migrated successfully')
    }
  } catch (error) {
    console.error('❌ News migration failed:', error.message)
  }
}

async function migrateEvents() {
  const eventsFile = path.join(process.cwd(), 'src/data/news-events-store.json')
  
  if (!fs.existsSync(eventsFile)) {
    console.log('ℹ️  No events file found, skipping events migration')
    return
  }
  
  try {
    const eventsData = JSON.parse(fs.readFileSync(eventsFile, 'utf-8'))
    
    if (eventsData.events && eventsData.events.length > 0) {
      console.log(`📅 Migrating ${eventsData.events.length} events...`)
      
      const insertSql = generateEventInserts(eventsData.events)
      const tempSqlFile = path.join(process.cwd(), 'temp-events.sql')
      fs.writeFileSync(tempSqlFile, insertSql)
      
      const { execSync } = require('child_process')
      execSync(`wrangler d1 execute protekanalitik-d1 --file=temp-events.sql`)
      
      fs.unlinkSync(tempSqlFile)
      console.log('✅ Events migrated successfully')
    }
  } catch (error) {
    console.error('❌ Events migration failed:', error.message)
  }
}

async function migrateCategories() {
  const categoriesFile = path.join(process.cwd(), 'src/data/categories-store.json')
  
  if (!fs.existsSync(categoriesFile)) {
    console.log('ℹ️  No categories file found, skipping categories migration')
    return
  }
  
  try {
    const categoriesData = JSON.parse(fs.readFileSync(categoriesFile, 'utf-8'))
    
    if (categoriesData.categories && categoriesData.categories.length > 0) {
      console.log(`🏷️  Migrating ${categoriesData.categories.length} categories...`)
      
      const insertSql = generateCategoryInserts(categoriesData.categories)
      const tempSqlFile = path.join(process.cwd(), 'temp-categories.sql')
      fs.writeFileSync(tempSqlFile, insertSql)
      
      const { execSync } = require('child_process')
      execSync(`wrangler d1 execute protekanalitik-d1 --file=temp-categories.sql`)
      
      fs.unlinkSync(tempSqlFile)
      console.log('✅ Categories migrated successfully')
    }
  } catch (error) {
    console.error('❌ Categories migration failed:', error.message)
  }
}

async function createDefaultAdmin() {
  console.log('👤 Creating default admin user...')
  
  const bcrypt = require('bcryptjs')
  const hashedPassword = await bcrypt.hash('protek1234', 12)
  
  const adminSql = `
INSERT OR IGNORE INTO users (
  id, username, email, password_hash, first_name, last_name, 
  role, is_active, created_at, updated_at
) VALUES (
  'admin-001',
  'protekadmin', 
  'admin@protekanalitik.com',
  '${hashedPassword}',
  'Admin',
  'User',
  'admin',
  1,
  datetime('now'),
  datetime('now')
);`
  
  const tempSqlFile = path.join(process.cwd(), 'temp-admin.sql')
  fs.writeFileSync(tempSqlFile, adminSql)
  
  try {
    const { execSync } = require('child_process')
    execSync(`wrangler d1 execute protekanalitik-d1 --file=temp-admin.sql`)
    console.log('✅ Default admin user created')
  } catch (error) {
    console.error('❌ Admin user creation failed:', error.message)
  } finally {
    fs.unlinkSync(tempSqlFile)
  }
}

// Helper functions to generate SQL inserts
function generateProductInserts(products) {
  return products.map(product => {
    const values = [
      `'${product.id}'`,
      `'${escapeString(product.name)}'`,
      product.description ? `'${escapeString(product.description)}'` : 'NULL',
      product.overview ? `'${escapeString(product.overview)}'` : 'NULL',
      `'${product.category_id}'`,
      `'${product.subcategory_id}'`,
      product.image ? `'${product.image}'` : 'NULL',
      product.images ? `'${JSON.stringify(product.images)}'` : 'NULL',
      product.features ? `'${JSON.stringify(product.features)}'` : 'NULL',
      product.applications ? `'${JSON.stringify(product.applications)}'` : 'NULL',
      product.specifications ? `'${JSON.stringify(product.specifications)}'` : 'NULL',
      product.data_sheet ? `'${product.data_sheet}'` : 'NULL',
      product.catalog_files ? `'${JSON.stringify(product.catalog_files)}'` : 'NULL',
      product.price ? `'${product.price}'` : 'NULL',
      product.is_warrantied ? 1 : 0,
      product.has_free_shipping ? 1 : 0,
      product.is_featured ? 1 : 0,
      product.is_active !== false ? 1 : 0,
      product.display_order || 0,
      product.meta_title ? `'${escapeString(product.meta_title)}'` : 'NULL',
      product.meta_description ? `'${escapeString(product.meta_description)}'` : 'NULL',
      product.meta_keywords ? `'${escapeString(product.meta_keywords)}'` : 'NULL',
      `datetime('now')`,
      `datetime('now')`
    ]
    
    return `INSERT OR IGNORE INTO products (
      id, name, description, overview, category_id, subcategory_id, image, images,
      features, applications, specifications, data_sheet, catalog_files, price,
      is_warrantied, has_free_shipping, is_featured, is_active, display_order,
      meta_title, meta_description, meta_keywords, created_at, updated_at
    ) VALUES (${values.join(', ')});`
  }).join('\n')
}

function generateNewsInserts(news) {
  return news.map(article => {
    const values = [
      `'${article.id}'`,
      `'${escapeString(article.title)}'`,
      `'${article.slug}'`,
      article.summary ? `'${escapeString(article.summary)}'` : 'NULL',
      `'${escapeString(article.content)}'`,
      `'${article.category}'`,
      `'${article.author || 'Protek Analitik'}'`,
      `'${article.publish_date}'`,
      article.image_url ? `'${article.image_url}'` : 'NULL',
      article.tags ? `'${JSON.stringify(article.tags)}'` : 'NULL',
      article.is_featured ? 1 : 0,
      article.is_published !== false ? 1 : 0,
      article.view_count || 0,
      article.meta_title ? `'${escapeString(article.meta_title)}'` : 'NULL',
      article.meta_description ? `'${escapeString(article.meta_description)}'` : 'NULL',
      article.meta_keywords ? `'${escapeString(article.meta_keywords)}'` : 'NULL',
      `datetime('now')`,
      `datetime('now')`
    ]
    
    return `INSERT OR IGNORE INTO news (
      id, title, slug, summary, content, category, author, publish_date, image_url, tags,
      is_featured, is_published, view_count, meta_title, meta_description, meta_keywords,
      created_at, updated_at
    ) VALUES (${values.join(', ')});`
  }).join('\n')
}

function generateEventInserts(events) {
  return events.map(event => {
    const values = [
      `'${event.id}'`,
      `'${escapeString(event.title)}'`,
      `'${event.slug}'`,
      event.description ? `'${escapeString(event.description)}'` : 'NULL',
      event.content ? `'${escapeString(event.content)}'` : 'NULL',
      `'${event.event_type}'`,
      `'${event.start_date}'`,
      event.end_date ? `'${event.end_date}'` : 'NULL',
      event.location ? `'${escapeString(event.location)}'` : 'NULL',
      event.address ? `'${escapeString(event.address)}'` : 'NULL',
      event.registration_url ? `'${event.registration_url}'` : 'NULL',
      event.max_participants || 'NULL',
      event.current_participants || 0,
      event.image_url ? `'${event.image_url}'` : 'NULL',
      event.tags ? `'${JSON.stringify(event.tags)}'` : 'NULL',
      event.is_featured ? 1 : 0,
      event.is_published !== false ? 1 : 0,
      event.registration_required ? 1 : 0,
      event.is_online ? 1 : 0,
      event.meeting_link ? `'${event.meeting_link}'` : 'NULL',
      event.meta_title ? `'${escapeString(event.meta_title)}'` : 'NULL',
      event.meta_description ? `'${escapeString(event.meta_description)}'` : 'NULL',
      event.meta_keywords ? `'${escapeString(event.meta_keywords)}'` : 'NULL',
      `datetime('now')`,
      `datetime('now')`
    ]
    
    return `INSERT OR IGNORE INTO events (
      id, title, slug, description, content, event_type, start_date, end_date, location, address,
      registration_url, max_participants, current_participants, image_url, tags, is_featured,
      is_published, registration_required, is_online, meeting_link, meta_title, meta_description,
      meta_keywords, created_at, updated_at
    ) VALUES (${values.join(', ')});`
  }).join('\n')
}

function generateCategoryInserts(categories) {
  return categories.map(category => {
    const values = [
      `'${category.id}'`,
      `'${escapeString(category.name)}'`,
      `'${category.key}'`,
      category.description ? `'${escapeString(category.description)}'` : 'NULL',
      category.icon ? `'${category.icon}'` : 'NULL',
      category.display_order || 0,
      category.is_active !== false ? 1 : 0,
      `datetime('now')`,
      `datetime('now')`
    ]
    
    return `INSERT OR IGNORE INTO categories (
      id, name, key, description, icon, display_order, is_active, created_at, updated_at
    ) VALUES (${values.join(', ')});`
  }).join('\n')
}

function escapeString(str) {
  if (!str) return ''
  return str.replace(/'/g, "''")
}

// Run migration
if (require.main === module) {
  runMigration()
}

module.exports = { runMigration }

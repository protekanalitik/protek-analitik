// Cloudflare D1 Database Integration
// This file provides D1-compatible database operations for Next.js Edge Runtime

interface D1Result<T = any> {
  results: T[]
  success: boolean
  meta: {
    duration: number
    rows_read: number
    rows_written: number
    last_row_id?: number
    changes?: number
  }
}

interface D1Database {
  prepare(query: string): D1PreparedStatement
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>
  exec(query: string): Promise<D1Result>
}

interface D1PreparedStatement {
  bind(...values: any[]): D1PreparedStatement
  first<T = any>(): Promise<T | null>
  all<T = any>(): Promise<D1Result<T>>
  run(): Promise<D1Result>
}

// D1 Database wrapper for development and production
export class D1DatabaseManager {
  private db: D1Database | null = null

  constructor(env?: any) {
    // Try multiple ways to get D1 database binding
    if (env && env.DB) {
      // From environment context (Cloudflare Pages Functions)
      this.db = env.DB as D1Database
      console.log('🔗 D1 Database connected via env.DB')
    } else if (typeof globalThis !== 'undefined' && (globalThis as any).DB) {
      // From globalThis (Cloudflare Workers)
      this.db = (globalThis as any).DB as D1Database
      console.log('🔗 D1 Database connected via globalThis.DB')
    } else {
      console.warn('⚠️ D1 Database not found in env or globalThis')
    }
  }

  // Get database instance
  getDatabase(): D1Database {
    if (!this.db) {
      throw new Error('D1 Database not available. Make sure you\'re running in Cloudflare Workers environment.')
    }
    return this.db
  }

  // Execute query with error handling
  async executeQuery<T = any>(
    query: string, 
    params: any[] = []
  ): Promise<{ success: boolean; data?: T[]; error?: string; meta?: any }> {
    try {
      const db = this.getDatabase()
      const stmt = db.prepare(query)
      const result = await stmt.bind(...params).all()
      
      return {
        success: true,
        data: result.results as T[],
        meta: result.meta
      }
    } catch (error) {
      console.error('D1 Query Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Database query failed'
      }
    }
  }

  // Execute query and return first row
  async executeQueryFirst<T = any>(
    query: string, 
    params: any[] = []
  ): Promise<{ success: boolean; data?: T; error?: string }> {
    try {
      const db = this.getDatabase()
      const stmt = db.prepare(query)
      const result = await stmt.bind(...params).first()
      
      return {
        success: true,
        data: result as T
      }
    } catch (error) {
      console.error('D1 Query Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Database query failed'
      }
    }
  }

  // Execute multiple queries in a transaction
  async executeTransaction(
    queries: Array<{ query: string; params?: any[] }>
  ): Promise<{ success: boolean; error?: string; results?: any[] }> {
    try {
      const db = this.getDatabase()
      const statements = queries.map(({ query, params = [] }) => 
        db.prepare(query).bind(...params)
      )
      
      const results = await db.batch(statements)
      
      return {
        success: true,
        results: results.map(r => r.results)
      }
    } catch (error) {
      console.error('D1 Transaction Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Database transaction failed'
      }
    }
  }

  // Insert record and return ID
  async insertRecord<T = any>(
    table: string,
    data: Record<string, any>
  ): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      const columns = Object.keys(data)
      const placeholders = columns.map(() => '?').join(', ')
      const values = Object.values(data)
      
      const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`
      
      const db = this.getDatabase()
      const result = await db.prepare(query).bind(...values).run()
      
      if (result.success) {
        return {
          success: true,
          id: data.id || result.meta.last_row_id?.toString()
        }
      } else {
        return {
          success: false,
          error: 'Insert failed'
        }
      }
    } catch (error) {
      console.error('D1 Insert Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Insert failed'
      }
    }
  }

  // Update record
  async updateRecord(
    table: string,
    id: string,
    data: Record<string, any>
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const columns = Object.keys(data)
      const setClause = columns.map(col => `${col} = ?`).join(', ')
      const values = [...Object.values(data), id]
      
      const query = `UPDATE ${table} SET ${setClause} WHERE id = ?`
      
      const db = this.getDatabase()
      const result = await db.prepare(query).bind(...values).run()
      
      return {
        success: result.success && (result.meta.changes || 0) > 0
      }
    } catch (error) {
      console.error('D1 Update Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Update failed'
      }
    }
  }

  // Delete record
  async deleteRecord(
    table: string,
    id: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const query = `DELETE FROM ${table} WHERE id = ?`
      
      const db = this.getDatabase()
      const result = await db.prepare(query).bind(id).run()
      
      return {
        success: result.success && (result.meta.changes || 0) > 0
      }
    } catch (error) {
      console.error('D1 Delete Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Delete failed'
      }
    }
  }

  // Get records with pagination
  async getRecords<T = any>(
    table: string,
    options: {
      where?: string
      params?: any[]
      orderBy?: string
      limit?: number
      offset?: number
    } = {}
  ): Promise<{ success: boolean; data?: T[]; total?: number; error?: string }> {
    try {
      const {
        where = '',
        params = [],
        orderBy = 'created_at DESC',
        limit = 50,
        offset = 0
      } = options

      // Build query
      let query = `SELECT * FROM ${table}`
      let countQuery = `SELECT COUNT(*) as total FROM ${table}`
      
      if (where) {
        query += ` WHERE ${where}`
        countQuery += ` WHERE ${where}`
      }
      
      query += ` ORDER BY ${orderBy} LIMIT ${limit} OFFSET ${offset}`

      // Execute queries
      const [dataResult, countResult] = await Promise.all([
        this.executeQuery<T>(query, params),
        this.executeQueryFirst<{ total: number }>(countQuery, params)
      ])

      if (!dataResult.success || !countResult.success) {
        return {
          success: false,
          error: dataResult.error || countResult.error
        }
      }

      return {
        success: true,
        data: dataResult.data,
        total: countResult.data?.total || 0
      }
    } catch (error) {
      console.error('D1 Get Records Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Get records failed'
      }
    }
  }

  // Get single record by ID
  async getRecordById<T = any>(
    table: string,
    id: string
  ): Promise<{ success: boolean; data?: T; error?: string }> {
    return this.executeQueryFirst<T>(`SELECT * FROM ${table} WHERE id = ?`, [id])
  }

  // Check if database is available
  isAvailable(): boolean {
    return this.db !== null
  }
}

// Export singleton instance
export const d1Database = new D1DatabaseManager()

// Export database utility functions
export const D1Utils = {
  // Generate UUID for IDs
  generateId: (): string => {
    return crypto.randomUUID()
  },

  // Convert JavaScript object to JSON string for storage
  toJson: (obj: any): string => {
    return JSON.stringify(obj)
  },

  // Parse JSON string from database
  fromJson: <T = any>(jsonString: string | null): T | null => {
    if (!jsonString) return null
    try {
      return JSON.parse(jsonString) as T
    } catch {
      return null
    }
  },

  // Format date for database storage
  formatDate: (date: Date = new Date()): string => {
    return date.toISOString()
  },

  // Generate slug from title
  generateSlug: (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  },

  // Product-specific utility methods
  async getProductById(id: string): Promise<D1Product | null> {
    try {
      const result = await d1Database.getRecordById<D1Product>('products', id)
      if (result.success && result.data) {
        return result.data
      }
      return null
    } catch (error) {
      console.error('Error fetching product by ID:', error)
      return null
    }
  },

  async updateProduct(id: string, data: Partial<D1Product>): Promise<D1Product | null> {
    try {
      // Prepare data for database (convert arrays/objects to JSON)
      const dbData: any = {
        ...data,
        updated_at: D1Utils.formatDate()
      }

      // Convert arrays/objects to JSON strings
      if (data.images) dbData.images = D1Utils.toJson(data.images)
      if (data.features) dbData.features = D1Utils.toJson(data.features)
      if (data.applications) dbData.applications = D1Utils.toJson(data.applications)
      if (data.specifications) dbData.specifications = D1Utils.toJson(data.specifications)
      if (data.catalog_files) dbData.catalog_files = D1Utils.toJson(data.catalog_files)

      const result = await d1Database.updateRecord('products', id, dbData)
      
      if (result.success) {
        return await D1Utils.getProductById(id)
      }
      return null
    } catch (error) {
      console.error('Error updating product:', error)
      return null
    }
  },

  async deleteProduct(id: string): Promise<boolean> {
    try {
      const result = await d1Database.deleteRecord('products', id)
      return result.success
    } catch (error) {
      console.error('Error deleting product:', error)
      return false
    }
  }
}

// Database Models
export interface D1User {
  id: string
  username: string
  email: string
  password_hash: string
  first_name?: string
  last_name?: string
  role: 'super_admin' | 'admin' | 'editor' | 'viewer'
  is_active: boolean
  last_login?: string
  login_attempts: number
  locked_until?: string
  password_reset_token?: string
  password_reset_expires?: string
  created_at: string
  updated_at: string
}

export interface D1Product {
  id: string
  name: string
  description?: string
  overview?: string
  category_id: string
  subcategory_id: string
  image?: string
  images?: string // JSON array
  features?: string // JSON array
  applications?: string // JSON array
  specifications?: string // JSON object
  data_sheet?: string
  catalog_files?: string // JSON array
  price?: string
  is_warrantied: boolean
  has_free_shipping: boolean
  is_featured: boolean
  is_active: boolean
  display_order: number
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  created_at: string
  updated_at: string
}

export interface D1Category {
  id: string
  name: string
  key: string
  description?: string
  icon?: string
  display_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface D1News {
  id: string
  title: string
  slug: string
  summary?: string
  content: string
  category: 'sirket-haberleri' | 'sektor-guncel' | 'basari-hikayeleri'
  author: string
  publish_date: string
  image_url?: string
  tags?: string // JSON array
  is_featured: boolean
  is_published: boolean
  view_count: number
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  created_at: string
  updated_at: string
}

export interface D1Event {
  id: string
  title: string
  slug: string
  description?: string
  content?: string
  event_type: 'seminer' | 'webinar' | 'fuar' | 'egitim' | 'konferans'
  start_date: string
  end_date?: string
  location?: string
  address?: string
  registration_url?: string
  max_participants?: number
  current_participants: number
  image_url?: string
  tags?: string // JSON array
  is_featured: boolean
  is_published: boolean
  registration_required: boolean
  is_online: boolean
  meeting_link?: string
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  created_at: string
  updated_at: string
}

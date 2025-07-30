// Database connection utility for Cloudflare D1
import { D1Database, R2Bucket } from '@cloudflare/workers-types'

// Database interface for type safety
export interface DatabaseEnv {
  DB: D1Database
  UPLOADS?: R2Bucket
  JWT_SECRET?: string
  ENVIRONMENT?: string
}

// Database connection helper
export function getDatabase(): D1Database {
  // In development, we'll use a mock or local database
  if (process.env.NODE_ENV === 'development') {
    // For local development, we'll use the file-based system temporarily
    // This will be replaced with actual D1 connection in production
    throw new Error('Database connection not available in development mode. Use file-based system.')
  }
  
  // In production, this will be injected by Cloudflare Workers
  // @ts-ignore - This will be available in the Cloudflare Workers environment
  return globalThis.DB as D1Database
}

// Database query helper with error handling
export async function executeQuery<T = any>(
  db: D1Database,
  query: string,
  params: any[] = []
): Promise<{ success: boolean; data?: T[]; error?: string; meta?: any }> {
  try {
    const result = await db.prepare(query).bind(...params).all()
    return {
      success: true,
      data: result.results as T[],
      meta: {
        duration: result.meta?.duration,
        changes: result.meta?.changes,
        last_row_id: result.meta?.last_row_id,
        rows_read: result.meta?.rows_read,
        rows_written: result.meta?.rows_written
      }
    }
  } catch (error) {
    console.error('Database query error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown database error'
    }
  }
}

// Database query helper for single row
export async function executeQueryFirst<T = any>(
  db: D1Database,
  query: string,
  params: any[] = []
): Promise<{ success: boolean; data?: T; error?: string }> {
  try {
    const result = await db.prepare(query).bind(...params).first()
    return {
      success: true,
      data: result as T
    }
  } catch (error) {
    console.error('Database query error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown database error'
    }
  }
}

// Database transaction helper
export async function executeTransaction(
  db: D1Database,
  queries: Array<{ query: string; params?: any[] }>
): Promise<{ success: boolean; error?: string; results?: any[] }> {
  try {
    const statements = queries.map(({ query, params = [] }) => 
      db.prepare(query).bind(...params)
    )
    
    const results = await db.batch(statements)
    
    return {
      success: true,
      results: results.map(r => r.results)
    }
  } catch (error) {
    console.error('Database transaction error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown transaction error'
    }
  }
}

// Utility functions for common database operations
export const DatabaseUtils = {
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

  // Generate slug from title
  generateSlug: (title: string): string => {
    return title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  },

  // Format date for database storage
  formatDate: (date: Date = new Date()): string => {
    return date.toISOString()
  },

  // Pagination helper
  getPaginationParams: (page: number = 1, limit: number = 20) => {
    const offset = (page - 1) * limit
    return { limit, offset }
  }
}

// Database validation helpers
export const ValidationUtils = {
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  isValidPhone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    return phoneRegex.test(phone)
  },

  isValidUrl: (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },

  sanitizeHtml: (html: string): string => {
    // Basic HTML sanitization - in production, use a proper library like DOMPurify
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
  }
}

// Type definitions for database entities
export interface Category {
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

export interface Subcategory {
  id: string
  category_id: string
  name: string
  key: string
  description?: string
  display_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description?: string
  overview?: string
  category_id: string
  subcategory_id: string
  image?: string
  images?: string[] // Will be stored as JSON string
  features?: string[] // Will be stored as JSON string
  applications?: string[] // Will be stored as JSON string
  specifications?: Record<string, string> // Will be stored as JSON string
  data_sheet?: string
  catalog_files?: string[] // Will be stored as JSON string
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

export interface News {
  id: string
  title: string
  slug: string
  summary?: string
  content: string
  category: 'sirket-haberleri' | 'sektor-guncel' | 'basari-hikayeleri'
  author: string
  publish_date: string
  image_url?: string
  tags?: string[] // Will be stored as JSON string
  is_featured: boolean
  is_published: boolean
  view_count: number
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  created_at: string
  updated_at: string
}

export interface Event {
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
  tags?: string[] // Will be stored as JSON string
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

export interface ContactMessage {
  id: string
  message_type: 'genel' | 'teknik-destek' | 'satis' | 'teklif-talebi' | 'is-birligi'
  first_name: string
  last_name: string
  email: string
  phone?: string
  company?: string
  position?: string
  subject: string
  message: string
  interested_products?: string[] // Will be stored as JSON string
  budget_range?: string
  timeline?: string
  source?: string
  is_read: boolean
  is_responded: boolean
  priority: 'low' | 'normal' | 'high' | 'urgent'
  assigned_to?: string
  response_notes?: string
  ip_address?: string
  user_agent?: string
  created_at: string
  updated_at: string
}

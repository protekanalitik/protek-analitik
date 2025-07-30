// Cloudflare environment types
import { D1Database, R2Bucket } from '@cloudflare/workers-types'

export interface CloudflareEnv {
  DB: D1Database
  UPLOADS: R2Bucket
  JWT_SECRET: string
  ADMIN_USERNAME: string
  ADMIN_PASSWORD_HASH: string
  ENVIRONMENT: string
}

// R2 file metadata
export interface R2FileMetadata {
  originalName: string
  uploadedAt: string
  size: string
  mimeType: string
  uploadedBy?: string
}

// Upload response
export interface UploadResponse {
  success: boolean
  data?: {
    url: string
    filename: string
    originalName: string
    size: number
    type: string
    uploadType: string
  }
  error?: string
  code?: string
}

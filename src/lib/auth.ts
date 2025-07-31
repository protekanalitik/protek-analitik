// Authentication utilities and services
import { SignJWT, jwtVerify } from 'jose'
import { EdgePasswordUtils } from './password-edge'
import { DatabaseUtils } from './database'

// JWT Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production'
const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || '15m'
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d'

// Types
export interface User {
  id: string
  username: string
  email: string
  first_name?: string
  last_name?: string
  role: 'super_admin' | 'admin' | 'editor' | 'viewer'
  is_active: boolean
  last_login?: string
  created_at: string
  updated_at: string
}

export interface AuthResult {
  success: boolean
  user?: User
  accessToken?: string
  refreshToken?: string
  error?: string
}

export interface JWTPayload {
  sub: string
  username: string
  email: string
  role: string
  type: 'access' | 'refresh' | 'password_reset'
  iat?: number
  exp?: number
  [key: string]: any
}

// JWT Utilities
export class JWTUtils {
  private static getSecret(): Uint8Array {
    return new TextEncoder().encode(JWT_SECRET)
  }

  // Generate access token (short-lived)
  static async generateAccessToken(user: User): Promise<string> {
    const payload: JWTPayload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      type: 'access'
    }

    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(JWT_ACCESS_EXPIRES_IN)
      .sign(this.getSecret())
  }

  // Generate refresh token (long-lived)
  static async generateRefreshToken(user: User): Promise<string> {
    const payload: JWTPayload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      type: 'refresh'
    }

    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(JWT_REFRESH_EXPIRES_IN)
      .sign(this.getSecret())
  }

  // Verify JWT token
  static async verifyToken(token: string): Promise<{ success: boolean; payload?: any; error?: string }> {
    try {
      const { payload } = await jwtVerify(token, this.getSecret())
      return {
        success: true,
        payload
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Invalid token'
      }
    }
  }
}

// Password utilities
export class PasswordUtils {
  // Hash password
  static async hashPassword(password: string): Promise<string> {
    return await EdgePasswordUtils.hashPassword(password)
  }

  // Verify password
  static async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return await EdgePasswordUtils.verifyPassword(password, hashedPassword)
  }

  // Generate random password
  static generateRandomPassword(length: number = 12): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let password = ''
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }
}

// Rate limiting utilities
export class RateLimiter {
  private static attempts: Map<string, { count: number; resetTime: number }> = new Map()

  static isRateLimited(key: string, maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000): boolean {
    const now = Date.now()
    const record = this.attempts.get(key)

    if (!record || now > record.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + windowMs })
      return false
    }

    if (record.count >= maxAttempts) {
      return true
    }

    record.count++
    return false
  }

  static clearAttempts(key: string): void {
    this.attempts.delete(key)
  }

  static resetRateLimit(key: string): void {
    this.attempts.delete(key)
  }

  static cleanup(): void {
    const now = Date.now()
    const keysToDelete: string[] = []
    
    this.attempts.forEach((record, key) => {
      if (now > record.resetTime) {
        keysToDelete.push(key)
      }
    })
    
    keysToDelete.forEach(key => {
      this.attempts.delete(key)
    })
  }
}

// Authentication service
export class AuthService {
  // Authenticate user with username/email and password
  static async authenticate(usernameOrEmail: string, password: string): Promise<AuthResult> {
    try {
      // For now, use hardcoded admin credentials (will be moved to database later)
      if ((usernameOrEmail === 'protekadmin' || usernameOrEmail === 'admin@protekanalitik.com') && 
          password === 'protek1234') {
        
        const user: User = {
          id: 'admin-001',
          username: 'protekadmin',
          email: 'admin@protekanalitik.com',
          first_name: 'Admin',
          last_name: 'User',
          role: 'admin',
          is_active: true,
          last_login: DatabaseUtils.formatDate(),
          created_at: DatabaseUtils.formatDate(),
          updated_at: DatabaseUtils.formatDate()
        }
        
        // Generate tokens
        const accessToken = await JWTUtils.generateAccessToken(user)
        const refreshToken = await JWTUtils.generateRefreshToken(user)

        return {
          success: true,
          user,
          accessToken,
          refreshToken
        }
      } else {
        return {
          success: false,
          error: 'Geçersiz kullanıcı adı veya şifre'
        }
      }
    } catch (error: any) {
      console.error('Authentication error:', error)
      return {
        success: false,
        error: 'Kimlik doğrulama sırasında hata oluştu'
      }
    }
  }

  // Refresh access token using refresh token
  static async refreshAccessToken(refreshToken: string): Promise<AuthResult> {
    try {
      const verification = await JWTUtils.verifyToken(refreshToken)
      
      if (!verification.success || !verification.payload) {
        return {
          success: false,
          error: 'Geçersiz refresh token'
        }
      }

      if (verification.payload.type !== 'refresh') {
        return {
          success: false,
          error: 'Geçersiz token tipi'
        }
      }

      // Create user object from token payload
      const user: User = {
        id: verification.payload.sub,
        username: verification.payload.username,
        email: verification.payload.email,
        role: verification.payload.role as User['role'],
        is_active: true,
        created_at: DatabaseUtils.formatDate(),
        updated_at: DatabaseUtils.formatDate()
      }

      const newAccessToken = await JWTUtils.generateAccessToken(user)

      return {
        success: true,
        user,
        accessToken: newAccessToken,
        refreshToken // Keep the same refresh token
      }
    } catch (error: any) {
      console.error('Token refresh error:', error)
      return {
        success: false,
        error: 'Token yenileme sırasında hata oluştu'
      }
    }
  }

  // Verify access token
  static async verifyAccessToken(token: string): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      const verification = await JWTUtils.verifyToken(token)
      
      if (!verification.success || !verification.payload) {
        return {
          success: false,
          error: 'Geçersiz token'
        }
      }

      if (verification.payload.type !== 'access') {
        return {
          success: false,
          error: 'Geçersiz token tipi'
        }
      }

      // Create user object from token payload
      const user: User = {
        id: verification.payload.sub,
        username: verification.payload.username,
        email: verification.payload.email,
        role: verification.payload.role as User['role'],
        is_active: true,
        created_at: DatabaseUtils.formatDate(),
        updated_at: DatabaseUtils.formatDate()
      }

      return {
        success: true,
        user
      }
    } catch (error: any) {
      console.error('Token verification error:', error)
      return {
        success: false,
        error: 'Token doğrulama sırasında hata oluştu'
      }
    }
  }

  // Check if user has required role
  static hasRole(user: User, requiredRole: User['role']): boolean {
    const roleHierarchy: Record<User['role'], number> = {
      'viewer': 1,
      'editor': 2,
      'admin': 3,
      'super_admin': 4
    }

    return roleHierarchy[user.role] >= roleHierarchy[requiredRole]
  }

  // Generate password reset token
  static async generatePasswordResetToken(userId: string): Promise<string> {
    const payload = {
      sub: userId,
      type: 'password_reset',
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hour
    }

    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(JWTUtils['getSecret']())
  }

  // Verify password reset token
  static async verifyPasswordResetToken(token: string): Promise<{ success: boolean; userId?: string; error?: string }> {
    try {
      const verification = await JWTUtils.verifyToken(token)
      
      if (!verification.success || !verification.payload || verification.payload.type !== 'password_reset') {
        return {
          success: false,
          error: 'Geçersiz şifre sıfırlama token'
        }
      }

      return {
        success: true,
        userId: verification.payload.sub
      }
    } catch (error: any) {
      console.error('Password reset token verification error:', error)
      return {
        success: false,
        error: 'Token doğrulama sırasında hata oluştu'
      }
    }
  }
}

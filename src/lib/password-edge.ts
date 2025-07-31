// Edge Runtime compatible password utilities using Web Crypto API
// Replaces bcryptjs for bundle size optimization and Edge Runtime compatibility

export class EdgePasswordUtils {
  /**
   * Hash password using PBKDF2 with Web Crypto API
   * Compatible with Edge Runtime, much smaller bundle size than bcryptjs
   */
  static async hashPassword(password: string, salt?: Uint8Array): Promise<string> {
    // Use provided salt or generate new one
    const saltBytes = salt || crypto.getRandomValues(new Uint8Array(32))
    
    // Convert password to bytes
    const passwordBytes = new TextEncoder().encode(password)
    
    // Import password as cryptographic key
    const key = await crypto.subtle.importKey(
      'raw',
      passwordBytes,
      { name: 'PBKDF2' },
      false,
      ['deriveBits']
    )
    
    // Derive hash using PBKDF2
    const hashBuffer = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: saltBytes,
        iterations: 100000, // Strong iteration count (similar to bcrypt rounds)
        hash: 'SHA-256'
      },
      key,
      256 // 32 bytes = 256 bits
    )
    
    const hashBytes = new Uint8Array(hashBuffer)
    
    // Combine salt and hash for storage
    // Format: salt (32 bytes) + hash (32 bytes) = 64 bytes total
    const combined = new Uint8Array(64)
    combined.set(saltBytes, 0)
    combined.set(hashBytes, 32)
    
    // Convert to base64 for storage
    return btoa(String.fromCharCode.apply(null, Array.from(combined)))
  }
  
  /**
   * Verify password against hash
   * Compatible with Edge Runtime
   */
  static async verifyPassword(password: string, storedHash: string): Promise<boolean> {
    try {
      // Decode base64 hash
      const combined = new Uint8Array(
        atob(storedHash).split('').map(char => char.charCodeAt(0))
      )
      
      // Extract salt (first 32 bytes) and stored hash (last 32 bytes)
      const salt = combined.slice(0, 32)
      const storedHashBytes = combined.slice(32, 64)
      
      // Hash the provided password with the same salt
      const passwordBytes = new TextEncoder().encode(password)
      
      const key = await crypto.subtle.importKey(
        'raw',
        passwordBytes,
        { name: 'PBKDF2' },
        false,
        ['deriveBits']
      )
      
      const hashBuffer = await crypto.subtle.deriveBits(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: 100000,
          hash: 'SHA-256'
        },
        key,
        256
      )
      
      const computedHashBytes = new Uint8Array(hashBuffer)
      
      // Constant-time comparison to prevent timing attacks
      return this.constantTimeEquals(storedHashBytes, computedHashBytes)
      
    } catch (error) {
      console.error('Password verification error:', error)
      return false
    }
  }
  
  /**
   * Constant-time comparison to prevent timing attacks
   */
  private static constantTimeEquals(a: Uint8Array, b: Uint8Array): boolean {
    if (a.length !== b.length) {
      return false
    }
    
    let result = 0
    for (let i = 0; i < a.length; i++) {
      result |= a[i] ^ b[i]
    }
    
    return result === 0
  }
  
  /**
   * Generate random password
   * Same functionality as bcryptjs version
   */
  static generateRandomPassword(length: number = 12): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let password = ''
    
    const randomBytes = crypto.getRandomValues(new Uint8Array(length))
    
    for (let i = 0; i < length; i++) {
      password += chars.charAt(randomBytes[i] % chars.length)
    }
    
    return password
  }
  
  /**
   * Migrate existing bcrypt hash to new format
   * For backward compatibility during migration
   */
  static async migrateBcryptHash(password: string, bcryptHash: string): Promise<string> {
    // In a real migration, you would verify against bcrypt first
    // then create new hash. For now, just create new hash
    return await this.hashPassword(password)
  }
}

// Export for compatibility
export const PasswordUtils = EdgePasswordUtils

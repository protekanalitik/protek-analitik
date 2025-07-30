'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// User interface
interface User {
  id: string
  username: string
  email: string
  first_name?: string
  last_name?: string
  role: 'super_admin' | 'admin' | 'editor' | 'viewer'
  is_active: boolean
  last_login?: string
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Check authentication status
  const checkAuth = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/auth/me', {
        credentials: 'include' // Include cookies
      })
      
      if (response.ok) {
        const data = await response.json()
        if (data.success && data.data.user) {
          setIsAuthenticated(true)
          setUser(data.data.user)
          return true
        }
      }
      
      // If /api/auth/me fails, try to refresh token
      const refreshResponse = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include'
      })
      
      if (refreshResponse.ok) {
        const refreshData = await refreshResponse.json()
        if (refreshData.success && refreshData.data.user) {
          setIsAuthenticated(true)
          setUser(refreshData.data.user)
          return true
        }
      }
      
      // Authentication failed
      setIsAuthenticated(false)
      setUser(null)
      
      // Clear localStorage tokens
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
      
      return false
      
    } catch (error) {
      console.error('Auth check error:', error)
      setError('Kimlik doğrulama kontrolü sırasında hata oluştu')
      setIsAuthenticated(false)
      setUser(null)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  // Login function
  const login = async (usernameOrEmail: string, password: string, rememberMe: boolean = false) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          usernameOrEmail,
          password,
          rememberMe
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setIsAuthenticated(true)
        setUser(data.data.user)
        
        // Store tokens in localStorage as backup
        localStorage.setItem('accessToken', data.data.accessToken)
        localStorage.setItem('refreshToken', data.data.refreshToken)
        localStorage.setItem('user', JSON.stringify(data.data.user))
        
        return { success: true, user: data.data.user }
      } else {
        setError(data.error || 'Giriş başarısız')
        return { success: false, error: data.error }
      }
    } catch (error) {
      const errorMessage = 'Bağlantı hatası oluştu'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = async () => {
    try {
      // Call logout API
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      })
    } catch (error) {
      console.error('Logout API error:', error)
    } finally {
      // Clear local state regardless of API success
      setIsAuthenticated(false)
      setUser(null)
      setError(null)
      
      // Clear localStorage
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
      
      // Redirect to login
      router.push('/login')
    }
  }

  // Redirect to login with current path
  const redirectToLogin = () => {
    const currentPath = window.location.pathname
    const loginUrl = currentPath === '/login' ? '/login' : `/login?redirect=${encodeURIComponent(currentPath)}`
    router.push(loginUrl)
  }

  // Refresh access token
  const refreshToken = async () => {
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include'
      })
      
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          // Update localStorage
          localStorage.setItem('accessToken', data.data.accessToken)
          localStorage.setItem('user', JSON.stringify(data.data.user))
          return true
        }
      }
      
      return false
    } catch (error) {
      console.error('Token refresh error:', error)
      return false
    }
  }

  // Check if user has required role
  const hasRole = (requiredRole: User['role']) => {
    if (!user) return false
    
    const roleHierarchy = {
      viewer: 1,
      editor: 2,
      admin: 3,
      super_admin: 4
    }
    
    return roleHierarchy[user.role] >= roleHierarchy[requiredRole]
  }

  // Initialize auth check on mount
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return {
    isAuthenticated,
    loading,
    user,
    error,
    login,
    logout,
    redirectToLogin,
    checkAuth,
    refreshToken,
    hasRole
  }
}

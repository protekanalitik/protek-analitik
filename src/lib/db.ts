/**
 * Database connection utilities for Cloudflare D1
 */

declare global {
  var D1: any
}

export function getD1Database() {
  // In production/Cloudflare Workers environment
  if (typeof globalThis.D1 !== 'undefined') {
    return globalThis.D1
  }
  
  // In development environment, D1 is not available
  // Return null to trigger fallback behavior
  return null
}

export function isDatabaseAvailable(): boolean {
  return getD1Database() !== null
}

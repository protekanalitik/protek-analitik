'use client'

import { useState, useEffect } from 'react'
import { 
  EnvelopeIcon,
  EnvelopeOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

interface ContactMessage {
  id: string
  first_name?: string
  last_name?: string
  name?: string
  email: string
  phone?: string
  company?: string
  position?: string
  subject: string
  message: string
  message_type: 'genel' | 'teknik-destek' | 'satis' | 'teklif-talebi' | 'is-birligi'
  interested_products?: string
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

interface MessageFilters {
  message_type: string
  priority: string
  is_read: string
  is_responded: string
  search: string
}

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  
  const [filters, setFilters] = useState<MessageFilters>({
    message_type: '',
    priority: '',
    is_read: '',
    is_responded: '',
    search: ''
  })

  // Fetch messages on component mount
  useEffect(() => {
    fetchMessages()
  }, [])

  // Apply filters when messages or filters change
  useEffect(() => {
    applyFilters()
  }, [messages, filters])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      
      const response = await fetch('/api/contact', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const result = await response.json()

      if (result.success) {
        setMessages(result.data || [])
      } else {
        setError(result.error || 'Failed to fetch messages')
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
      setError('Network error occurred')
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...messages]

    // Text search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(msg => 
        (msg.name || `${msg.first_name} ${msg.last_name}`).toLowerCase().includes(searchLower) ||
        msg.email.toLowerCase().includes(searchLower) ||
        msg.subject.toLowerCase().includes(searchLower) ||
        msg.message.toLowerCase().includes(searchLower) ||
        (msg.company || '').toLowerCase().includes(searchLower)
      )
    }

    // Message type filter
    if (filters.message_type) {
      filtered = filtered.filter(msg => msg.message_type === filters.message_type)
    }

    // Priority filter
    if (filters.priority) {
      filtered = filtered.filter(msg => msg.priority === filters.priority)
    }

    // Read status filter
    if (filters.is_read) {
      const isRead = filters.is_read === 'true'
      filtered = filtered.filter(msg => msg.is_read === isRead)
    }

    // Response status filter
    if (filters.is_responded) {
      const isResponded = filters.is_responded === 'true'
      filtered = filtered.filter(msg => msg.is_responded === isResponded)
    }

    setFilteredMessages(filtered)
  }

  const markAsRead = async (messageId: string) => {
    try {
      // Update local state immediately
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, is_read: true } : msg
      ))

      // TODO: API call to update message status
      // await updateMessageStatus(messageId, { is_read: true })
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  const getMessageTypeLabel = (type: string) => {
    const types = {
      'genel': 'Genel',
      'teknik-destek': 'Teknik Destek',
      'satis': 'Satış',
      'teklif-talebi': 'Teklif Talebi',
      'is-birligi': 'İş Birliği'
    }
    return types[type as keyof typeof types] || type
  }

  const getMessageTypeColor = (type: string) => {
    const colors = {
      'genel': 'bg-gray-100 text-gray-800',
      'teknik-destek': 'bg-blue-100 text-blue-800',
      'satis': 'bg-green-100 text-green-800',
      'teklif-talebi': 'bg-yellow-100 text-yellow-800',
      'is-birligi': 'bg-purple-100 text-purple-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      'low': 'bg-gray-100 text-gray-600',
      'normal': 'bg-blue-100 text-blue-600',
      'high': 'bg-orange-100 text-orange-600',
      'urgent': 'bg-red-100 text-red-600'
    }
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-600'
  }

  const getPriorityLabel = (priority: string) => {
    const labels = {
      'low': 'Düşük',
      'normal': 'Normal',
      'high': 'Yüksek',
      'urgent': 'Acil'
    }
    return labels[priority as keyof typeof labels] || priority
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getMessageName = (message: ContactMessage) => {
    if (message.name) return message.name
    if (message.first_name || message.last_name) {
      return `${message.first_name || ''} ${message.last_name || ''}`.trim()
    }
    return 'Anonim'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center space-x-2">
          <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
          <span className="text-red-800 font-medium">Error: {error}</span>
        </div>
        <button 
          onClick={fetchMessages}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">İletişim Mesajları</h1>
          <p className="text-gray-600">Müşterilerden gelen mesajları görüntüleyin ve yönetin</p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <FunnelIcon className="w-4 h-4" />
          <span>Filtrele</span>
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Arama
              </label>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="İsim, email, konu..."
                />
              </div>
            </div>

            {/* Message Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mesaj Türü
              </label>
              <select
                value={filters.message_type}
                onChange={(e) => setFilters(prev => ({ ...prev, message_type: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tümü</option>
                <option value="genel">Genel</option>
                <option value="teknik-destek">Teknik Destek</option>
                <option value="satis">Satış</option>
                <option value="teklif-talebi">Teklif Talebi</option>
                <option value="is-birligi">İş Birliği</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Öncelik
              </label>
              <select
                value={filters.priority}
                onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tümü</option>
                <option value="low">Düşük</option>
                <option value="normal">Normal</option>
                <option value="high">Yüksek</option>
                <option value="urgent">Acil</option>
              </select>
            </div>

            {/* Read Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Okunma Durumu
              </label>
              <select
                value={filters.is_read}
                onChange={(e) => setFilters(prev => ({ ...prev, is_read: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tümü</option>
                <option value="false">Okunmamış</option>
                <option value="true">Okunmuş</option>
              </select>
            </div>

            {/* Response Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yanıt Durumu
              </label>
              <select
                value={filters.is_responded}
                onChange={(e) => setFilters(prev => ({ ...prev, is_responded: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tümü</option>
                <option value="false">Yanıtlanmamış</option>
                <option value="true">Yanıtlanmış</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setFilters({
                message_type: '',
                priority: '',
                is_read: '',
                is_responded: '',
                search: ''
              })}
              className="text-gray-600 hover:text-gray-800"
            >
              Filtreleri Temizle
            </button>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-blue-600">{messages.length}</div>
          <div className="text-sm text-gray-600">Toplam Mesaj</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-orange-600">
            {messages.filter(msg => !msg.is_read).length}
          </div>
          <div className="text-sm text-gray-600">Okunmamış</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">
            {messages.filter(msg => msg.is_responded).length}
          </div>
          <div className="text-sm text-gray-600">Yanıtlanmış</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-2xl font-bold text-red-600">
            {messages.filter(msg => msg.priority === 'urgent' || msg.priority === 'high').length}
          </div>
          <div className="text-sm text-gray-600">Yüksek Öncelik</div>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-lg border border-gray-200">
        {filteredMessages.length === 0 ? (
          <div className="p-8 text-center">
            <EnvelopeIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Mesaj bulunamadı</h3>
            <p className="text-gray-600">
              {messages.length === 0 
                ? 'Henüz hiç mesaj gelmemiş.' 
                : 'Filtreleme kriterlerinize uygun mesaj bulunamadı.'
              }
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !message.is_read ? 'bg-blue-50' : ''
                }`}
                onClick={() => {
                  setSelectedMessage(message)
                  if (!message.is_read) {
                    markAsRead(message.id)
                  }
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-2">
                        {message.is_read ? (
                          <EnvelopeOpenIcon className="w-4 h-4 text-gray-400" />
                        ) : (
                          <EnvelopeIcon className="w-4 h-4 text-blue-600" />
                        )}
                        <span className={`font-medium ${!message.is_read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {getMessageName(message)}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${getMessageTypeColor(message.message_type)}`}>
                        {getMessageTypeLabel(message.message_type)}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(message.priority)}`}>
                        {getPriorityLabel(message.priority)}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg ${!message.is_read ? 'font-semibold text-gray-900' : 'font-medium text-gray-800'} mb-1`}>
                      {message.subject}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {message.message}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{message.email}</span>
                      {message.company && <span>• {message.company}</span>}
                      <span>• {formatDate(message.created_at)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    {message.is_responded && (
                      <div className="p-1 bg-green-100 rounded">
                        <CheckCircleIcon className="w-4 h-4 text-green-600" />
                      </div>
                    )}
                    <EyeIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Mesaj Detayı</h2>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Message Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gönderen</label>
                  <p className="text-gray-900">{getMessageName(selectedMessage)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                  <p className="text-gray-900">{selectedMessage.email}</p>
                </div>
                {selectedMessage.phone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <p className="text-gray-900">{selectedMessage.phone}</p>
                  </div>
                )}
                {selectedMessage.company && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Şirket</label>
                    <p className="text-gray-900">{selectedMessage.company}</p>
                  </div>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
                <p className="text-gray-900 font-medium">{selectedMessage.subject}</p>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesaj</label>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>

              {/* Additional Info */}
              {(selectedMessage.interested_products || selectedMessage.budget_range || selectedMessage.timeline) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedMessage.interested_products && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">İlgilenilen Ürünler</label>
                      <p className="text-gray-900">{selectedMessage.interested_products}</p>
                    </div>
                  )}
                  {selectedMessage.budget_range && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bütçe Aralığı</label>
                      <p className="text-gray-900">{selectedMessage.budget_range}</p>
                    </div>
                  )}
                  {selectedMessage.timeline && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Zaman Çizelgesi</label>
                      <p className="text-gray-900">{selectedMessage.timeline}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Meta Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <label className="block font-medium mb-1">Tarih</label>
                  <p>{formatDate(selectedMessage.created_at)}</p>
                </div>
                <div>
                  <label className="block font-medium mb-1">Kaynak</label>
                  <p>{selectedMessage.source || 'Website'}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <ChatBubbleLeftRightIcon className="w-4 h-4" />
                  <span>Yanıtla</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Okundu İşaretle
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Öncelik Değiştir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

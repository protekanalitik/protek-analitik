'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  CheckCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import ImageUpload from '@/components/ImageUpload'

interface EventForm {
  title: string
  slug: string
  description: string
  content: string
  event_type: 'seminer' | 'webinar' | 'fuar' | 'egitim' | 'konferans'
  start_date: string
  end_date: string
  location: string
  address: string
  registration_url: string
  max_participants: number | null
  image_url: string
  tags: string
  is_featured: boolean
  is_published: boolean
  registration_required: boolean
  is_online: boolean
  meeting_link: string
  meta_title: string
  meta_description: string
  meta_keywords: string
}

export default function EditEventPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string
  
  const [loading, setLoading] = useState(false)
  const [event, setEvent] = useState<any | null>(null)
  const [form, setForm] = useState({
    title: '',
    description: '',
    content: '',
    event_type: 'seminer',
    start_date: '',
    end_date: '',
    location: '',
    image_url: '',
    registration_url: '',
    is_featured: false
  })

  const eventTypeOptions = [
    { value: 'fuar', label: 'Fuar' },
    { value: 'seminer', label: 'Seminer' },
    { value: 'webinar', label: 'Webinar' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'konferans', label: 'Konferans' }
  ]

  useEffect(() => {
    // Load existing event data from API
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/events/${eventId}`)
        const result = await response.json()
        
        if (result.success) {
          const existingEvent = result.data
          setEvent(existingEvent)
          setForm({
            title: existingEvent.title,
            description: existingEvent.description,
            content: existingEvent.content,
            event_type: existingEvent.event_type,
            start_date: existingEvent.start_date,
            end_date: existingEvent.end_date || '',
            location: existingEvent.location,
            image_url: existingEvent.image_url,
            registration_url: existingEvent.registration_url || '',
            is_featured: existingEvent.is_featured || false
          })
        }
      } catch (error) {
        console.error('Etkinlik yükleme hatası:', error)
      }
    }
    
    fetchEvent()
  }, [eventId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const eventData = {
        ...form,
        end_date: form.end_date || undefined,
        registration_url: form.registration_url || undefined
      }

      // API'ye PUT isteği gönder
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Etkinlik başarıyla güncellendi!')
        router.push('/admin/resources')
      } else {
        alert(`Hata: ${result.error}`)
      }
    } catch (error) {
      console.error('Etkinlik güncelleme hatası:', error)
      alert('Hata: Etkinlik güncellenirken bir sorun oluştu.')
    } finally {
      setLoading(false)
    }
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Etkinlik bilgileri yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/resources"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Etkinlik Düzenle</h1>
            <p className="text-gray-600">{event.title} - ID: {event.id}</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Kolon - Ana İçerik */}
          <div className="lg:col-span-2 space-y-6">
            {/* Temel Bilgiler */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Temel Bilgiler</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Etkinlik Adı *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Etkinlik adını girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kısa Açıklama *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.description}
                    onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Etkinlik&apos;in açıklamasını girin"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Etkinlik Türü *
                    </label>
                    <select
                      required
                      value={form.event_type}
                      onChange={(e) => setForm(prev => ({ ...prev, event_type: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {eventTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Başlangıç Tarihi *
                    </label>
                    <input
                      type="date"
                      required
                      value={form.start_date}
                      onChange={(e) => setForm(prev => ({ ...prev, start_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bitiş Tarihi
                    </label>
                    <input
                      type="date"
                      value={form.end_date}
                      onChange={(e) => setForm(prev => ({ ...prev, end_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lokasyon *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => setForm(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Örn: İstanbul Fuar Center, Online (Zoom)"
                  />
                </div>
              </div>
            </div>

            {/* İçerik */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Etkinlik Detayları</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Detaylı İçerik (Markdown destekli) *
                </label>
                <textarea
                  required
                  rows={15}
                  value={form.content}
                  onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                  placeholder="Etkinlik detaylarını markdown formatında yazın..."
                />
                <div className="mt-2 text-xs text-gray-500">
                  Program, konuşmacılar, gündem gibi detayları markdown formatında ekleyebilirsiniz
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Ek Bilgiler */}
          <div className="space-y-6">
            {/* Resim */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <ImageUpload
                value={form.image_url}
                onChange={(url) => setForm(prev => ({ ...prev, image_url: url }))}
                label="Etkinlik Görseli"
              />
            </div>

            {/* Kayıt */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kayıt Bilgileri</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kayıt URL&apos;si
                  </label>
                  <input
                    type="url"
                    value={form.registration_url}
                    onChange={(e) => setForm(prev => ({ ...prev, registration_url: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/kayit"
                  />
                  <div className="mt-1 text-xs text-gray-500">
                    Katılımcıların kayıt olabileceği web sayfası linki
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={form.is_featured}
                    onChange={(e) => setForm(prev => ({ ...prev, is_featured: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                    Öne çıkarılsın
                  </label>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Güncelleniyor...</span>
                  </>
                ) : (
                  <>
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>Etkinliği Güncelle</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
} 
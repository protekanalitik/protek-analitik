'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  PhotoIcon,
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

export default function NewEventPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<EventForm>({
    title: '',
    slug: '',
    description: '',
    content: '',
    event_type: 'seminer',
    start_date: '',
    end_date: '',
    location: '',
    address: '',
    registration_url: '',
    max_participants: null,
    image_url: '',
    tags: '',
    is_featured: false,
    is_published: true,
    registration_required: false,
    is_online: false,
    meeting_link: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  })

  const eventTypeOptions = [
    { value: 'seminer', label: 'Seminer' },
    { value: 'webinar', label: 'Webinar' },
    { value: 'fuar', label: 'Fuar' },
    { value: 'egitim', label: 'Eğitim' },
    { value: 'konferans', label: 'Konferans' }
  ]

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTitleChange = (value: string) => {
    setForm(prev => ({
      ...prev,
      title: value,
      slug: generateSlug(value),
      meta_title: prev.meta_title || value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // API'ye POST isteği gönder
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (result.success) {
        alert('Etkinlik başarıyla eklendi!')
        router.push('/admin/resources')
      } else {
        alert(`Hata: ${result.message || result.error}`)
      }
    } catch (error) {
      console.error('Event creation error:', error)
      alert('Hata: Etkinlik eklenirken bir sorun oluştu.')
    } finally {
      setLoading(false)
    }
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
            <h1 className="text-2xl font-bold text-gray-900">Yeni Etkinlik Ekle</h1>
            <p className="text-gray-600">Sisteme yeni etkinlik duyurusu ekleyin</p>
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
                    onChange={(e) => handleTitleChange(e.target.value)}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      placeholder="Örn: İstanbul Fuar Center, Online"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adres
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => setForm(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Detaylı adres bilgisi"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Maksimum Katılımcı
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={form.max_participants || ''}
                      onChange={(e) => setForm(prev => ({ ...prev, max_participants: e.target.value ? parseInt(e.target.value) : null }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Sınır yok ise boş bırakın"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Etiketler
                    </label>
                    <input
                      type="text"
                      value={form.tags}
                      onChange={(e) => setForm(prev => ({ ...prev, tags: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="teknoloji, güvenlik, seminer"
                    />
                    <div className="mt-1 text-xs text-gray-500">
                      Virgülle ayırın
                    </div>
                  </div>
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
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="registration_required"
                    checked={form.registration_required}
                    onChange={(e) => setForm(prev => ({ ...prev, registration_required: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="registration_required" className="ml-2 block text-sm text-gray-900">
                    Kayıt zorunlu
                  </label>
                </div>
                
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
                    id="is_online"
                    checked={form.is_online}
                    onChange={(e) => setForm(prev => ({ ...prev, is_online: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_online" className="ml-2 block text-sm text-gray-900">
                    Online etkinlik
                  </label>
                </div>
                
                {form.is_online && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Toplantı Linki
                    </label>
                    <input
                      type="url"
                      value={form.meeting_link}
                      onChange={(e) => setForm(prev => ({ ...prev, meeting_link: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://zoom.us/meeting/123"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Ayarlar */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Yayın Ayarları</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_published"
                    checked={form.is_published}
                    onChange={(e) => setForm(prev => ({ ...prev, is_published: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_published" className="ml-2 block text-sm text-gray-900">
                    Etkinliği yayına al
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_featured"
                    checked={form.is_featured}
                    onChange={(e) => setForm(prev => ({ ...prev, is_featured: e.target.checked }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
                    Öne çıkan etkinlik olarak işaretle
                  </label>
                </div>
              </div>
            </div>
            
            {/* SEO */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Ayarları</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Başlığı
                  </label>
                  <input
                    type="text"
                    value={form.meta_title}
                    onChange={(e) => setForm(prev => ({ ...prev, meta_title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Özel SEO başlığı (boş bırakılırsa etkinlik adı kullanılır)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Açıklaması
                  </label>
                  <textarea
                    rows={2}
                    value={form.meta_description}
                    onChange={(e) => setForm(prev => ({ ...prev, meta_description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Arama motorları için açıklama"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Anahtar Kelimeler
                  </label>
                  <input
                    type="text"
                    value={form.meta_keywords}
                    onChange={(e) => setForm(prev => ({ ...prev, meta_keywords: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="teknoloji, güvenlik, seminer"
                  />
                </div>
              </div>
            </div>

            {/* Önizleme Bilgisi */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">📅 Etkinlik Özeti</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Tür:</strong> {eventTypeOptions.find(t => t.value === form.event_type)?.label}</p>
                {form.start_date && (
                  <p><strong>Tarih:</strong> {new Date(form.start_date).toLocaleDateString('tr-TR')} 
                  {form.end_date && form.end_date !== form.start_date && 
                    ` - ${new Date(form.end_date).toLocaleDateString('tr-TR')}`}
                  </p>
                )}
                {form.location && <p><strong>Lokasyon:</strong> {form.location}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
          <Link
            href="/admin/resources"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            İptal
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Kaydediliyor...</span>
              </>
            ) : (
              <>
                <CalendarIcon className="w-4 h-4" />
                <span>Etkinlik Yayınla</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
} 
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    messageType: 'genel'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          message_type: formData.messageType,
          source: 'website-contact-form'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          messageType: 'genel'
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-black via-[#000510] to-[#001328] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-[#001328]/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#001328]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/30 rounded-full blur-3xl"></div>
      </div>
              <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-white">İletişime Geçin</h2>
          <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
            Projeleriniz için uzman ekibimizden destek almak istiyorsanız, bizimle iletişime geçin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-primary-400" />
                <span>+90 (216) 329 39 60 Pbx</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-primary-400" />
                <span>+90 (216) 329 37 70 Pbx</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-primary-400" />
                <span>info@protekanalitik.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-primary-400" />
                <span>Atakent Mah. Dicle Cad. No:29</span>
              </div>
              <div className="flex items-center gap-3 pl-9">
                <span>34760 Ümraniye / İstanbul / TÜRKİYE</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Adınız"
                  required
                  className="input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Soyadınız"
                  className="input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-posta"
                  required
                  className="input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefon"
                  className="input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Şirket"
                className="input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="messageType"
                  value={formData.messageType}
                  onChange={handleInputChange}
                  className="input bg-neutral-900 border-neutral-800 text-white focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="genel">Genel Bilgi</option>
                  <option value="teklif-talebi">Teklif Talebi</option>
                  <option value="teknik-destek">Teknik Destek</option>
                  <option value="satis">Satış</option>
                  <option value="is-birligi">İş Birliği</option>
                </select>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Konu"
                  required
                  className="input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mesajınız"
                required
                className="input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500 resize-none"
              ></textarea>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
                  Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
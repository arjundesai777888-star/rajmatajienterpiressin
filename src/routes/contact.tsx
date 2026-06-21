import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useLang } from '@/contexts/LanguageContext'
import { MapPin, Phone, Clock, Truck } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const { t } = useLang()
  const c = t.contact

  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.message) {
      setStatus('error')
      return
    }
    const msg = `Hello Rajmata Enterprise!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/918142853118?text=${msg}`, '_blank')
    setStatus('success')
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--blue-950) 0%, var(--blue-800) 100%)',
          paddingTop: 'calc(68px + 3.5rem)',
          paddingBottom: '3.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(249,115,22,0.15)',
              border: '1px solid rgba(249,115,22,0.35)',
              color: 'var(--orange-400)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.35rem 1rem',
              borderRadius: 20,
              marginBottom: '1rem',
            }}
          >
            Contact
          </span>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            {c.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7 }}>
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="contact-layout">
            {/* Info Card */}
            <div className="contact-info-card">
              <h2 className="contact-info-title">Rajmata Enterprise</h2>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={18} color="var(--orange-400)" />
                </div>
                <div>
                  <div className="contact-info-label">{c.addressLabel}</div>
                  <div className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>{c.addressValue}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={18} color="var(--orange-400)" />
                </div>
                <div>
                  <div className="contact-info-label">{c.phoneLabel}</div>
                  <a
                    href="tel:+918142853118"
                    className="contact-info-value"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {c.phoneValue}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={18} color="var(--orange-400)" />
                </div>
                <div>
                  <div className="contact-info-label">{c.hoursLabel}</div>
                  <div className="contact-info-value">{c.hoursValue}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Truck size={18} color="var(--orange-400)" />
                </div>
                <div>
                  <div className="contact-info-label">{c.deliveryLabel}</div>
                  <div className="contact-info-value">{c.deliveryValue}</div>
                </div>
              </div>

              <a
                href="https://wa.me/918142853118"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {c.whatsappBtn}
              </a>
            </div>

            {/* Form */}
            <div className="form-card">
              <h3 className="form-title">{c.title}</h3>

              {status === 'success' && (
                <div className="form-success">{c.successMsg}</div>
              )}
              {status === 'error' && (
                <div className="form-error">{c.errorMsg}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    placeholder={c.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-input"
                    placeholder={c.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-textarea"
                    placeholder={c.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="form-submit-btn">
                  {c.submitBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="map-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="section-label">{c.mapTitle}</span>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            KPHB Colony, Hyderabad
          </h2>
        </div>
        <div className="map-wrap">
          <iframe
            title="Rajmata Enterprise Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5987345!2d78.3912!3d17.4882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b22b5a7f1f%3A0xb05e21c2dcfe5f43!2sKPHB+Colony%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}

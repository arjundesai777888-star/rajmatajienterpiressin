import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useLang } from '@/contexts/LanguageContext'

export const Route = createFileRoute('/order')({
  component: Order,
})

const EN_PRODUCTS = [
  'Pickup Bags',
  'Grocery Bags',
  'Carry Bags',
  'Tissue Papers',
  'Napkins',
  'Wooden Spoons',
  'Cleaning Mops',
  'Phenyl',
  'Air Fresheners',
  'Garbage Bags',
]

function Order() {
  const { lang, t } = useLang()
  const o = t.order

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    quantity: '',
    notes: '',
  })
  const [selected, setSelected] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const productNames = EN_PRODUCTS

  const toggleProduct = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    )
  }

  const buildWhatsAppMsg = () => {
    const lines = [
      `*New Order Request - Rajmata Enterprise*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Delivery Address:* ${form.address}`,
      ``,
      `*Products Required:*`,
      ...selected.map((p) => `• ${p}`),
      form.quantity ? `\n*Quantity/Details:* ${form.quantity}` : null,
      form.notes ? `*Notes:* ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n')
    return encodeURIComponent(lines)
  }

  const handleWhatsApp = () => {
    if (!form.name || !form.phone || !form.address || selected.length === 0) {
      setStatus('error')
      return
    }
    window.open(`https://wa.me/918142853118?text=${buildWhatsAppMsg()}`, '_blank')
    setStatus('success')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.address || selected.length === 0) {
      setStatus('error')
      return
    }
    window.open(`https://wa.me/918142853118?text=${buildWhatsAppMsg()}`, '_blank')
    setStatus('success')
    setForm({ name: '', phone: '', email: '', address: '', quantity: '', notes: '' })
    setSelected([])
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
            Order Booking
          </span>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            {o.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7 }}>
            {o.subtitle}
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          {/* WhatsApp Quick Order */}
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: '1.5rem',
              border: '2px solid #dcfce7',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.2rem' }}>
                Quick Order on WhatsApp
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                Chat directly with us for fastest response
              </div>
            </div>
            <a
              href="https://wa.me/918142853118?text=Hello!%20I%20would%20like%20to%20place%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-btn"
              style={{ width: 'auto', padding: '0.7rem 1.5rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {o.whatsappBtn}
            </a>
          </div>

          <div className="form-card">
            <h3 className="form-title">{o.title}</h3>

            {status === 'success' && (
              <div className="form-success">{o.successMsg}</div>
            )}
            {status === 'error' && (
              <div className="form-error">{o.errorMsg}</div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name + Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder={o.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder={o.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '1.1rem' }}>
                <input
                  type="email"
                  className="form-input"
                  placeholder={o.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-textarea"
                  style={{ minHeight: 80 }}
                  placeholder={o.addressPlaceholder}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </div>

              {/* Products */}
              <div className="form-group">
                <label className="form-label">{o.selectProducts}</label>
                <div className="checkbox-group">
                  {productNames.map((name, i) => (
                    <label className="checkbox-item" key={i}>
                      <input
                        type="checkbox"
                        checked={selected.includes(name)}
                        onChange={() => toggleProduct(name)}
                      />
                      {name}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <textarea
                  className="form-textarea"
                  style={{ minHeight: 80 }}
                  placeholder={o.quantityPlaceholder}
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-textarea"
                  style={{ minHeight: 70 }}
                  placeholder={o.notesPlaceholder}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="submit" className="form-submit-btn" style={{ flex: 1 }}>
                  {o.submitBtn}
                </button>
                <button
                  type="button"
                  className="whatsapp-cta-btn"
                  style={{ flex: 1 }}
                  onClick={handleWhatsApp}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {o.whatsappBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

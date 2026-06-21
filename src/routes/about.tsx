import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LanguageContext'
import { MapPin, Phone, Target, Heart, Clock, Truck } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { t } = useLang()
  const a = t.about

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
            About Us
          </span>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            {a.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7 }}>
            {a.subtitle}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="about-grid">
            {/* Left - Story */}
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Rajmata Enterprise</h2>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {a.story}
              </p>

              <div className="mission-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <Target size={20} color="#fb923c" />
                  <div className="mission-title" style={{ margin: 0 }}>{a.missionTitle}</div>
                </div>
                <p className="mission-text">{a.missionText}</p>
              </div>

              {/* Location */}
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1.25rem',
                  background: 'var(--off-white)',
                  borderRadius: 12,
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <MapPin size={18} color="var(--orange-600)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.2rem' }}>
                      {a.locationTitle}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                      {a.address}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Phone size={16} color="var(--orange-600)" style={{ flexShrink: 0 }} />
                  <a
                    href="tel:+918142853118"
                    style={{ fontSize: '0.9rem', color: 'var(--blue-700)', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {a.phone}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Clock size={16} color="var(--orange-600)" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>
                    <strong>{a.hoursLabel}:</strong> {a.hours}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Truck size={16} color="var(--orange-600)" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>
                    <strong>{a.deliveryLabel}:</strong> {a.delivery}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Values + Clients */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Heart size={20} color="var(--orange-600)" />
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.35rem', color: 'var(--text-dark)' }}>
                  {a.valuesTitle}
                </h3>
              </div>

              <div className="values-grid">
                {a.values.map((v, i) => (
                  <div className="value-card" key={i}>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                ))}
              </div>

              {/* Clients */}
              <div style={{ marginTop: '2rem' }}>
                <div className="clients-title">{a.clientsTitle}</div>
                <div className="clients-list">
                  {a.clients.map((c, i) => (
                    <span className="client-tag" key={i}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div
                style={{
                  marginTop: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                {[
                  { num: '10+', label: 'Product Categories' },
                  { num: '100+', label: 'Happy Customers' },
                  { num: 'Bulk', label: 'Wholesale Orders' },
                  { num: 'Fast', label: 'Hyderabad Delivery' },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'linear-gradient(135deg, var(--blue-800), var(--blue-700))',
                      borderRadius: 12,
                      padding: '1.25rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '1.75rem',
                        color: '#fff',
                        lineHeight: 1,
                        marginBottom: '0.3rem',
                      }}
                    >
                      {s.num}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

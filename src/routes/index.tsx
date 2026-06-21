import { createFileRoute, Link } from '@tanstack/react-router'
import { useLang } from '@/contexts/LanguageContext'
import {
  ShoppingBag,
  ShoppingCart,
  Package,
  FileText,
  Utensils,
  Droplets,
  Wind,
  Trash2,
  Star,
  Truck,
  BadgeCheck,
  Layers,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const productIcons = [
  { icon: ShoppingBag, bg: '#eff6ff', color: '#1d4ed8' },
  { icon: ShoppingCart, bg: '#fff7ed', color: '#ea580c' },
  { icon: Package, bg: '#f0fdf4', color: '#16a34a' },
  { icon: FileText, bg: '#fdf4ff', color: '#9333ea' },
  { icon: FileText, bg: '#fff1f2', color: '#e11d48' },
  { icon: Utensils, bg: '#fffbeb', color: '#d97706' },
  { icon: Droplets, bg: '#f0f9ff', color: '#0284c7' },
  { icon: Droplets, bg: '#ecfdf5', color: '#059669' },
  { icon: Wind, bg: '#faf5ff', color: '#7c3aed' },
  { icon: Trash2, bg: '#fff8f1', color: '#c2410c' },
]

const whyIcons = [Star, BadgeCheck, Truck, Layers]

function Home() {
  const { t } = useLang()
  const h = t.home
  const p = t.products

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div>
            <div className="hero-tagline-pill fade-up fade-up-1">
              <span>✦</span>
              {h.heroTagline}
            </div>
            <h1 className="hero-title fade-up fade-up-2">
              {h.heroTitle}
              <span className="hero-title-hindi">राजमाता एंटरप्राइज</span>
            </h1>
            <p className="hero-subtitle fade-up fade-up-3">{h.heroSubtitle}</p>
            <div className="hero-btns fade-up fade-up-4">
              <Link to="/products" className="btn-primary">
                {h.heroCta1}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a
                href="https://wa.me/918142853118?text=Hello%20Rajmata%20Enterprise!%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {h.heroCta2}
              </a>
            </div>
          </div>

          {/* Hero Card */}
          <div className="hero-card fade-up fade-up-3">
            <div className="hero-card-title">Our Product Range</div>
            {[
              'Disposable Items & Bags',
              'Tissue Papers & Napkins',
              'Cleaning Mops & Phenyl',
              'Air Fresheners & Packaging',
            ].map((item, i) => (
              <div className="hero-stat" key={i}>
                <div className="hero-stat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="hero-stat-text">{item}</span>
              </div>
            ))}
            <a
              href="https://wa.me/918142853118"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.5rem', marginTop: '0.5rem',
                background: '#25d366', color: '#fff',
                padding: '0.65rem', borderRadius: '10px',
                fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Wave */}
        <svg
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%' }}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" />
        </svg>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <span className="section-label">Products</span>
          <h2 className="section-title">{h.featuredTitle}</h2>
          <p className="section-subtitle">{h.featuredSubtitle}</p>

          <div className="products-grid">
            {p.items.slice(0, 6).map((item, i) => {
              const iconData = productIcons[i]
              const Icon = iconData.icon
              return (
                <div className="product-card" key={i}>
                  <div
                    className="product-card-icon-wrap"
                    style={{ background: iconData.bg }}
                  >
                    <Icon size={48} color={iconData.color} strokeWidth={1.5} />
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-category">{item.category}</div>
                    <div className="product-card-name">{item.name}</div>
                    <p className="product-card-desc">{item.desc}</p>
                    <a
                      href={`https://wa.me/918142853118?text=Hello!%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}.%20Please%20share%20pricing%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-card-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      {p.enquire}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/products" className="btn-primary">
              {p.orderAll}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">{h.whyUsTitle}</h2>
          <div className="why-grid">
            {h.reasons.map((r, i) => {
              const Icon = whyIcons[i]
              return (
                <div className="why-card" key={i}>
                  <div className="why-icon">
                    <Icon size={22} color="#fff" />
                  </div>
                  <div className="why-title">{r.title}</div>
                  <p className="why-desc">{r.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="cta-title">{h.ctaTitle}</h2>
          <p className="cta-sub">{h.ctaSubtitle}</p>
          <div className="cta-btns">
            <Link to="/order" className="btn-primary">
              {h.ctaBtn1}
            </Link>
            <a href="tel:+918142853118" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13.4a19.79 19.79 0 01-3.07-8.67A2 2 0 013.59 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 10.09a16 16 0 006 6l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.5l-.08-.58z"/></svg>
              {h.ctaBtn2}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

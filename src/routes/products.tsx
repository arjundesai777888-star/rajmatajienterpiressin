import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useLang } from '@/contexts/LanguageContext'
import {
  ShoppingBag, ShoppingCart, Package, FileText,
  Utensils, Droplets, Wind, Trash2,
} from 'lucide-react'

export const Route = createFileRoute('/products')({
  component: Products,
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

function Products() {
  const { t } = useLang()
  const p = t.products
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Bags', 'Disposables', 'Cleaning', 'Packaging']

  const filtered =
    activeCategory === 'All'
      ? p.items
      : p.items.filter((item) => item.category === activeCategory)

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
            Products
          </span>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            {p.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7 }}>
            {p.subtitle}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          {/* Category Filters */}
          <div className="cat-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {(p.categories as Record<string, string>)[cat] ?? cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="products-grid">
            {filtered.map((item, i) => {
              const originalIndex = p.items.indexOf(item)
              const iconData = productIcons[originalIndex] ?? productIcons[0]
              const Icon = iconData.icon
              return (
                <div className="product-card" key={i}>
                  <div
                    className="product-card-icon-wrap"
                    style={{ background: iconData.bg }}
                  >
                    <Icon size={52} color={iconData.color} strokeWidth={1.4} />
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-category">{item.category}</div>
                    <div className="product-card-name">{item.name}</div>
                    <p className="product-card-desc">{item.desc}</p>
                    <a
                      href={`https://wa.me/918142853118?text=Hello!%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}.%20Please%20share%20pricing%20and%20availability.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-card-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {p.enquire}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              padding: '2.5rem',
              background: 'var(--off-white)',
              borderRadius: 20,
              border: '1px solid #e2e8f0',
            }}
          >
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: 'var(--text-dark)',
              }}
            >
              Need bulk pricing?
            </h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
              Contact us for wholesale rates and bulk orders
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/918142853118?text=Hello!%20I%20need%20bulk%20pricing%20for%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: '#25d366' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {p.enquire}
              </a>
              <Link to="/order" className="btn-primary">
                {p.orderAll}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

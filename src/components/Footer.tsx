import { Link } from '@tanstack/react-router'
import { useLang } from '@/contexts/LanguageContext'
import { Clock, MapPin, Phone, Truck } from 'lucide-react'

export default function Footer() {
  const { t, lang } = useLang()
  const f = t.footer
  const n = t.nav

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand-name">Rajmata Enterprise</div>
          <div className="footer-tagline">{f.tagline}</div>
          <p className="footer-desc">
            {lang === 'hi'
              ? 'KPHB कॉलोनी, हैदराबाद में डिस्पोजेबल आइटम, सफाई उत्पाद और पैकेजिंग सामग्री के प्रमुख आपूर्तिकर्ता।'
              : 'Leading supplier of disposable items, cleaning products and packaging materials in KPHB Colony, Hyderabad.'}
          </p>
        </div>

        <div>
          <div className="footer-col-title">{f.quickLinks}</div>
          <ul className="footer-links">
            <li><Link to="/">{n.home}</Link></li>
            <li><Link to="/products">{n.products}</Link></li>
            <li><Link to="/about">{n.about}</Link></li>
            <li><Link to="/contact">{n.contact}</Link></li>
            <li><Link to="/order">{n.order}</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">{f.contactTitle}</div>
          <div className="footer-contact-item" style={{ display: 'flex', gap: '0.5rem' }}>
            <MapPin size={15} style={{ flexShrink: 0, marginTop: 2, opacity: 0.5 }} />
            <span style={{ whiteSpace: 'pre-line' }}>{f.address}</span>
          </div>
          <div className="footer-contact-item" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Phone size={15} style={{ flexShrink: 0, opacity: 0.5 }} />
            <a href="tel:+918142853118" style={{ color: 'inherit', textDecoration: 'none' }}>
              {f.phone}
            </a>
          </div>
          <div className="footer-contact-item" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Clock size={15} style={{ flexShrink: 0, opacity: 0.5 }} />
            <span>{f.hours}</span>
          </div>
          <div className="footer-contact-item" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Truck size={15} style={{ flexShrink: 0, opacity: 0.5 }} />
            <span>{f.delivery}</span>
          </div>
          <a
            href="https://wa.me/918142853118"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginTop: '0.5rem',
              color: '#4ade80',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#4ade80">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span>{f.rights}</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>Hyderabad, Telangana</span>
        </div>
      </div>
    </footer>
  )
}

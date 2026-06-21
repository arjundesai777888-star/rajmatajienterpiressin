import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useLang } from '@/contexts/LanguageContext'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-brand-name">Rajmata Enterprise</span>
          <span className="navbar-brand-tag">राजमाता एंटरप्राइज</span>
        </Link>

        <ul className="navbar-links">
          <li><Link to="/">{t.nav.home}</Link></li>
          <li><Link to="/products">{t.nav.products}</Link></li>
          <li><Link to="/about">{t.nav.about}</Link></li>
          <li><Link to="/contact">{t.nav.contact}</Link></li>
          <li><Link to="/order" className="navbar-order-btn">{t.nav.order}</Link></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="lang-toggle">
            <button
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn${lang === 'hi' ? ' active' : ''}`}
              onClick={() => setLang('hi')}
            >
              हिं
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} color="#fff" /> : (
              <>
                <span /><span /><span />
              </>
            )}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>{t.nav.products}</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>{t.nav.about}</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>
        <Link to="/order" className="mobile-order" onClick={() => setMenuOpen(false)}>
          {t.nav.order}
        </Link>
        <div className="mobile-lang">
          <button
            className={`mobile-lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
          >
            English
          </button>
          <button
            className={`mobile-lang-btn${lang === 'hi' ? ' active' : ''}`}
            onClick={() => setLang('hi')}
          >
            हिंदी
          </button>
        </div>
      </div>
    </nav>
  )
}

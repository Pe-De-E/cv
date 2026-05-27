import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import PDLogo from './PDLogo'
import './Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('de') ? 'de' : 'en'
  const location = useLocation()
  const isOnCvPage = location.pathname === '/cv'

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo-link">
        <PDLogo />
      </NavLink>
      <div className="navbar-nav">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
          {t('nav.home')}
        </NavLink>
        <NavLink to="/cv" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
          {t('nav.cvLink')}
        </NavLink>
      </div>
      <div className="navbar-actions">
        <div className="lang-switcher">
          <button
            className={`lang-btn ${currentLang === 'de' ? 'active' : ''}`}
            onClick={() => i18n.changeLanguage('de')}
          >
            DE
          </button>
          <button
            className={`lang-btn lang-btn--en ${currentLang === 'en' ? 'active' : ''}`}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </button>
        </div>
        {isOnCvPage && (
          <button className="pdf-btn" onClick={() => window.print()}>
            {t('nav.exportPdf')}
          </button>
        )}
      </div>
    </nav>
  )
}

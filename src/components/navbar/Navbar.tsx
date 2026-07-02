import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PDLogo from './PDLogo'
import './Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('de') ? 'de' : 'en'

  return (
    <nav className="navbar">
      <PDLogo />
      <div className="navbar-nav">
        <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link--active' : '')}>
          {t('nav.cvLink')}
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link--active' : '')}>
          {t('nav.skills')}
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
        <NavLink className={() => 'pdf-btn'} to="/resume">
          {t('nav.viewResume')}
        </NavLink>
      </div>
    </nav>
  )
}

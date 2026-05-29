import { useTranslation } from 'react-i18next'
import PDLogo from './PDLogo'
import './Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('de') ? 'de' : 'en'

  return (
    <nav className="navbar">
      <PDLogo />
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
        <a
          className="pdf-btn"
          href={`/cvs/CV-Philipp-Demmelmair-${currentLang === 'de' ? 'DE' : 'EN'}.pdf`}
          download
        >
          {t('nav.exportPdf')}
        </a>
      </div>
    </nav>
  )
}

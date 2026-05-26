import { useTranslation } from 'react-i18next'
import './CV.css'

export default function CV() {
  const { t } = useTranslation()

  return (
    <div className="container clearfix">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="header-box">
          <h1>PHILIPP<br />DEMMELMAIR</h1>
          <div className="contact-info">
            <div className="contact-subtitle">{t('header.subtitle')}</div>
            <p><a href="https://linkedin.com/in/philipp-demmelmair" target="_blank" rel="noreferrer">💼 linkedin.com/in/philipp-demmelmair</a></p>
            <p><a className="contact-link--red" href="mailto:donsivler24@gmail.com">📧 donsivler24@gmail.com</a></p>
            <p><a href="https://github.com/Pe-De-E" target="_blank" rel="noreferrer">🐙 github.com/Pe-De-E</a></p>
          </div>
        </div>

        <div className="section">
          <div className="section-title">{t('sections.skills')}</div>
          <div className="dot-bg">
            <div className="skills-grid">
              <div className="skill-tag">Vue.js</div>
              <div className="skill-tag">TypeScript</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">Python</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">PostgreSQL</div>
              <div className="skill-tag">HTML/CSS</div>
              <div className="skill-tag">Git</div>
              <div className="skill-tag">Docker</div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">{t('softSkills.title')}</div>
          <div className="dot-bg">
            <ul>
              {t('softSkills.items', { returnObjects: true }).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-title">{t('languages.title')}</div>
          <div className="dot-bg">
            <ul>
              <li><strong>{t('languages.german')}</strong> – {t('languages.germanLevel')}</li>
              <li><strong>{t('languages.english')}</strong> – {t('languages.englishLevel')}</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-title">{t('sections.interests')}</div>
          <div className="dot-bg">
            <div className="skills-grid">
              <div className="interest-tag">{t('interests.cycling')}</div>
              <div className="interest-tag">{t('interests.bikepacking')}</div>
              <div className="interest-tag">{t('interests.nature')}</div>
              <div className="interest-tag">{t('interests.photography')}</div>
              <div className="interest-tag">{t('interests.dogs')}</div>
              <div className="interest-tag">{t('interests.openSource')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">
        <div className="about-section">
          <h2>{t('sections.about')}</h2>
          <p>{t('about.text')}</p>
        </div>

        {/* EXPERIENCE */}
        <div className="experience-section">
          <h2>{t('sections.experience')}</h2>

          <div className="job">
            <div className="job-title">{t('experience.job1.title')}</div>
            <div className="job-company">{t('experience.job1.company')}</div>
            <div className="job-desc">
              {t('experience.job1.description')}
              <ul>
                {t('experience.job1.bullets', { returnObjects: true }).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="job" style={{ marginTop: '25px' }}>
            <div className="job-title">{t('experience.job2.title')}</div>
            <div className="job-company">{t('experience.job2.company')}</div>
            <div className="job-desc">
              {t('experience.job2.description')}
              <ul>
                {t('experience.job2.bullets', { returnObjects: true }).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="job" style={{ marginTop: '25px' }}>
            <div className="job-title">{t('experience.job3.title')}</div>
            <div className="job-company">{t('experience.job3.company')}</div>
            <div className="job-desc">
              {t('experience.job3.description')}
              <ul>
                {t('experience.job3.bullets', { returnObjects: true }).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="job" style={{ marginTop: '25px' }}>
            <div className="job-title">{t('experience.job4.title')}</div>
            <div className="job-company">{t('experience.job4.company')}</div>
            <div className="job-desc">{t('experience.job4.description')}</div>
          </div>

          <div className="job" style={{ marginTop: '25px' }}>
            <div className="job-title">{t('experience.job5.title')}</div>
            <div className="job-company">{t('experience.job5.company')}</div>
            <div className="job-desc">{t('experience.job5.description')}</div>
          </div>
        </div>

        <div className="page-break" />

        {/* EDUCATION */}
        <div className="education">
          <h3 style={{ fontSize: '13px', marginBottom: '12px', textTransform: 'uppercase', fontWeight: 900, color: '#fff' }}>
            {t('sections.education')}
          </h3>
          <div className="education-item">
            <div className="education-title">{t('education.item1.title')}</div>
            <div className="education-date">{t('education.item1.date')}</div>
            <div style={{ fontSize: '11px', marginTop: '4px' }}>{t('education.item1.detail')}</div>
          </div>
          <div className="education-item">
            <div className="education-title">{t('education.item2.title')}</div>
            <div className="education-date">{t('education.item2.date')}</div>
            <div style={{ fontSize: '11px', marginTop: '4px' }}>{t('education.item2.detail')}</div>
          </div>
          <div className="education-item">
            <div className="education-title">{t('education.item3.title')}</div>
            <div className="education-date">{t('education.item3.date')}</div>
            <div style={{ fontSize: '11px', marginTop: '4px' }}>{t('education.item3.detail')}</div>
          </div>
          <div className="education-item">
            <div className="education-title">{t('education.item4.title')}</div>
            <div className="education-date">{t('education.item4.date')}</div>
            <div style={{ fontSize: '11px', marginTop: '4px' }}>{t('education.item4.detail')}</div>
          </div>
        </div>

        {/* TECH */}
        <div className="skills-section">
          <h3 style={{ fontSize: '13px', marginBottom: '12px', textTransform: 'uppercase', fontWeight: 900, color: '#fff' }}>
            {t('sections.tech')}
          </h3>
          <p><span className="skill-category">{t('tech.frontend')}</span> {t('tech.frontendValue')}</p>
          <p><span className="skill-category">{t('tech.backend')}</span> {t('tech.backendValue')}</p>
          <p><span className="skill-category">{t('tech.tools')}</span> {t('tech.toolsValue')}</p>
          <p><span className="skill-category">{t('tech.approach')}</span> {t('tech.approachValue')}</p>
        </div>

        <div className="accent-box">
          {t('availability.remote')}<br />
          {t('availability.relocate')}<br />
          {t('availability.available')}
        </div>
      </div>
    </div>
  )
}

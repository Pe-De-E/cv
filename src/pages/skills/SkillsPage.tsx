import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SKILLS, type Skill, type SkillCategory } from '../../data/skills'
import SkillTag from '../../components/skill/SkillTag'
import './SkillsPage.css'

type Filter = 'all' | SkillCategory

const FILTERS: Filter[] = ['all', 'frontend', 'backend', 'tools']

const FILTER_LABELS: Record<Filter, string> = {
  all: 'Alle',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
}

export default function SkillsPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Skill | null>(null)

  const visible = filter === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === filter)

  return (
    <div className="skills-page container">
      <h1 className="skills-page__title">{t('sections.skills')}</h1>

      <div className="skills-page__filters">
        {FILTERS.map(f => (
          <button
            key={f}
            type="button"
            className={'skills-page__filter' + (filter === f ? ' skills-page__filter--active' : '')}
            onClick={() => { setFilter(f); setSelected(null) }}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </div>

      <div className="skills-page__grid">
        {visible.map(skill => (
          <SkillTag key={skill.key} skill={skill} onClick={setSelected} />
        ))}
      </div>

      {selected && (
        <div className="skills-page__detail">
          <div className="skills-page__detail-header">
            <span className="skills-page__detail-name">{selected.name}</span>
            <button
              type="button"
              className="skills-page__detail-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
          <div className="skills-page__bar-track">
            <div className="skills-page__bar-fill" style={{ width: `${selected.level}%` }} />
            <span className="skills-page__bar-label">{selected.level}%</span>
          </div>
          <p className="skills-page__detail-desc">{t(`skillDetails.${selected.key}`)}</p>
        </div>
      )}
    </div>
  )
}

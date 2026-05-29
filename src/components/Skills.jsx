import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SKILLS } from '../data/skills'
import SkillTag from './SkillTag'

export default function Skills() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)

  if (selected) {
    return (
      <div className="skill-detail">
        <button className="skill-detail__back" onClick={() => setSelected(null)}>
          ← {t('skillDetail.back')}
        </button>
        <div className="skill-detail__name">{selected.name}</div>
        <div className="skill-detail__bar-track">
          <div className="skill-detail__bar-fill" style={{ width: `${selected.level}%` }} />
          <span className="skill-detail__bar-label">{selected.level}%</span>
        </div>
        <p className="skill-detail__description">{t(`skillDetails.${selected.key}`)}</p>
      </div>
    )
  }

  return (
    <div className="skills-grid">
      {SKILLS.map((skill) => (
        <SkillTag key={skill.name} skill={skill} onClick={setSelected} />
      ))}
    </div>
  )
}

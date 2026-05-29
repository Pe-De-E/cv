import { type CSSProperties } from 'react'
import { Skill } from '../../data/skills'

interface Props {
  skill: Skill
  onClick: (skill: Skill) => void
}

export default function SkillTag({ skill, onClick }: Props) {
  return (
    <button
      type="button"
      className="skill-tag"
      style={{ '--level': `${skill.level}%` } as CSSProperties}
      onClick={() => onClick(skill)}
    >
      {skill.name}
    </button>
  )
}

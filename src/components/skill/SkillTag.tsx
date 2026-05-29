import { Skill } from '../../data/skills'

interface Props {
  skill: Skill
  onClick: (skill: Skill) => void
}

export default function SkillTag({ skill, onClick }: Props) {
  return (
    <div
      className="skill-tag"
      style={{ '--level': `${skill.level}%` } as React.CSSProperties}
      onClick={() => onClick(skill)}
    >
      {skill.name}
    </div>
  )
}

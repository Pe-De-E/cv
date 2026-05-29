export default function SkillTag({ skill, onClick }) {
  return (
    <div
      className="skill-tag"
      style={{ '--level': `${skill.level}%` }}
      onClick={() => onClick(skill)}
    >
      {skill.name}
    </div>
  )
}

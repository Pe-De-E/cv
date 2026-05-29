interface Props {
  title: string
  date: string
  detail: string
}

export default function EducationItem({ title, date, detail }: Props) {
  return (
    <div className="education-item">
      <div className="education-title">{title}</div>
      <div className="education-date">{date}</div>
      <div className="education-detail">{detail}</div>
    </div>
  )
}

export default function EducationItem({ title, date, detail }) {
  return (
    <div className="education-item">
      <div className="education-title">{title}</div>
      <div className="education-date">{date}</div>
      <div className="education-detail">{detail}</div>
    </div>
  );
}

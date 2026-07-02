export interface ResumeJobData {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export default function ResumeJob({ title, company, date, bullets }: ResumeJobData) {
  return (
    <div className="resume-job">
      <div className="resume-job-head">
        <p className="resume-job-title">{title}</p>
        <span className="resume-job-date">{date}</span>
      </div>
      <p className="resume-job-company">{company}</p>
      <ul>
        {bullets.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
        ))}
      </ul>
    </div>
  );
}

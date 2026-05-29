export default function Job({ title, company, description, bullets }) {
  return (
    <div className="job">
      <div className="job-title">{title}</div>
      <div className="job-company">{company}</div>
      <div className="job-desc">
        {description}
        {bullets?.length > 0 && (
          <ul>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function ResumeProjects() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });

  return (
    <section className="resume-section">
      <p className="resume-section-label">{resume.sectionLabels.projects}</p>
      <hr className="resume-section-rule" />
      {resume.projects.map((p, i) => (
        <div className="resume-project-card" key={i}>
          <div className="resume-project-head">
            <span className="resume-project-title">{p.title}</span>
            <span className="resume-project-stack">{p.stack}</span>
          </div>
          <p>{p.text}</p>
        </div>
      ))}
    </section>
  );
}

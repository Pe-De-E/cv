import { useTranslation } from "react-i18next";

export default function ResumeEducation() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });

  return (
    <section className="resume-section">
      <p className="resume-section-label">{resume.sectionLabels.education}</p>
      <hr className="resume-section-rule" />
      {resume.education.map((item, i) => (
        <div className="resume-edu-row" key={i}>
          <div>
            <p className="resume-edu-title">{item.title}</p>
            <span className="resume-edu-sub">{item.sub}</span>
          </div>
          <span className="resume-edu-date">{item.date}</span>
        </div>
      ))}
    </section>
  );
}

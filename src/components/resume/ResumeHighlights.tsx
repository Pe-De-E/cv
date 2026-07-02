import { useTranslation } from "react-i18next";

export default function ResumeHighlights() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });

  return (
    <section className="resume-section">
      <p className="resume-section-label">{resume.sectionLabels.highlights}</p>
      <hr className="resume-section-rule" />
      <div className="resume-highlights">
        {resume.highlights.map((h, i) => (
          <div className="resume-highlight-card" key={i}>
            <p className="resume-highlight-num">{h.num}</p>
            <p className="resume-highlight-text">{h.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

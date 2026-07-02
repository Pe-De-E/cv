import { useTranslation } from "react-i18next";

export default function ResumeCommunication() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });

  return (
    <section className="resume-section">
      <p className="resume-section-label">{resume.sectionLabels.communication}</p>
      <hr className="resume-section-rule" />
      <div className="resume-card-grid">
        {resume.communication.map((card, i) => (
          <div className="resume-info-card" key={i}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

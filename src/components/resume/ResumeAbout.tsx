import { useTranslation } from "react-i18next";

export default function ResumeAbout() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });

  return (
    <section className="resume-section">
      <p className="resume-section-label">{resume.sectionLabels.about}</p>
      <hr className="resume-section-rule" />
      <p className="resume-lead" dangerouslySetInnerHTML={{ __html: resume.about }} />
    </section>
  );
}

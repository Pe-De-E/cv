import { useTranslation } from "react-i18next";
import ResumeJob from "./ResumeJob";

export default function ResumeExperience() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });

  return (
    <section className="resume-section">
      <p className="resume-section-label">{resume.sectionLabels.experience}</p>
      <hr className="resume-section-rule" />
      {resume.experience.map((job, i) => (
        <ResumeJob key={i} {...job} />
      ))}
    </section>
  );
}

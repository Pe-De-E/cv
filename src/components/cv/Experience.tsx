import { useTranslation } from "react-i18next";
import Job from "./Job";

export default function Experience() {
  const { t } = useTranslation();
  const jobs = Object.values(t("experience", { returnObjects: true }));

  return (
    <div className="experience-section">
      <h2>{t("sections.experience")}</h2>
      {jobs.map((job, i) => (
        <Job key={i} {...job} />
      ))}
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function ResumeBanner() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });

  return (
    <div className="resume-banner">
      {resume.banner.map((item, i) => (
        <span key={i}>✓ {item}</span>
      ))}
    </div>
  );
}

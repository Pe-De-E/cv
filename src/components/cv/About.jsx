import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-section">
      <h2>{t("sections.about")}</h2>
      <p dangerouslySetInnerHTML={{ __html: t("about.text") }} />
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function Tech() {
  const { t } = useTranslation();
  const items = t("tech", { returnObjects: true });

  return (
    <div className="skills-section">
      <h3>{t("sections.tech")}</h3>
      {items.map((item, i) => (
        <p key={i}>
          <span className="skill-category">{item.label}</span> {item.value}
        </p>
      ))}
    </div>
  );
}

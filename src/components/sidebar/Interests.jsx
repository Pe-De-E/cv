import { useTranslation } from "react-i18next";

export default function Interests() {
  const { t } = useTranslation();
  const items = Object.values(t("interests", { returnObjects: true }));

  return (
    <div className="dot-bg">
      <div className="skills-grid">
        {items.map((item, i) => (
          <div key={i} className="interest-tag">{item}</div>
        ))}
      </div>
    </div>
  );
}

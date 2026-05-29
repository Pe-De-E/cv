import { useTranslation } from "react-i18next";

export default function SoftSkills() {
  const { t } = useTranslation();

  return (
    <div className="dot-bg">
      <ul>
        {t("softSkills.items", { returnObjects: true }).map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import EducationItem from "./EducationItem";

export default function Education() {
  const { t } = useTranslation();
  const items = Object.values(t("education", { returnObjects: true }));

  return (
    <div className="education">
      <h3>{t("sections.education")}</h3>
      {items.map((item, i) => (
        <EducationItem key={i} {...item} />
      ))}
    </div>
  );
}

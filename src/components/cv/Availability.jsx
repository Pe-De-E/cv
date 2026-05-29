import { useTranslation } from "react-i18next";

export default function Availability() {
  const { t } = useTranslation();

  return (
    <div className="accent-box">
      {t("availability.remote")}
      <br />
      {t("availability.relocate")}
      <br />
      {t("availability.available")}
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function HeaderBox() {
  const { t } = useTranslation();

  return (
    <div className="header-box">
      <h1>
        PHILIPP
        <br />
        DEMMELMAIR
      </h1>
      <div className="contact-info">
        <div className="contact-subtitle">{t("header.subtitle")}</div>
        <p>
          <a
            href="https://linkedin.com/in/philipp-demmelmair"
            target="_blank"
            rel="noreferrer"
          >
            💼 linkedin.com/in/philipp-demmelmair
          </a>
        </p>
        <p>
          <a className="contact-link--red" href="mailto:donsivler24@gmail.com">
            📧 donsivler24@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Pe-De-E"
            target="_blank"
            rel="noreferrer"
          >
            🐙 github.com/Pe-De-E
          </a>
        </p>
      </div>
    </div>
  );
}

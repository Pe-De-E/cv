import { useTranslation } from "react-i18next";

interface TechGroup {
  label: string;
  core?: string[];
  tool?: string[];
  dev?: string[];
}

function TechBadges({ group }: { group: TechGroup }) {
  return (
    <div className="resume-badges">
      {group.core?.map((name) => (
        <span className="resume-badge resume-badge--core" key={name}>
          {name}
        </span>
      ))}
      {group.tool?.map((name) => (
        <span className="resume-badge resume-badge--tool" key={name}>
          {name}
        </span>
      ))}
      {group.dev?.map((name) => (
        <span className="resume-badge resume-badge--dev" key={name}>
          {name}
        </span>
      ))}
    </div>
  );
}

export default function ResumeTech() {
  const { t } = useTranslation();
  const resume = t("resume", { returnObjects: true });
  const tech = resume.tech;
  const legend = resume.legend;

  return (
    <section className="resume-section">
      <p className="resume-section-label">{resume.sectionLabels.tech}</p>
      <hr className="resume-section-rule" />
      <div className="resume-tech-grid">
        <div>
          <p className="resume-tech-group-label">{tech.frontend.label}</p>
          <hr className="resume-tech-group-rule" />
          <TechBadges group={tech.frontend} />
        </div>
        <div>
          <p className="resume-tech-group-label">{tech.backend.label}</p>
          <hr className="resume-tech-group-rule" />
          <TechBadges group={tech.backend} />
        </div>
        <div>
          <p className="resume-tech-group-label">{tech.toolsMethod.label}</p>
          <hr className="resume-tech-group-rule" />
          <TechBadges group={tech.toolsMethod} />
        </div>
        <div>
          <p className="resume-tech-group-label">{tech.languages.label}</p>
          <hr className="resume-tech-group-rule" />
          <TechBadges group={tech.languages} />
        </div>
      </div>
      <div className="resume-legend">
        {legend.map((item) => (
          <div className="resume-legend-item" key={item.variant}>
            <span className={`resume-badge resume-badge--${item.variant}`}>{item.swatch}</span>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}

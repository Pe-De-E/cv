import { useTranslation } from "react-i18next";
import Skills from "../skill/Skills";
import SoftSkills from "./SoftSkills";
import Interests from "./Interests";
import HeaderBox from "../cv/HeaderBox";
import Section from "./Section";

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <HeaderBox />

      <Section title={t("sections.skills")}>
        <Skills />
      </Section>

      <Section title={t("softSkills.title")}>
        <SoftSkills />
      </Section>

      <Section title={t("sections.interests")}>
        <Interests />
      </Section>
    </div>
  );
}

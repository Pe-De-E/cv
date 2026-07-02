import ResumeHeader from "../../components/resume/ResumeHeader";
import ResumeAbout from "../../components/resume/ResumeAbout";
import ResumeHighlights from "../../components/resume/ResumeHighlights";
import ResumeTech from "../../components/resume/ResumeTech";
import ResumeCommunication from "../../components/resume/ResumeCommunication";
import ResumeExperience from "../../components/resume/ResumeExperience";
import ResumeProjects from "../../components/resume/ResumeProjects";
import ResumeEducation from "../../components/resume/ResumeEducation";
import ResumeBanner from "../../components/resume/ResumeBanner";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-sheet">
        <ResumeHeader />
        <hr className="resume-gold-rule" />
        <ResumeAbout />
        <ResumeHighlights />
        <ResumeTech />
        <ResumeCommunication />
        <ResumeExperience />
        <ResumeProjects />
        <ResumeEducation />
      </div>
      <ResumeBanner />
    </div>
  );
}

import About from "../../components/cv/About";
import Experience from "../../components/cv/Experience";
import Education from "../../components/cv/Education";
import Tech from "../../components/cv/Tech";
import Availability from "../../components/cv/Availability";

export default function Main() {
  return (
    <div className="main">
      <About />
      <Experience />
      <Education />
      <Tech />
      <Availability />
    </div>
  );
}

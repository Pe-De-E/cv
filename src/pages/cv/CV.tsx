import Sidebar from "../../components/sidebar/Sidebar";
import Main from "./Main";
import "./CV.css";

export default function CV() {
  return (
    <div className="container clearfix">
      <Sidebar />
      <Main />
    </div>
  );
}

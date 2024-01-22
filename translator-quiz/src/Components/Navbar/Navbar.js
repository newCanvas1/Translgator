import { useContext } from "react";
import "./Navbar.css";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

export default function Navbar() {
  const {language} = useContext(LanguageContext)
  const labels = getLabels(language)
  return (
    <nav className="navbar">
      <a href="/">
      <div className="brand">
      <div className="icons8-google-translate"></div>
        <p>Translgator</p>
      </div>
      </a>
      <div className="ml-auto">
         <a href="/about" >
        <div className="about">
          <p>{labels.about}</p>
        </div>
      </a>
      </div>
     
    </nav>
  );
}

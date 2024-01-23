import { useContext } from "react";
import "./Navbar.css";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";
import Select from "react-dropdown-select";
import { languages } from "./languageOptions";

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const labels = getLabels(language);
  return (
    <nav className="navbar">
      <a href="/">
        <div className="brand">
          <div className="icons8-google-translate"></div>
          <p>Translgator</p>
        </div>
      </a>
      <div className="ml-auto flex gap-1">
        <a href="/about">
          <div className="about">
            <p>{labels.about}</p>
          </div>
        </a>
        <Select
          onChange={(values) => setLanguage(values[0].value)}
          options={languages}
          values={[{ value: "en", label: "English" }]}
          className="language-select text-black text-xs "
        />
      </div>
    </nav>
  );
}

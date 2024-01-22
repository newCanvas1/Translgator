import "./TranslateInput.css";
import React from "react";
import Output from "../Output/Output";
import LangaugeSelect from "../LanguageSelect/LangaugeSelect";


export default function TranslateInput() {
  const [input, setInput] = React.useState("");
  const [language, setLanguage] = React.useState("en");

  function userTyping() {
    let text = document.getElementsByClassName("input")[0].value;
    setInput(text);
  }
 

  return (
    <div className="input-section" onChange={userTyping}>
      <input type="text" className="input" placeholder="Enter here!" />
<LangaugeSelect setLanguage={setLanguage} />
      <Output wordsList={input} toLanguage={language} />
    </div>
  );
}

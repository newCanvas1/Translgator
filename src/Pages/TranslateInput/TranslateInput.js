import "./TranslateInput.css";
import React, { useContext } from "react";
import Output from "../../Components/Output/Output";
import LangaugeSelect from "../../Components/LanguageSelect/LangaugeSelect";

import InputToTranslate from "../../Components/InputToTranslate/InputToTranslate";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

export default function TranslateInput() {
  const [input, setInput] = React.useState("");
  const [toLanguage, setToLanguage] = React.useState("en");
  const [didLangChange, setDidLangChange] = React.useState(false);
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);

  function userTyping() {
    let text = document.getElementsByClassName("input")[0].value;
    setInput(text);
  }

  return (
    <div className="input-section">

      <p style={{ fontFamily: "inherit", fontSize: 18 }}>{labels.appTitle}</p>
      <div className="adjust-input-select justify-center px-4 w-[100%]">
        <InputToTranslate userTyping={userTyping} length={input.length} />
        <LangaugeSelect  setDidLangChange={setDidLangChange} setLanguage={setToLanguage} />
      </div>

      <Output wordsList={input} toLanguage={toLanguage} didLangChange={didLangChange} />
    </div>
  );
}

import "./TranslateInput.css";
import React, { useContext } from "react";
import Output from "../../Components/Output/Output";
import LangaugeSelect from "../../Components/LanguageSelect/LangaugeSelect";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

export default function TranslateInput() {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  const [input, setInput] = React.useState("");
  const [toLanguage, setToLanguage] = React.useState("en");

  function userTyping() {
    let text = document.getElementsByClassName("input")[0].value;
    setInput(text);
  }

  return (
    <div className="input-section" onChange={userTyping}>
      <div className="adjust-input-select justify-center  w-[100%]">
        <input type="text" className="input  text-center" placeholder={labels.enterHereToTranslate} />
        <LangaugeSelect setLanguage={setToLanguage} />
      </div>

      <Output wordsList={input} toLanguage={toLanguage} />
    </div>
  );
}

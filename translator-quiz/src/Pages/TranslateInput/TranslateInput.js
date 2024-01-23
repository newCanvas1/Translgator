import "./TranslateInput.css";
import React from "react";
import Output from "../../Components/Output/Output";
import LangaugeSelect from "../../Components/LanguageSelect/LangaugeSelect";

import InputToTranslate from "../../Components/InputToTranslate/InputToTranslate";

export default function TranslateInput() {
  const [input, setInput] = React.useState("");
  const [toLanguage, setToLanguage] = React.useState("en");

  function userTyping() {
    let text = document.getElementsByClassName("input")[0].value;
    setInput(text);
  }

  return (
    <div className="input-section">
      <div className="adjust-input-select justify-center px-4 w-[100%]">
        <InputToTranslate userTyping={userTyping} length={input.length} />
        <LangaugeSelect setLanguage={setToLanguage} />
      </div>

      <Output wordsList={input} toLanguage={toLanguage} />
    </div>
  );
}

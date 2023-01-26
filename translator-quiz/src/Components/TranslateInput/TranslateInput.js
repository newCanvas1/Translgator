import "./TranslateInput.css";
import React from "react";
import Output from "../Output/Output";
export default function TranslateInput() {
  const [input, setInput] = React.useState("");

  function userTyping() {
    let text = document.getElementsByClassName("input")[0].value;
    setInput(text);
  }

  function userClickTranslate() {
    let wordsList=input.split(" ");

    console.log(wordsList);
  }

  return (
    <div className="input-section" onChange={userTyping}>
      <input type="text" className="input" placeholder="Enter here!" />
      {input !== "" && (
        <button
          className="input-button background-hover"
          onClick={userClickTranslate}
        >
          Translate
        </button>
      )}

      <Output wordsList={input}/>
    </div>
  );
}

import "./TranslateInput.css";
import React from "react";
import Output from "../Output/Output";
export default function TranslateInput() {
  const [input, setInput] = React.useState("");

  function userTyping() {
    let text = document.getElementsByClassName("input")[0].value;
    setInput(text);
  }


  return (
    <div className="input-section" onChange={userTyping}>
      <input type="text" className="input" placeholder="Enter here!" />
      

      <Output wordsList={input}/>
    </div>
  );
}

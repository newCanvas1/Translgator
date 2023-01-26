import "./Output.css";
import React from "react";
import Input from "../Input/Input";
let inputBoxInScreen = false;

export default function Output(props) {
  // console.log("Output Rendered. ")
  const [outputArea, setOutputArea] = React.useState();
  const [result, setResult] = React.useState(false);
  const [show, setShow] = React.useState(true);

  let word = props.wordsList;

  function userClickTranslate() {
    // send a fetch request to API
    setOutputArea(<Input word={word} />);



    setShow((prev)=>{return!prev})
    setTimeout(()=>{
    console.log(show)
    setShow((prev)=>{return!prev})

    },200)
    
    inputBoxInScreen=true
  }

  function check() {
    let inputList = document.getElementsByClassName("input-area");
    let comparisonWord = word.replace(" ", "");
    for (let i = 0; i < inputList.length; i++) {
      console.log(inputList[i].value === comparisonWord[i]);
      if (inputList[i].value !== comparisonWord[i]) {
        setResult(false);
        break;
      }
      setResult(true);
    }
  }

  return (
    <div className="output-area">
      {props.wordsList !== "" && (
        <button
          className="input-button background-hover"
          onClick={userClickTranslate}
        >
          Translate
        </button>
      )}
      <div className="output">{show&&outputArea}</div>
      {inputBoxInScreen && (
        <button className="input-button background-hover check" onClick={check}>
          check
        </button>
      )}

      <div className="result">{result && <h1>correct ! </h1>}</div>
    </div>
  );
}

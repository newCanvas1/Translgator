import "./Output.css";
import React from "react";
let inputBoxInScreen = false;

export default function Output(props) {
  // console.log("Output Rendered. ")

  const [outputArea, setOutputArea] = React.useState([]);
  const [result, setResult] = React.useState(false);

  let textAreaListTest = [];
  let word = props.wordsList;

  function userClickTranslate() {
    // send a fetch request to API

    for (let i = 0; i < word.length; i++) {
      let randomNumber = Math.floor(Math.random() * 10);

      if (word[i] === " ") {
        textAreaListTest.push(<div className="emptyDiv"> </div>);
      } else {
        if (randomNumber % 2 === 0) {
          textAreaListTest.push(
            <input
              type={"text"}
              value={word[i]}
              readOnly={true}
              className="input-area"
            />
          );
        } else {
          textAreaListTest.push(<input type={"text"} className="input-area" />);
        }
      }
    }
    inputBoxInScreen = true;
console.log(textAreaListTest)
    setOutputArea(textAreaListTest);
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
      <div className="output">{outputArea}</div>
      {inputBoxInScreen && (
        <button className="input-button background-hover" onClick={check}>
          check
        </button>
      )}

      <div className="result">{result && <h1>correct ! </h1>}</div>
    </div>
  );
}

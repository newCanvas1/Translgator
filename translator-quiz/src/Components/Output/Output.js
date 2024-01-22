import "./Output.css";
import React from "react";
import Input from "../Input/Input";
import { Discuss } from "react-loader-spinner";

let inputBoxInScreen = false;

export default function Output({ wordsList, toLanguage }) {
  const [outputArea, setOutputArea] = React.useState();
  const [checkMessage, setCheckMessage] = React.useState("");
  const [translatedWord, setTranslatedWord] = React.useState();
  const [show, setShow] = React.useState(true);
  const [translating, setTranslating] = React.useState(false);

  async function userClickTranslate() {
    setTranslating(true);
    const res = await fetch("http://localhost:3000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word: wordsList, to: toLanguage }),
    });
    const body = await res.json();
    setTranslatedWord(body.data);
    setTranslating(false);
    setOutputArea(<Input word={body.data} />);
    setShow((prev) => {
      return !prev;
    });
    setTimeout(() => {
      setShow((prev) => {
        return !prev;
      });
    }, 200);

    inputBoxInScreen = true;
  }

  function check() {
    let inputList = document.getElementsByClassName("input-area");
    let comparisonWord = translatedWord.replace(" ", "");
    for (let i = 0; i < inputList.length; i++) {
      if (inputList[i].value === "") {
        document.getElementsByClassName("correct")[0].classList.add("blanks");
        setCheckMessage("Fill the blanks");
        break;
      }
      console.log(inputList[i].value.toLowerCase());
      console.log(comparisonWord[i].toLowerCase());
      const inputLetter = inputList[i].value.toLowerCase();
      const comparisonLetter = comparisonWord[i].toLowerCase();
      if (inputLetter !== comparisonLetter) {
        document.getElementsByClassName("correct")[0].classList.add("blanks");
        setCheckMessage("Try Again");
        break;
      }
      document.getElementsByClassName("correct")[0].classList.remove("blanks");

      setCheckMessage("Correct !");
    }
  }

  return (
    <div className="output-area">
      {wordsList !== "" && (
        <button
          className="input-button background-hover"
          onClick={userClickTranslate}
        >
          Translate
        </button>
      )}

      <Discuss
        visible={translating}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperClass="discuss-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />

      <div className="output">{show && outputArea}</div>
      {inputBoxInScreen && (
        <button className="input-button background-hover check" onClick={check}>
          check
        </button>
      )}
      <div className="result">
        <p className="correct"> {checkMessage}</p>
      </div>
    </div>
  );
}

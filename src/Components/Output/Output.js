import "./Output.css";
import React, { useContext } from "react";
import Input from "../Input/Input";
import { Discuss } from "react-loader-spinner";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";
import RefreshIcon from "@mui/icons-material/Refresh";
export default function Output({ wordsList, toLanguage }) {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  const [outputArea, setOutputArea] = React.useState();
  const [checkMessage, setCheckMessage] = React.useState("");
  const [translatedWord, setTranslatedWord] = React.useState();
  const [show, setShow] = React.useState(true);
  const [translating, setTranslating] = React.useState(false);
  const [inputBoxInScreen, setInputBoxInScreen] = React.useState(false);
  async function userClickTranslate() {
    setCheckMessage("");
    setOutputArea(false);
    setInputBoxInScreen(false);
    setTranslating(true);
    const res = await fetch("http://localhost:4000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: wordsList, to: toLanguage }),
    });
    const body = await res.json();
    setTranslatedWord(body.data);
    setOutputArea(<Input word={body.data} />);
    setShow((prev) => {
      return !prev;
    });
    setTimeout(() => {
      setShow((prev) => {
        return !prev;
      });
    }, 200);
    setTranslating(false);
    setInputBoxInScreen(true);
  }

  function check() {
    let inputList = document.getElementsByClassName("input-area");
    let comparisonWord = translatedWord.replaceAll(" ", "");
    console.log(comparisonWord);
    for (let i = 0; i < inputList.length; i++) {
      console.log(inputList[i].value);
      if (inputList[i].value === "") {
        document.getElementsByClassName("correct")[0].classList.add("blanks");
        setCheckMessage(labels.fillTheBlanks);
        break;
      }
      const inputLetter = inputList[i].value.toLowerCase();
      const comparisonLetter = comparisonWord[i].toLowerCase();
      if (inputLetter !== comparisonLetter) {
        document.getElementsByClassName("correct")[0].classList.add("blanks");
        setCheckMessage(labels.incorrect);
        break;
      }
      document.getElementsByClassName("correct")[0].classList.remove("blanks");
      setCheckMessage(labels.correct);
    }
  }

  function tryAgain() {
    setCheckMessage("");
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  }

  return (
    <div className="output-area">
      <button
        disabled={wordsList.length === 0}
        className={
          "input-button background-hover" +
          (wordsList.length === 0 ? " opacity-20" : "")
        }
        onClick={userClickTranslate}
      >
        {labels.translate}
      </button>

      <Discuss
        colors={["#00ffff", "#00ffff", "#00ffff"]}
        visible={translating}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperClass="discuss-wrapper"
      />
<div className=" h-[20%] w-[100%]">
  <div className="output w-[100%] justify-center items-center overflow-y-auto h-[30%]">
        {show && outputArea}
      </div>
      <div className="result">
        <p className="correct"> {checkMessage}</p>
      </div>
</div>
      
      {inputBoxInScreen && (
        <>
          <button
            className="input-button background-hover check"
            onClick={check}
          >
            {labels.check}
          </button>
          <button
            className=" bg-[#00ffff] w-10 h-10 rounded-full m-4 flex justify-center items-center"
            onClick={tryAgain}
          >
            <RefreshIcon />
          </button>
        </>
      )}
    </div>
  );
}

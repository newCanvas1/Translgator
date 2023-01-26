import "./Input.css";
import React from "react";

export default function Input(props) {
  const [boxs, setBoxes] = React.useState([]);

  let word = props.word;
  React.useEffect(() => {
    setBoxes([]);
    console.log("Input Rendered. " + word);
    // for every letter in word
    for (let i = 0; i < word.length; i++) {
      // random number to randomize the position of empty input boxes
      let randomNumber = Math.floor(Math.random() * 10);

      // if letter is a space then make an empty div for it
      if (word[i] === " ") {
        setBoxes((prev) => {
          return [[...prev, <div className="emptyDiv"> </div>]];
        });
      }
      //if letter is actually a letter
      else {
        // if random number is even, then keep the box with its value
        if (randomNumber % 2 === 0) {
          setBoxes((prev) => {
            return [
              [
                ...prev,
                <input
                  type={"text"}
                  value={word[i]}
                  readOnly={true}
                  className="input-area"
                />,
              ],
            ];
          });
        }
        // else make an embty input box (where user can write)
        else {
          setBoxes((prev) => {
            return [[...prev, <input type={"text"} className="input-area" />]];
          });
        }
      }
    }
  }, [props.word]);
  return <div className="output">{boxs}</div>;
}

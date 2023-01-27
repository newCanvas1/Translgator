import "./Input.css";
import React from "react";

export default function Input(props) {
  const [boxs, setBoxes] = React.useState([]);

  function handlePress(event) {
    
    let list = [];
    let elements = document.getElementsByClassName("user-text");
    for (let i = 0; i < elements.length; i++) {
      list.push(elements[i]);
    }
    let index = list.indexOf(event.target);

    for (let i = 0; i < list.length; i++) {
      if (event.keyCode === 8) {
        if (index === 0) {
          list[list.length - 1].focus();
        } else {
          list[index - 1].focus();
        }
      } else {
        if (index === list.length - 1) {
          list[0].focus();
        } else {
          list[index + 1].focus();
        }
      }
    }

    console.log(index);
  }

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
            return [
              [
                ...prev,
                <input
                  type={"text"}
                  onKeyUp={handlePress}
                  className="input-area user-text"
                  maxLength={1}

                />,
              ],
            ];
          });
        }
      }
    }
  }, [word]);
  return <div className="output">{boxs}</div>;
}

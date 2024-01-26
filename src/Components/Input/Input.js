import "./Input.css";
import React from "react";

export default function Input({word}) {
  const [boxs, setBoxes] = React.useState([]);

  function handlePress(event) {
    
    let list = [];
    let elements = document.getElementsByClassName("user-text");
    for (let i = 0; i < elements.length; i++) {
      list.push(elements[i]);
    }
    let index = list.indexOf(event.target);
   // when a user presses a key, the focus is shifted to the next input box
   

    if (event.target.value !== "") {
      if (index < list.length - 1) {
        list[index + 1].focus();
      }
    }
    // user clicks backspace
    if (event.keyCode === 8) {
      // if the input box is not empty, then the focus is not shifted
      if (event.target.value != "") {
        return;
      }
     // if the input box is empty, then focus is shifted to the previous input box

      if (index > 0) {
        if (list[index].value === "") {
          list[index - 1].focus();
          // select the previous input box
          list[index - 1].select();
        }
      }
    }
    




    
  }

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

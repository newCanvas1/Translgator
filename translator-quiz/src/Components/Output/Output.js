import "./Output.css";
import React from "react";
export default function Output(props) {
    let wordsList=props.wordsList.split(" ");
    
console.log("Output Rendered. "+wordsList)
  return (
    <div >
        {wordsList}
    </div>
  );
}

import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

function About(props) {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  return (
    <div className=" p-2">
      <p className=" text-4xl text-center"> {labels.whatIsTranslgatorTitle}</p>
      <p className=" text-xl text-center text-gray-500 ">
       {labels.whatIsTranslgatorDescription}
      </p>
    </div>
  );
}

export default About;

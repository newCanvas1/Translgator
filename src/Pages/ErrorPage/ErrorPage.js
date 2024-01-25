import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

function ErrorPage(props) {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  return (
    <div className=" flex-col text-center">
      <h1 className=" self-center">{labels.pageNotAvailable}</h1>
      <Link to="/">
        <button
          type="button"
          className=" bg-teal-400 p-1 rounded-sm text-white shadow-md"
        >
          <p>{labels.returnHome}</p>
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;

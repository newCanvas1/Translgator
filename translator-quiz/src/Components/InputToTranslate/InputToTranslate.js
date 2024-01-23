import React, { useContext } from "react";
import { getLabels } from "../../functions/getLabels";
import { LanguageContext } from "../../context/LanguageContext";

function InputToTranslate({ userTyping, length }) {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  const maxLength = 30;
  return (
    <div className="flex-1 w-[100%]">
      <input
        type="text"
        className="input text-center"
        placeholder={labels.enterHereToTranslate}
        onChange={userTyping}
        maxLength={maxLength}
      />
      <p className="text-sm opacity-25">
        {length} / {maxLength}
      </p>
    </div>
  );
}

export default InputToTranslate;

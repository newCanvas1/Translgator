import React, { useContext, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { options } from "./languageOptions";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

function LangaugeSelect({ setLanguage, setDidLangChange }) {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  const [defaultOption, setDefaultOption] = useState(options[1]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("to-language");
    if (storedLanguage) {
      setDefaultOption(
        options.find((option) => option.value === storedLanguage)
      );
      setLanguage(storedLanguage);
    } else {
      setLanguage(defaultOption.value);
    }
    // eslint-disable-next-line
  }, []);

  function langChange(value) {
    
    setDidLangChange((prev) => !prev);
    setLanguage(value);
    localStorage.setItem("to-language", value);
  }

  return (
    <div>
      <p>{labels.toLanguage}</p>
      <Select
        className=" bg-teal-400 text-sm text-black text-left"
        options={options}
        values={[defaultOption]}
        onChange={(values) => langChange(values[0].value)}
        placeholder="Select Language"
        wrapperClassName="w-[100%]"
      />
    </div>
  );
}

export default LangaugeSelect;

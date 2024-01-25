import React, { useContext, useEffect } from "react";
import Select from "react-dropdown-select";
import { options } from "./languageOptions";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";
function LangaugeSelect({ setLanguage }) {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  const defaultOption = options[1];
  useEffect(() => {
    setLanguage(defaultOption.value);
  }, []);

  return (
    <div>
      <p>{labels.toLanguage}</p>
      <Select
        className=" bg-teal-400 text-sm text-black text-left"
        options={options}
        values={[defaultOption]}
        onChange={(values) => setLanguage(values[0].value)}
        placeholder="Select Language"
        wrapperClassName="w-[100%]"
      />
    </div>
  );
}

export default LangaugeSelect;

import React, { useEffect } from "react";
import Select from "react-dropdown-select";
import { options } from "./languageOptions";
function LangaugeSelect({ setLanguage }) {
  const defaultOption = options[1];
  useEffect(() => {
    setLanguage(defaultOption.value);
  }, []);

  return (
    <Select
      options={options}
      values={[defaultOption]}
      onChange={(values) => setLanguage(values[0].value)}
      placeholder="Select Language"
      wrapperClassName="w-[100%]"
    />
  );
}

export default LangaugeSelect;

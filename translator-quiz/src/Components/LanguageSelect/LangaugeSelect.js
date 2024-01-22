import React from "react";
import Select from "react-dropdown-select";
import { options } from "./languageOptions";
function LangaugeSelect({ setLanguage }) {
  const defaultOption = options[1];

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

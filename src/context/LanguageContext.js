import React, { createContext, useEffect, useState } from "react";

// Create the LanguageContext
const LanguageContext = createContext();

// Create a LanguageProvider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    setLanguage(browserLanguage);
  }, []);

  // Provide the language state and changeLanguage function to the children components
  return (
    <LanguageContext.Provider value={{ language,setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };

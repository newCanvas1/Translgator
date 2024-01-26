import React, { createContext, useEffect, useState } from "react";

// Create the LanguageContext
const LanguageContext = createContext();

// Create a LanguageProvider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    // Get the language from the browser localStorage
    const localStorageLanguage = localStorage.getItem("language");
    if (localStorageLanguage) {
      setLanguage(localStorageLanguage);
    } else {
      // If there is no language in the localStorage, set the language to the browser language
      const browserLanguage = navigator.language.split("-")[0];
      setLanguage(browserLanguage);
    }
    // eslint-disable-next-line
  }, []);

  // Provide the language state and changeLanguage function to the children components
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };

import React, { useContext } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

function Contact(props) {
    const {language} = useContext(LanguageContext);
    const labels = getLabels(language);
  return (
    <div>
      <p className=" text-center text-3xl">{labels.contact}</p>
      <a
        href="https://www.linkedin.com/in/bandar-al-jelwi-5ba4b0275/"
        target="_blank"
        rel="noreferrer" 
      >
        <div className=" text-center mt-10">
          <p>Bandar Aljelwi | بندر الجلوي</p>
          <LinkedInIcon fontSize="large" style={{color:"#0077B5"}} />
        </div>
      </a>
    </div>
  );
}

export default Contact;

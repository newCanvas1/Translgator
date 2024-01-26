import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { getLabels } from "../../functions/getLabels";
import { LanguageContext } from "../../context/LanguageContext";

function TechStack(props) {
  const { language } = useContext(LanguageContext);
  const labels = getLabels(language);
  const tech = [
    "React",
    "TailwindCSS",
    "Material UI",
    "Google Translate API",
    "Node.js",
  ];

  return (
    <div className="mt-3 ">
      <p className=" text-2xl text-center ">{labels.techStack}</p>
      <Grid
        className=" text-center self-center"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {tech.map((item) => (
          <Grid item xs={12} >
            <div className=" p-2 text-gray-500">{item}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TechStack;

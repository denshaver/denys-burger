import React from "react";
import { useState } from "react";
import "./LngbutCoosenStyling.css";
export const LngButChoose = ({ i18n  }) => {
  const[lng, setLng] = useState("en");
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    chooseLng();
  };
  const chooseLng = () => {
     setLng((prev) => !prev);
  }

  return (
    <div className="wrapper lng-toggle">

      <div className="lng-conteiner">
        <h2 className="lng-title">Select a language</h2>
      <button className={lng?"lng-en a":"lng-en" }onClick={() => handleLanguageChange("en")
      
    }>
       En
      </button>
      </div>
      <div className="lng-conteiner">
      <h2 className="lng-title">Виберіть мову</h2>
      <button className={!lng?"lng-ua a":"lng-ua"} onClick={() => handleLanguageChange("uk")}>
        Укр
      </button>
      </div>

     
    </div>
  );
};

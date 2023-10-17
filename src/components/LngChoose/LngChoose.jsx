import React from "react";
import "./LngChooseStyle.css"
export const LngChoose = ({ i18n, chooseLng }) => {
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    chooseLng();
  };

  return (
    <div className="lng-toggle">

      <div className="lng-conteiner">
        <h2 className="lng-title">Select a language</h2>
      <button className="lng-en" onClick={() => handleLanguageChange("en")}>
        En
      </button>
      </div>
      <div className="lng-conteiner">
      <h2 className="lng-title">Виберіть мову</h2>
      <button className="lng-ua" onClick={() => handleLanguageChange("uk")}>
        Укр
      </button>
      </div>

     
    </div>
  );
};

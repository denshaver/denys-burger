import React, { useState } from "react";
import "./LngChoice.css";
import { useTranslation } from "react-i18next";

export const LngChoice = ({ choiceLanguage }) => {
  const [lngEn, setLngEn] = useState("en");
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    choiceLanguage();
    setLngEn((prev) => !prev);
  };

  return (
    <div id="lng-choice">
      <div className="lng-t">
        <h2>Choice language</h2>
        <h2>Виберіть мову</h2>
      </div>
      <div className="lng-toggle">
        <button
          className="lng-b lng-b-en"
          onClick={() => handleLanguageChange("en")}
        >
          En
        </button>
        <button
          className="lng-b lng-b-uk"
          onClick={() => handleLanguageChange("uk")}
        >
          Укр
        </button>
      </div>
    </div>
  );
};

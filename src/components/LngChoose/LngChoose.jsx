import React from "react";

export const LngChoose = ({ i18n, chooseLng }) => {
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    chooseLng();
  };

  return (
    <div className="lng-toggle">
      <button className="lng-b" onClick={() => handleLanguageChange("en")}>
        En
      </button>
      <button className="lng-b" onClick={() => handleLanguageChange("uk")}>
        Укр
      </button>
    </div>
  );
};

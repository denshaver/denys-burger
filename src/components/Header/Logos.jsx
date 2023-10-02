import React from "react";
import "./headerStyling.css";
import ButtonsLang from "./LanguageToggle"

const Logos = ({t}) => {
  return (
    <div className="burger-logo-header">
      
      <div className="burger-circle"></div>
       <div className="lng">
       <ButtonsLang />
       </div>
      <div className="logo-burger-img">
        <img src="./img/logo/h1-text.svg" alt="" />
        <img src="./img/logo/h1.svg" alt="" />
      </div>
      <div className="burger-logo">
        <img src="./img/logo/logo-burger.svg" alt="" />
        <div className="burger-logo-info">
       
          <h1>
            Tasty burgers <br /> <span>for you!</span>
          </h1>
          <p>
          {t("header.delivery")} <b>$100</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logos;

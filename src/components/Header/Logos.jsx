import React from "react";
import "./headerStyling.css";

const Logos = ({ t }) => {
  return (
    <>
      <div className="burger-circle"></div>

      <div className="wrapper wrapper-header">

        <div className="logo-burger-img">
          <img src="./img/logo/h1-text.svg" alt="" />
          <img src="./img/logo/h1.svg" alt="" />
        </div>
        <div className="burger-logo">
          <img src="./img/logo/logo-burger.svg" alt="" />
          <div className="burger-logo-info">
            <h4>
            {t("logos.info-h4")} <br /> <span>{t("logos.info-span")} </span>
            </h4>
            <p>
              {t("header.delivery")} <span>$100</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logos;

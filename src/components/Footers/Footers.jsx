import React from "react";
import "./footersStyling.css";

export const Footers = () => {
  return (
    <div className="footers">
      <div className="logo">
        <div className="logo-img">
          <img src="img/logo/f1-text.svg" alt="" />
          <img src="img/logo/f1.svg" alt="" />
        </div>

        <div className="design">
          <h3>
            @Skadi ev,2023 <br />
            <span>
              Design: <b>DenysVysotskyi & co.</b>
            </span>
          </h3>
        </div>
      </div>

      <div className="contact">
        <h2>Phone for call</h2>
        <br />
        <p>
          <img src="img/Call.svg" alt="" />
          +38 (050) 000-00-00
        </p>
      </div>

      <div className="social">
        <h2>Social networks</h2>
        <br />
     <div className="social-img">
     <a href="#">
          <img src="img/logo/t.svg" alt="" />
        </a>
        <a href="#">
          <img src="img/logo/t.svg" alt="" />
        </a>
     </div>
      </div>
    </div>
  );
};

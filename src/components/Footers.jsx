import React from "react";

export const Footers = () => {
  return (
    <div className="footers">
      <div className="logo">
        <div className="logo-img">
          <img src="img/footer-logo-text.png" alt="" />
          <img src="img/footer-logo.png" alt="" />
        </div>

        <div className="design">
          <h3>
            @YouMeal,2023 <br />
            <span>
              Design: <b>DenysVysotskyi</b>
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
          <img src="img/tel.png" alt="" />
        </a>
        <a href="#">
          <img src="img/tel.png" alt="" />
        </a>
     </div>
      </div>
    </div>
  );
};

import React from "react";
import "./footersStyling.css";

export const Footers = ({ t }) => {
  return (
    <footer>
      <div className="wrapper footers">
        <div className="logo">
          <div className="logo-img">
            <img src="img/logo/f1-text.svg" alt="" />
            <img src="img/logo/f1.svg" alt="" />
          </div>
        </div>

        <div className="contacts">
          <div className="contact">
            <p>{t("footer.phone")}</p>
            <div className="contact-number">
              <img src="img/Call.svg" alt="" />
              <span> +38 (050) 000-00-00</span>
            </div>
          </div>
          <div className="contact">
            <p>{t("footer.social")}</p>
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
      </div>
      <div className="wrapper design">
        <p>@Skadi ev,2023</p>
        <p>
          {t("footer.designSpan")}
          DenysVysotskyi & co.
        </p>
      </div>
    </footer>
  );
};

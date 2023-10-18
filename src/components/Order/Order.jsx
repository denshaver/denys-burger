import React, { useState } from "react";

import "./orderStyling.css";

export const Order = ({ t, isOrder }) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [addOrderTrue, setAddOrderTrue] = useState(false);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const closeOrder = () => {
    isOrder((prev) => !prev);
  };
  const addOrder = () => {
    setAddOrderTrue((prev) => !prev);
  };

  return addOrderTrue ? (
    <div className="order-conteiner">
      <div className="order">
        <div className="order-img">
          <img src="./img/order.svg" alt="" />
        </div>
        <div className="order-form">
          <h2>{t("order.title")}</h2>
          <button className="close-btn" onClick={() => closeOrder()}>
            <img src="img/close.svg" alt="" />
          </button>
          <div className="order-text">
            <h2>{t("order.way")}</h2>
            <img src="/img/logo/free-icon-delivery-2362252.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="order-conteiner">
      <div className="order">
        <div className="order-img">
          <img src="./img/order.svg" alt="" />
        </div>
        <div className="order-form">
          <h2>{t("order.title")}</h2>
          <button className="close-btn" onClick={() => closeOrder()}>
            <img src="img/close.svg" alt="" />
          </button>
          <form action="" className="form-info">
            <input type="text" placeholder={t("order.name")} />

            <input type="tel" name="" id="" placeholder={t("order.phone")} />

            <div className="radio-btn">
              <label className="custom-radio">
                <input
                  type="radio"
                  id="option1"
                  name="radioGroup"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <span className="custom-radio-checkmark"></span>
                {t("order.Self-delivery")}
              </label>

              <label className="custom-radio">
                <input
                  type="radio"
                  id="option2"
                  name="radioGroup"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <span className="custom-radio-checkmark"></span>
                {t("order.Delivery")}
              </label>
            </div>
            <div className="input-adress">
              <input type="text" placeholder={t("order.Street")} />

              <div className="input-adress-form">
                <input type="text" placeholder={t("order.On-top-of")} />

                <input type="text" placeholder={t("order.Entryphone")} />
              </div>
            </div>
          </form>
          <button onClick={() => addOrder()}>{t("order.order")}</button>
        </div>
      </div>
    </div>
  );
};

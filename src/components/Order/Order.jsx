import React, { useState, useEffect } from "react";

import "./orderStyling.css";

export const Order = ({ t, isOrder }) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [addOrderTrue, setAddOrderTrue] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: {
      street: "",
      onTopOf: "",
      entryphone: "",
    },
  });

  useEffect(() => {
    // Завантаження даних з localStorage при монтажі компонента
    const savedFormDataJSON = localStorage.getItem("orderFormData");

    if (savedFormDataJSON) {
      const savedFormData = JSON.parse(savedFormDataJSON);
      setFormData(savedFormData);
    }
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const closeOrder = () => {
    isOrder((prev) => !prev);
  };

  const addOrder = () => {
    setAddOrderTrue((prev) => !prev);

    // Збереження даних у localStorage
    localStorage.setItem("orderFormData", JSON.stringify(formData));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
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
            <h2>your order is on the way</h2>
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
            <input
              type="text"
              name="name"
              placeholder={t("order.name")}
              value={formData.name}
              onChange={handleInputChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder={t("order.phone")}
              value={formData.phone}
              onChange={handleInputChange}
            />

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
              <input
                type="text"
                name="street"
                placeholder={t("order.Street")}
                value={formData.address.street}
                onChange={handleAddressChange}
              />

              <div className="input-adress-form">
                <input
                  type="text"
                  name="onTopOf"
                  placeholder={t("order.On-top-of")}
                  value={formData.address.onTopOf}
                  onChange={handleAddressChange}
                />

                <input
                  type="text"
                  name="entryphone"
                  placeholder={t("order.Entryphone")}
                  value={formData.address.entryphone}
                  onChange={handleAddressChange}
                />
              </div>
            </div>
          </form>
          <button onClick={() => addOrder()}>{t("order.order")}</button>
        </div>
      </div>
    </div>
  );
};

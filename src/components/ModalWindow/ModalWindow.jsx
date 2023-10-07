import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { products } from "../../data/products";
import { closeModal } from "../../features/modal/modalSlice";
import { addProduct } from "../../features/cart/cartSlice";
import { useState } from "react";
import "./ModalWindowStyling.css";

export const ModalWindow = ({ t }) => {
  const dispatch = useDispatch();

  const productId = useSelector((state) => state.modal.productId);

  const neededProduct = products.find((product) => product.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (quantity < 1) {
    dispatch(closeModal());
    setQuantity(0);
  }

  if (!neededProduct) {
    return (
      <div className="modal-container">
        <div className="modal">
          <h1>{t("modal.error")}</h1>
          <h2>{t("modal.errorInfo")}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <h1>{neededProduct.title}</h1>

        <div className="modal-info">
          <img src={neededProduct.img} alt="" />

          <div className="modal-subinfo">
            <p>{t("modal.text")} </p>
            <div className="modal-ingredients">
              <h3>{t("modal.ingredients")}</h3>
              <ul>
                <li>{t("modal.ingredientsList1")}</li>
                <li>{t("modal.ingredientsList2")}</li>
                <li>{t("modal.ingredientsList3")}</li>
                <li>{t("modal.ingredientsList4")}</li>
                <li>{t("modal.ingredientsList5")}</li>
              </ul>
              <span>{neededProduct.weight}g</span>
            </div>
          </div>
        </div>

        <div className="modal-button">
          <div className="modal-button">
            <button
              onClick={() => {
                dispatch(
                  addProduct({
                    productId,
                    amount: quantity,
                    price: neededProduct.price,
                  })
                );
                dispatch(closeModal());
              }}
            >
              {t("products.button")}
            </button>

            <div className="modal-count">
              <button
                onClick={() => {
                  if (quantity <= 1) return;
                  setQuantity((prev) => prev - 1);
                }}
              >
                -
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
          </div>
          <p>{neededProduct.price * quantity}$</p>
        </div>
      </div>
    </div>
  );
};

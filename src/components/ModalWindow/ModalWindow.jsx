import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { products } from "../../data/products";
import { closeModal } from "../../features/modal/modalSlice";
import { addItem } from "../../features/cart/cartSlice";
import { useState } from "react";
import "./ModalWindowStyling.css";

export const ModalWindow = ({ t }) => {
  const dispatch = useDispatch();

  const productId = useSelector((state) => state.modal.productId);
  const cart = useSelector((state) => state.cart);
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
        <div className="title-product__card">
          <h2>{neededProduct.title}</h2>
          <button>
            <img src="img/close.svg" alt="" />
          </button>
        </div>

        <div className="modal-info">
          <img src={neededProduct.img} alt="" />

          <div className="modal-subinfo">
            <p className="product-descr">{t("modal.text")} </p>
            <div className="modal-ingredients">
              <p>{t("modal.ingredients")}</p>
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

        <div className="modal-buttons">
          <div className="modal-button">
            <button
              onClick={() => {
                dispatch(
                  addItem({
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
              <button onClick={() => setQuantity((prev) => prev - 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
          </div>
          <span className="price-product">{neededProduct.price * quantity}$</span>
        </div>
      </div>
    </div>
  );
};

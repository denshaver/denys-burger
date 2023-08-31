import React from "react";
import { useSelector } from "react-redux";
import { products } from "../data/products";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <section className="cart-container">
      <div className="cart">
        <div className="cart-title">
          <h1>Your order:</h1>
          <span className="cart-count">{cart.amount}</span>
        </div>
        <div className="cart-items">
          {cart.cartItems.map((cartItem) => {
            const neededItem = products.find(
              (product) => product.id === cartItem.productId
            );
            return (
              <div className="cart-item" key={neededItem.productId}>
                <img src={neededItem.img} alt="" />
                <h3>{neededItem.title}</h3>
                <h4>{neededItem.price}$</h4>
                <div className="cart-item-count">
                  <button>-</button>
                  <span>{cartItem.amount}</span>
                  <button>+</button>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="cart-total">
          Total: <b>{cart.total}$</b>
        </h2>
      </div>
    </section>
  );
};

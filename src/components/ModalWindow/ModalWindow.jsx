import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../data/products";
import { closeModal } from "../../features/modal/modalSlice";
import { addQuantity, increaseQuantity,addItem } from "../../features/cart/cartSlice";
import "./ModalWindowStyling.css";

export const ModalWindow = () => {
  const dispatch = useDispatch();
  
  const productId = useSelector((state) => state.modal.productId);
  const cart = useSelector((state) => state.cart);
  const neededProduct = products.find((product) => product.id === productId);
  

  
  if (cart.quantity < 0) {
    dispatch(closeModal());
  }

  if (!neededProduct) {
    return (
      <div className="modal-container">
        <div className="modal">
          <h1>Error occured</h1>
          <h2>No product found</h2>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus enim aspernatur fugiat distinctio nihil esse totam
              optio repudiandae, maiores dolorum omnis dolore ipsa odit et
              sapiente rem architecto accusantium temporibus?
            </p>
            <div className="modal-ingredients">
              <h3>Ingredients:</h3>
              <ul>
                <li>Wheat bun</li>
                <li>Beef cutlet</li>
                <li>Red onion</li>
                <li>Lettuce leaves</li>
                <li>Mustard sauce</li>
              </ul>
              <span>{neededProduct.weight}g</span>
            </div>
          </div>
        </div>

        <div className="modal-button">
          <div className="modal-button">
            <button
              onClick={() => {
                dispatch(addItem({ productId, amount: cart.quantity}));
                dispatch(closeModal());
              }}
            >
              Add to cart
            </button>

            <div className="modal-count">
              <button onClick={() => dispatch(increaseQuantity(cart.quantity - 1))}>-</button>

              <span>{cart.quantity}</span>

              <button onClick={() => dispatch(addQuantity(cart.quantity + 1))}>+</button>
            </div>
          </div>
          <p>{neededProduct.price * cart.quantity}$</p>
        </div>
      </div>
    </div>
  );
};
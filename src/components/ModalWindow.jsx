import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../data/products";
import { closeModal } from "../features/modal/modalSlice";
import { addItem } from "../features/cart/cartSlice";

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.modal.productId);
  const neededProduct = products.find((product) => product.id === productId);

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
        <img src={neededProduct.img} alt="" />
        <div className="modal-info">
          <h1>{neededProduct.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            enim aspernatur fugiat distinctio nihil esse totam optio
            repudiandae, maiores dolorum omnis dolore ipsa odit et sapiente rem
            architecto accusantium temporibus?
          </p>
          <button
            onClick={() => {
              dispatch(addItem({ productId, amount: 1 }));
              dispatch(closeModal());
            }}
          >
            Add to cart
          </button>
          <button onClick={() => dispatch(closeModal())}>Close</button>
        </div>
      </div>
    </div>
  );
};

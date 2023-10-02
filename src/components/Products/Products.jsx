import React from "react";
import { products } from "../../data/products";
import { openModal } from "../../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../data/categories";
import "./productStyling.css";




export const Products = ({ category, t }) => {
  const dispatch = useDispatch();
 
  return (
    
    <section className="products-container">
      <h1>{categories.find((cat) => cat.id === category).title}</h1>
      <div className="products">
        {products
          .filter((product) => product.categoryId === category)
          .map((product) => {
            return (
              <div className="product-item" key={product.id}>
                <img src={product.img} alt="" />
                <h2>{product.price}$</h2>
                <h3>{product.title}</h3>
                <span>{product.weight}g</span>
                <button onClick={() => dispatch(openModal(product.id))}>
                  {t("products.button")}
                </button>
              </div>
            );
          })}
      </div>
    </section>

  );
};

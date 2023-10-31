import React from "react";
import { products } from "../../data/products";
import { openModal } from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { categories } from "../../data/categories";
import "./productStyling.css";

export const Products = ({ category, t }) => {
  const dispatch = useDispatch();

  return (
    <section className="products-container">
      <h2 className="choosen-category__title">
        {categories.find((cat) => cat.id === category).title}
      </h2>
      <div className="products">
        {products
          .filter((product) => product.categoryId === category)
          .map((product) => {
            return (
              <div className="product-item" key={product.id}>
                <div className="product-item-img">
                  <img src={product.img} alt="" />
                </div>
                <div className="product-item-info">
                  <span className="product-price">{product.price}$</span>
                  <p className="product-desc">{product.title}</p>
                  <span className="product-weight">{product.weight}g</span>
                </div>
                <button className="add-product"onClick={() => dispatch(openModal(product.id))}>
                  {t("products.button")}
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
};

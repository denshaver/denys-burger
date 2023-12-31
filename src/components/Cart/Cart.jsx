import { useSelector, useDispatch } from "react-redux";
import { products } from "../../data/products";
import {
  calcCartInfo,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
} from "../../features/cart/cartSlice";
import "./cartStyling.css";
import { useEffect, useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const Cart = ({ t }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const hasItemsInCart = cart.cartItems.length > 0;

  useEffect(() => {
    dispatch(calcCartInfo());
  }, [cart]);

  const [isCartFolded, setIsCartFolded] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const screenWidth = useWindowWidth();

  useEffect(() => {
    if (screenWidth > 767) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [screenWidth]);

  const desktopLayout =
    !hasItemsInCart || cart.quantity < 1 ? (
      <div className="cart">
        <div className="cart-title">
          <div className="cart-count">
            <h3>{t("cart.empty")}</h3>
            <button>{cart.quantity}</button>
          </div>
          <p>{t("cart.emptySpan")}</p>
        </div>
      </div>
    ) : (
      <div className="cart">
        <div className="cart-title">
          <div className="cart-count">
            <h3>{t("cart.order")}</h3>
            <button>{cart.quantity}</button>
          </div>
        </div>

        <div className="cart-items" key={products.id}>
          {cart.cartItems.map((cartItem) => {
            const neededItem = products.find(
              (product) => product.id === cartItem.productId
            );

            return cart.quantity !== 0 ? (
              <div className="cart-item" key={neededItem.productId}>
                <div className="cart-item__info">
                  <img src={neededItem.img} alt="" />
                  <div className="item-info__block">
                    <h4 className="item-title">{neededItem.title}</h4>
                    <span className="weight">{neededItem.weight}g</span>
                    <p className="price">{neededItem.price}$</p>
                  </div>
                </div>
                <div className="cart-item__count">
                  <button
                    onClick={() => {
                      if (cartItem.amount <= 1)
                        dispatch(deleteProduct(cartItem.productId));
                      dispatch(decreaseProduct(cartItem.productId));
                    }}
                  >
                    -
                  </button>

                  <span>{cartItem.amount}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseProduct(cartItem.productId))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ) : null;
          })}
          <div className="cart-total">
            <div className="total-info">
              <p>{t("cart.total")}</p>
              <p>{cart.total} $</p>
            </div>
            <button>{t("cart.orderBut")}</button>
            <div className="cart-delivery">
              <p>
                <img src="/img/logo/free-icon-delivery-2362252.svg" alt="" />
                {t("cart.FreeShipping")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  const mobileLayout =
    !hasItemsInCart || cart.quantity < 1 ? (
      <div className="cart">
        <div className="cart-title">
          <div className="cart-count">
            <h3>{t("cart.empty")}</h3>
            <button>{cart.quantity}</button>
          </div>
        </div>
      </div>
    ) : (
      <div className="cart">
        <div
          className="cart-title"
          onClick={() => {
            if (!isCartFolded) setIsCartFolded(true);
          }}
        >
          <div className="cart-count">
            <h3>{t("cart.order")}</h3>
            <button>{cart.quantity}</button>
          </div>
        </div>

        <div
          className={isCartFolded ? "cart-items" : "cart-items hidden"}
          key={products.id}
        >
          {cart.cartItems.map((cartItem) => {
            const neededItem = products.find(
              (product) => product.id === cartItem.productId
            );

            return (
              <div className="cart-item" key={neededItem.productId}>
                <div className="cart-item__info">
                  <img src={neededItem.img} alt="" />
                  <div className="item-info__block">
                    <h4 className="item-title">{neededItem.title}</h4>
                    <span className="weight">{neededItem.weight}g</span>
                    <p className="price">{neededItem.price}$</p>
                  </div>
                </div>
                <div className="cart-item__count">
                  <button
                    onClick={() => {
                      if (cartItem.amount <= 1)
                        dispatch(deleteProduct(cartItem.productId));
                      dispatch(decreaseProduct(cartItem.productId));
                    }}
                  >
                    -
                  </button>

                  <span>{cartItem.amount}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseProduct(cartItem.productId))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}

          <div className="cart-total">
            <div className="total-info">
              <p>{t("cart.total")}</p>
              <p>{cart.total} $</p>
            </div>
            <button>{t("cart.orderBut")}</button>
            <div className="cart-delivery">
              <p>
                <img src="/img/logo/free-icon-delivery-2362252.svg" alt="" />
                {t("cart.FreeShipping")}
              </p>
              <span onClick={() => setIsCartFolded(false)}>Fold</span>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <section className="cart-container">
      {isMobile ? mobileLayout : desktopLayout}
    </section>
  );
};

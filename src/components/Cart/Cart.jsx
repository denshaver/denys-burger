import { useSelector, useDispatch } from "react-redux";
import { products } from "../../data/products";
import {
  calcCartInfo,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
  loadCart,
} from "../../features/cart/cartSlice";
import "./cartStyling.css";
import { useEffect,useState } from "react";
import { Order } from "../Order/Order";

export const Cart = ({ t }) => {
  const dispatch = useDispatch();
  const [order, isOrder] = useState(false);
  const cart = useSelector((state) => state.cart);
  const hasItemsInCart = cart.cartItems.length > 0;
  const hehdlOrder = () => {
    isOrder((prev) => !prev);
  };
  // useEffect(() => {
  //   dispatch(calcCartInfo());
  // }, [cart]);

  useEffect(() => {
    dispatch(calcCartInfo(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    // dispatch(calcCartInfo());
    const loadedCart = loadCart();
    if (loadedCart) {
      dispatch(calcCartInfo(loadedCart));
    }
  }, [cart, dispatch]);

  return (
    <section className="cart-container">
      {!hasItemsInCart || cart.quantity < 1 ? (
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
          {order && <Order t={t} isOrder={isOrder} />}
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
          </div>
          <div className="cart-total">
            <div className="total-info">
              <p>{t("cart.total")}</p>
              <p>{cart.total} $</p>
            </div>
            <button onClick={() => hehdlOrder()}>{t("cart.orderBut")}</button>
            <div className="cart-delivery">
              <img src="/img/logo/free-icon-delivery-2362252.svg" alt="" />

              <p>{t("cart.FreeShipping")}</p>
              {/* <span>Fold</span> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

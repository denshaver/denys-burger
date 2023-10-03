import { useSelector, useDispatch } from "react-redux";
import { products } from "../../data/products";
import {
  calcCartInfo,
  increaseProduct,
  decreaseProduct,
  deletCartItem,
} from "../../features/cart/cartSlice";
import "./cartStyling.css";
import { useEffect } from "react";

export const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const hasItemsInCart = cart.cartItems.length > 0;

  useEffect(() => {
    dispatch(calcCartInfo());
  }, [cart]);

  return (
    <section className="cart-container">
      {!hasItemsInCart || cart.quantity < 1 ? (
        <div className="cart">
          <div className="cart-title">
            <div className="cart-count">
              <h3>Your order:</h3>
              <button>{cart.quantity}</button>
            </div>
            <p>lace your order...</p>
          </div>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-title">
            <div className="cart-count">
              <h3>Your order:</h3>
              <button>{cart.quantity}</button>
            </div>
          </div>

          <div className="cart-items" key={products.id}>
            {cart.cartItems.map((cartItem) => {
              const neededItem = products.find(
                (product) => product.id === cartItem.productId
              );

              return cart.quantity !== 0 ? (
                <div className="cart-item" key={!neededItem.productId}>
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
                      onClick={() =>
                        dispatch(increaseQuantity(cart.quantity - 1))
                      }
                    >
                      -
                    </button>

                    <span>{cart.quantity}</span>

                    <button
                      onClick={() => dispatch(addQuantity(cart.quantity + 1))}
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
              <p>Total</p>
              <p>{cart.total} $</p>
            </div>
            <button>Place an order</button>
            <div className="cart-delivery">
              <img src="/img/logo/free-icon-delivery-2362252.svg" alt="" />

              <p>Free shipping</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

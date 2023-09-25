import { useSelector, useDispatch } from "react-redux";
import { products } from "../../data/products";
import {
  addQuantity,
  deletCartItem,
  increaseQuantity,
} from "../../features/cart/cartSlice";
import "./cartStyling.css";

export const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const hasItemsInCart = cart.cartItems.length > 0;

  return (
    <section className="cart-container">
      <div className="cart">
        {!hasItemsInCart || cart.quantity < 1 ? (
          <div className="cart-title">
            <p className="cart-empty">
              Your cart is empty. <br /> <span>place your order...</span>
            </p>
          </div>
        ) : (
          <div className="cart-title">
            <h1>Your order:</h1>
            {/* <span>{cart.cartItems.length}</span> */}
            <span className="cart-count">{cart.quantity}</span>
          </div>
        )}

        <div className="cart-items" key={products.id}>
          {cart.cartItems.map((cartItem) => {
            const neededItem = products.find(
              (product) => product.id === cartItem.productId
            );

            return cart.quantity !== 0 ? (
              <div className="cart-item" key={!neededItem.productId}>
                {/* photo */}
                <img src={neededItem.img} alt="" />
                {/* info */}
                <div className="cart-item-info">
                  <div className="cart-item-info-title">
                    <h3>{neededItem.title}</h3>
                    <span>{neededItem.weight}g</span>
                  </div>
                  <h4>{neededItem.price}$</h4>
                </div>
                {/* button,count */}
                <div className="cart-item-count">
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
                <br />
              </div>
            ) : null;
          })}
        </div>
        {/* total */}
        <div className="total-conteiner">
          <h2 className="cart-total">
            Total: <b>{cart.total}$</b>
          </h2>
        </div>
      </div>
    </section>
  );
};

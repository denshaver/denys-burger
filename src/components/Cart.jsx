
import { useSelector } from "react-redux";
import { products } from "../data/products";
import {
  addQuantity,
  deletCartItem,
  increaseQuantity,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const Cart = () => {
  const dispatch = useDispatch();
  // const productId = useSelector((state) => state.modal.productId);
  // const neededProduct = products.find((product) => product.id === productId);
  const cart = useSelector((state) => state.cart);
  if (cart.quantity < 1) {
    dispatch(deletCartItem());
  }
  console.log(cart.quantity);

  return (
    <section className="cart-container">
      <div className="cart">
        <div className="cart-title">
          <h1>Your order:</h1>
          {/* <span>{cart.cartItems.length}</span> */}
          <span className="cart-count">{cart.amount}</span>
        </div>

        <div className="cart-items" key={cart.cartItems}>
          {cart.cartItems.map((cartItem) => {
            const neededItem = products.find(
              (product) => product.id === cartItem.productId
            );

            return (
              <div className="cart-item" key={neededItem.productId}>
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
                {/* total */}
                <div className="total-conteiner">
                  <h2 className="cart-total">
                    Total: <b>{neededItem.price * cart.quantity}$</b>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

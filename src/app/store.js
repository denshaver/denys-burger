import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal/modalSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    
  },
});

export default store;

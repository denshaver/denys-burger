import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

// { productId = "", amount = 2 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },

    deletCartItem: (state, action) => {
      const deletedItem = state.cartItems.find(
        (item) => item.productId === action.payload
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
    },

    increaseProduct: (state, action) => {
      const neededProduct = state.cartItems.find(
        (product) => product.productId === action.payload
      );
      neededProduct.amount += 1;
    },

    decreaseProduct: (state, action) => {
      const neededProduct = state.cartItems.find(
        (product) => product.productId === action.payload
      );
      neededProduct.amount -= 1;
    },

    calcCartInfo: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.amount;
        quantity += item.amount;
      });
      state.total = total;
      state.quantity = quantity;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deletCartItem,
  calcCartInfo,
  increaseProduct,
  decreaseProduct,
} = cartSlice.actions;

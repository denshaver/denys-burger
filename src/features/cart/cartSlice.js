import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newItem = action.payload;
      const oldItem = state.cartItems.find(
        (item) => item.productId === newItem.productId
      );
      if (oldItem) {
        oldItem.amount += newItem.amount;
      } else {
        state.cartItems.push(newItem);
      }
    },

    deleteProduct: (state, action) => {
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
  addProduct,
  deleteProduct,
  calcCartInfo,
  increaseProduct,
  decreaseProduct,
} = cartSlice.actions;

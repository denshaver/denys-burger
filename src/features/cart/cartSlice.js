import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

// { productId: "", amount: 2 }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    increaseProduct: (state, action) => {
      const neededProduct = state.cartItems.find(
        (product) => product.id === action.payload
      );
      neededProduct.amount += 1;
    },
    decreaseProduct: (state, action) => {
      const neededProduct = state.cartItems.find(
        (product) => product.id === action.payload
      );
      neededProduct.amount -= 1;
    },
    calcCartInfo: (state, action) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.price;
        quantity += item.quantity * item.amount;
      });
      state.total = total;
      state.quantity = quantity;
    },
    deletCartItem: (state) => {
      state.cartItems = [];
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity:1,
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
    addQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    increaseQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    deletCartItem: (state, action) => {
      return state.cartItems.filter(
        (item) => item.productId === action.payload
      );
    }
  },
});

export default cartSlice.reducer;
export const { addItem, addQuantity, increaseQuantity, deletCartItem } = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};
// { productId = "", amount = 2 };
const groupCartItemsById = (cartItems) => {
  const groupedCartItems = [];

  cartItems.forEach((cartItem) => {
    const existingItem = groupedCartItems.find(
      (item) => item.productId === cartItem.productId
    );

    if (existingItem) {
      existingItem.amount += 1;
    } else {
      groupedCartItems.push({ ...cartItem, quantity: 1 });
    }
  });
  return groupedCartItems;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   
      addAndGroupItem: (state, action) => {
        const newItem = action.payload;
        state.cartItems.push(newItem);
        state.cartItems = groupCartItemsById(state.cartItems);
      },
      
    deletCartItem: (state, action) => {
      const items = state.cartItems.find(
        (item) => item.productId);
      const deletedItem = items === action.payload
        ? items : action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== deletedItem.productId
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
   addAndGroupItem,
   deletCartItem,
  calcCartInfo,
  increaseProduct,
  decreaseProduct,
} = cartSlice.actions;

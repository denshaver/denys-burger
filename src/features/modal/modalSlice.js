import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  productId: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.productId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.productId = "";
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;

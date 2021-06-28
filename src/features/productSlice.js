import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
  },
  reducers: {
    add: (state, action) => {
      state.product = action.payload;
    },
    remove: (state) => {
      state.product = null;
    },
  },  
});

export const { add, remove } = productSlice.actions;

export const selectProduct = (state) => state.product.product;

export default productSlice.reducer;

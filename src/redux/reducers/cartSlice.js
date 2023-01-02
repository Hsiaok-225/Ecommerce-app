import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if already in state then quantity + 1, else add product to cart
      const existProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existProduct) {
        existProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      // state.products = state.products.filter((product) => {
      //   if (product.id === action.payload.id) {
      //     return {
      //       ...product,
      //       quantity: (product.quantity -= action.payload.quantity),
      //     };
      //   }
      //   return product;
      // });
    },
    resetCart: (state, action) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

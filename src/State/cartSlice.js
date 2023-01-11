import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  loading: false,
  error: null,
  coupons: [
    { text: "alex10", value: 10 },
    { text: "alex20", value: 20 },
    { text: "alex30", value: 30 },
    { text: "alex40", value: 40 },
    { text: "alex50", value: 50 },
    { text: "ahmed", value: 100 },
    { text: "zizo", value: 60 },
    { text: "potato", value: 90 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      /*
       * get the same book
       * if exist update the quantity
       * if not add the new book
       */
      let existBook = state.cart.find((item) => item.id === action.payload.id);
      if (existBook) {
        existBook.quantity += action.payload.quantity;
      } else {
        existBook = action.payload;
      }
      let CART = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = [...CART, existBook];
    },
    updateCart: (state, action) => {
      state.cart = action.payload
    }
  },
});

export const { addToCart,updateCart } = cartSlice.actions;
export default cartSlice.reducer;

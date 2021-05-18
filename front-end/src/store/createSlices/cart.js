import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  products: [],
  totalPrice: 0,
};

const cart = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {
    addItem: (state, action) => {
      const id = action.payload.id;
      const existProduct = state.products.find((product) => product.id === id);
      if (existProduct) {
        const existProductIndex = state.products.indexOf(existProduct);
        state.products[existProductIndex].qty = action.payload.qty;
        state.totalPrice = state.products.reduce(
          (acc, product) => acc + product.price * product.qty,
          0
        );
      } else {
        state.products.push({
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
          ratings: action.payload.ratings,
          qty: action.payload.qty,
          numStock: action.payload.numStock,
          id: action.payload.id,
        });
        (state.totalPrice += action.payload.price * action.payload.qty).toFixed(
          2
        );
      }
    },
    deleteItem: (state, action) => {
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = newProducts;
      state.totalPrice = newProducts.reduce(
        (acc, product) => acc + product.price * product.qty,
        0
      );
    },
    emptyCart: (state, action) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export default cart.reducer;

export const cartActions = cart.actions;

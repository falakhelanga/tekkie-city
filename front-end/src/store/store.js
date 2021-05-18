import { configureStore } from "@reduxjs/toolkit";
import login from "./createSlices/login";
import cart from "./createSlices/cart";
import register from "./createSlices/register";
import list from "./createSlices/wishList";
import adress from "./createSlices/checkout";
const loginInitValues = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : {
      email: "",
      token: null,
      loading: false,
      error: null,
    };
const cartInitValues = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      products: [],
      totalPrice: 0,
    };
const store = configureStore({
  reducer: {
    login,
    register,
    cart,
    list,
    adress,
  },
  preloadedState: {
    login: loginInitValues,
    cart: cartInitValues,
  },
});

export default store;

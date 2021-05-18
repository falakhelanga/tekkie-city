import { createSlice } from "@reduxjs/toolkit";

const loginInitialState = {
  email: "",
  token: null,
  loading: false,
  error: null,
};
const login = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    loginInit: (state, action) => {
      state.loading = true;
      state.token = null;
      state.email = "";
      state.error = null;
    },
    loginSucc: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
      state.email = "";
      state.token = null;
    },
    logOut: (state, action) => {
      state.email = "";
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export default login.reducer;

export const loginAction = login.actions;

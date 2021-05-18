import { createSlice } from "@reduxjs/toolkit";

const regigisterInitialState = {
  loading: false,
  error: null,
};
const register = createSlice({
  name: "register",
  initialState: regigisterInitialState,
  reducers: {
    registerInit: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    registerSucc: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    registerFail: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default register.reducer;

export const registerAction = register.actions;

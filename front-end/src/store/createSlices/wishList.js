import { createSlice } from "@reduxjs/toolkit";

const wishList = createSlice({
  name: "wishlist",
  initialState: { list: null, loading: false, error: null },
  reducers: {
    getListInit: (state, action) => {
      state.loading = true;
      state.error = null;
      state.list = null;
    },
    getListSucc: (state, action) => {
      state.loading = false;
      state.error = false;
      state.list = action.payload;
    },
    getListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.list = null;
    },
  },
});

export default wishList.reducer;
export const wishListActions = wishList.actions;

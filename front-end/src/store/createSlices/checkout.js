import { createSlice } from "@reduxjs/toolkit";

const adress = createSlice({
  name: "adress",
  initialState: { adress: {} },
  reducers: {
    addAdress: (state, action) => {
      state.adress = action.payload;
    },
  },
});

export default adress.reducer;

export const adressActions = adress.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 0,
};

const itemsCartUpdaterSlice = createSlice({
  name: "cartItemsUpdater",
  initialState,
  reducers: {
    quantity: (state, action) => {
      state.status = "authenticated";
    },
  },
});

export const { quantity } = itemsCartUpdaterSlice.actions;
export default itemsCartUpdaterSlice.reducer;

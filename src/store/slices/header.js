import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuClick: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setClickMenu: (state, action) => {
      state.menuClick = action.payload;
    },
  },
});

export const { setClickMenu } = headerSlice.actions;

export default headerSlice.reducer;

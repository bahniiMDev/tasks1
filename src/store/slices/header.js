import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuClick: false,
  listClick: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setClickMenu: (state, action) => {
      state.menuClick = action.payload;
    },
    setClickList: (state, action) => {
      state.listClick = action.payload;
    },
  },
});

export const { setClickMenu, setClickList } = headerSlice.actions;

export default headerSlice.reducer;

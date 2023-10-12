import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeComplitionFrom: "",
  timeComplitionEnd: "",
  date: "",
  text: "",
  filters: {
    img: "#000000",
    text: "No list",
    count: null,
    index: null,
  },
  items: [],
};

export const taskInfoCreateSlice = createSlice({
  name: "tolBar",
  initialState,
  reducers: {
    setTimeComplitionFrom: (state, action) => {
      state.timeComplitionFrom = action.payload;
    },
    setTimeComplitionEnd: (state, action) => {
      state.timeComplitionEnd = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setValue: (state, action) => {
      state.text = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    pushItems: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const {
  setValue,
  pushItems,
  setItems,
  setTimeComplitionFrom,
  setTimeComplitionEnd,
  setDate,
  setFilters,
} = taskInfoCreateSlice.actions;

export default taskInfoCreateSlice.reducer;

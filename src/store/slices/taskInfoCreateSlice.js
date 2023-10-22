import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeComplitionFrom: "",
  timeComplitionEnd: "",
  height: 0,
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
    setHeight: (state, action) => {
      state.height = action.payload;
    },
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
      state.items = [action.payload, ...state.items];
    },
  },
});

export const {
  setValue,
  pushItems,
  setHeight,
  setItems,
  setTimeComplitionFrom,
  setTimeComplitionEnd,
  setDate,
  setFilters,
} = taskInfoCreateSlice.actions;

export default taskInfoCreateSlice.reducer;

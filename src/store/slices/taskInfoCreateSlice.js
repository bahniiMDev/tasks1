import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	timeComplitionFrom: "",
	timeComplitionEnd: "",
	date: "",
	text: "",
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
		setItem: (state) => {
			state.items.push({
				text: state.text,
				time: `${state.timeComplitionFrom} - ${state.timeComplitionEnd}`,
			});
			console.log(state.text);
		},
		setValue: (state, action) => {
			state.text = action.payload;
		},
		setDate: (state, action) => {
			state.date = action.payload;
		},
	},
});

export const {
	setValue,
	setItem,
	setTimeComplitionFrom,
	setTimeComplitionEnd,
	setDate
} = taskInfoCreateSlice.actions;

export default taskInfoCreateSlice.reducer;

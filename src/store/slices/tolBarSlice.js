import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	resize: false,
	border: false,
	animClick: false,
	regimIslandMenu: 3,
	height: null,
};

export const tolBarSlice = createSlice({
	name: "tolBar",
	initialState,
	reducers: {
		clickResize: (state, action) => {
			state.resize = action.payload;
		},
		clickBorder: (state, action) => {
			state.border = action.payload;
		},
		animationStane: (state, action) => {
			state.animClick = action.payload;
		},
		setRegim: (state, action) => {
			state.regimIslandMenu = action.payload;
		},
				setHeight: (state, action) => {
			state.height = action.payload;
		},
	},
});

export const { clickResize, setRegim,setHeight, clickBorder, animationStane } =
	tolBarSlice.actions;

export default tolBarSlice.reducer;

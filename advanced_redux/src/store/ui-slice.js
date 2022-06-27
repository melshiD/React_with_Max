import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
            //not actually mutating state here because we're using
            //toolkit
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
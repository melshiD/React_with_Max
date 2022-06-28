import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
            //not actually mutating state here because we're using
            //toolkit
        },
        showNotification(state, action){
            state.notification = { status: action.payload.status, 
                                    title: action.payload.title, 
                                    message: action.payload.message};
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
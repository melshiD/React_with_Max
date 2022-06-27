import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {isVisible: false};
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state){
            state = !state;
        }
    }
});

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity ++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title
                });
                //can use push here since we're using redux toolkit (regarding mutability issues)
            }
            else{
                existingItem.quantity ++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const exisstingItem = state.items.find(item => item.id === id);
            state.totalQuantity --;
            if(exisstingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }
            else{
                exisstingItem.quantity --;
                exisstingItem.totalPrice = exisstingItem.totalPrice - exisstingItem.price
            }
        }
    }
});

export const CartActions = cartSlice.actions;

export default cartSlice;
import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.totalAmount += newItem.price;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
                //can use push here since we're using redux toolkit (regarding mutability issues)
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
});

export const sendCartData = (cartState) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'sending request',
                message: 'sending cart data'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://react-http-b3bb7-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cartState)
                });

            if (!response.ok) {
                throw new Error('sending cart data failed')
            }
        };

        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'sent cart data successfully'
                })
            );
        } catch (error) {
            sendCartData().catch((error) => {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'sending cart data failed'
                }));
            });
        }
    };
}

export const CartActions = cartSlice.actions;

export default cartSlice;
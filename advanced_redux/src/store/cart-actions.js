import { uiActions } from "./ui-slice";
import { CartActions } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-b3bb7-default-rtdb.firebaseio.com/cart.json'
            );
            
            if(!response.ok){
                throw new Error("Could not fetch cart data");
            }

            const data = await response.json();

            return data;
        };
        try{
            const cartData = await fetchData();
            dispatch(CartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
                totalAmount: cartData.totalAmount
            }));
        } catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed'
            }));
        }
    };
};

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
                    body: JSON.stringify({
                        totalAmount: cartState.totalAmount, 
                        items: cartState.items,
                        totalQuantity: cartState.totalQuantity
                    })
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
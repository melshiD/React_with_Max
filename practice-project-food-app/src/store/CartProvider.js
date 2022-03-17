import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
};


const cartReducer = (state, action) => {
    if(action.type==='ADD_ITEM'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        console.log(`state.totalAmount: ${state.totalAmount},
                    state.item.price: ${action.item.price},
                    action.item.totalAmount: ${action.item.totalAmount}`);
        //TOTALAMOUNT IS NaN_____ FIND THE DISCONNECT BETWEEN PRICE AND AMOUNT!
        console.log(`Inside cartReducer add item: updatedTotalAmount: ${updatedTotalAmount}`);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
        // console.log(`foof: ${item.price}`);
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;
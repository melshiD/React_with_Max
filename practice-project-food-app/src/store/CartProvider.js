import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
};


const cartReducer = (state, action) => {
    if(action.type==='ADD_ITEM'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCardAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCardAction({type: 'ADD_ITEM', item: item});
        
    };

    const removeItemFromCartHandler = id => {
        dispatchCardAction({type: 'REMOVE_ITEM', id: id});
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
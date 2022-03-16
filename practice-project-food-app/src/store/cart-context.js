import React from 'react';
import Cart from '../Components/Cart/Cart';


const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (itms) => {},
    removeItem: (id) => {}
});

export default CartContext;
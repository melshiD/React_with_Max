import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (itms) => {},
    removeItem: (id) => {}
});

export default CartContext;
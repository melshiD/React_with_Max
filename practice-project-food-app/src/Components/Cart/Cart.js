import React from 'react';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import Checkout from './Checkout';
import {useState} from 'react';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);
    console.log(cartCtx);
    console.log(`in Cart, cartCtx.totalAmount: ${cartCtx.totalAmount}`);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-b3bb7-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
    };

    const cartItems = <ul 
        className={classes['cart-items']}>{
        cartCtx.items.map( item => {
            return <CartItem 
                      key={item.id} 
                      name={item.name} 
                      amount={item.amount} 
                      price={item.price}
                      onRemove={cartItemRemoveHandler.bind(null, item.id)}
                      onAdd={cartItemAddHandler.bind(null, item)}/>
        })}
    </ul>;

    const modalActions = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideCart}>
            Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>
            Order</button>}
        </div>;

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} hideCart={props.hideCart}/>}
            {!isCheckout && modalActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = <p>Succfully sent your order!</p>;

    return(
        <Modal hideCart={props.hideCart}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;




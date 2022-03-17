import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
    const cartCtx = useContext(CartContext);
console.log(cartCtx);
console.log(cartCtx.totalAmount.toFixed(2));
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItems = <ul 
        className={classes['card-item']}>{
        cartCtx.items.map( item => {
            return <li>{item.name}</li>
        })}
    </ul>;

    return(
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button 
                    className={classes['button--alt']}
                    onClick={props.hideCart}
                    >Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;




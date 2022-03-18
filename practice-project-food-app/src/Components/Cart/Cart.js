import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
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

    const cartItems = <ul 
        className={classes['cart-items']}>{
        cartCtx.items.map( item => {
            return <CartItem 
                      key={item.id} 
                      name={item.name} 
                      amount={item.amount} 
                      price={item.price}
                      //WHY DO I NEED BINDING HERE???
    //from the docs: (bind(thisArg, arg1)) if the thisArg is 
    //null or undefined, the this of the executing scope 
    //is treated as the thisArg for the new function. 
                      onRemove={cartItemRemoveHandler.bind(null, item.id)}
                      onAdd={cartItemAddHandler.bind(null, item)}/>
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




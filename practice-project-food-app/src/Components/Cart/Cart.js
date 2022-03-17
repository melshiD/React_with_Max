import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
    const cartItems = <ul className={classes['card-item']}>{[{id: 'c1', 
                        name: 'Sushi', 
                        amount: 2, 
                        price: 12.99}].map( item => {
                            return <li>{item.name}</li>
                        })}</ul>

    return(
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button 
                    className={classes['button--alt']}
                    onClick={props.hideCart}
                    >Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;



import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(CartActions.addItemToCart({
      id, price
    }));
  };
  const decreaseQuantityHandler = () => {
    dispatch(CartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

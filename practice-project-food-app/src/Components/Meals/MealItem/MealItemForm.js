import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
// import CartContext from '../../../store/cart-context';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = parseFloat(enteredAmount.trim());
        if(enteredAmount.trim().length === 0 || 
           enteredAmountNumber < 1 || 
           enteredAmountNumber > 5){
               setAmountIsValid(false);
               return;
           }
        console.log(`typeof enteredAmountNumber: ${typeof(enteredAmountNumber)}`);
        props.onAddToCart(enteredAmountNumber);
    };
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" 
                   ref={amountInputRef}
                   input={{id: `Amount`,
                           type:'number',
                           min: '1',
                           max: '5',
                           step: '1',
                           defaultValue: '1'
            }} />
            <button>+ Add </button>
            {!amountIsValid && <p>Please Enter an amount between 1 and 5</p>}
        </form>
    )
};

export default MealItemForm;
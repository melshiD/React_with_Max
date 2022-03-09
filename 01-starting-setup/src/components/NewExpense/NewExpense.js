import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [formState, setFormState] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormState(false);
    };

    const startEditingHandler = () => {
        setFormState(true);
    }

    const stopEditingHandler = () => {
        setFormState(false);
    }

    return(
        <div className='new-expense'>
            {!formState && <button onClick={startEditingHandler}>Add New Item</button>}
            {formState && <ExpenseForm 
                            onSaveExpenseData={onSaveExpenseDataHandler} 
                            cancelAddingExpense={stopEditingHandler}
                          />}
        </div>
    )
};

export default NewExpense;
import React, { useState } from 'react';
import './ExpensesFilter.css';
//onChange= whatever function im passing down from Expenses


function sendStateOnUp(update, props) {
    props.updateFilterYear(update);
    //whatever function is coming from expenses.js goes here
}

const ExpensesFilter = (props) => {

    const [enteredDate, setEnteredDate] = useState('');
    const setEnteredDateHandler = (event) => {
        let update = event.target.value;
        console.log(`from inside of ExpenseFilter component: ${update}`);
        setEnteredDate(update);
        sendStateOnUp(update, props);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={setEnteredDateHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const [enteredDate, setEnteredDate] = useState('');
    const dropdownCHangeHandler = (event) => {
        let update = event.target.value;
        console.log(`from inside of ExpenseFilter component: ${update}`);
        setEnteredDate(update);
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownCHangeHandler}>
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
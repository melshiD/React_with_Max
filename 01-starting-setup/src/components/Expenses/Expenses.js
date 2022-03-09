import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import React, { useState } from 'react';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    // const updateExpenseArray = (filteredYear) => {
    //     props.expenses.map( e.date.getFullYear().toString() == filteredYear);
    // }
    const filterChangeHandler = (newYear) => {
        console.log(`from State Carrier in Expenses: ${newYear}`);
        setFilteredYear(newYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div >
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}


export default Expenses;
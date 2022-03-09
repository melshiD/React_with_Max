import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import React, {useState} from 'react';
import './Expenses.css';

function Expenses(props) {
    const [enteredDate, setEnteredYear] = useState('');
    const stateCarrierFilterYear = (newYear) => {
        console.log(`from State Carrier in Expenses: ${newYear}`);
        setEnteredYear(newYear);
    }
    return (
        <div >
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={stateCarrierFilterYear}/>
                <ExpenseItem title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}>
                </ExpenseItem>
                <ExpenseItem title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}>
                </ExpenseItem>
                <ExpenseItem title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}>
                </ExpenseItem>
                <ExpenseItem title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}>
                </ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses;
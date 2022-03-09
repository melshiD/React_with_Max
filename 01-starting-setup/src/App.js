import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useStata, useState} from 'react';

const DUMMYExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 2, 13)
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 79.43, 
    date: new Date(2022, 5, 23)
  },
  { id: 'e3', 
    title: 'Burittos for the year', 
    amount: 799.49, 
    date: new Date(2022, 4, 5)
  },
  { id: 'e4', 
    title: 'New CAR!', 
    amount: 73.43, 
    date: new Date(2022, 10, 11)
  },
  {
    id: 'e5',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 7, 8)
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMYExpenses);


  const addExpenseHandler = expense => {
    setExpenses( prevExpenses => {  //clean way of updating state when dependent of prev state
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

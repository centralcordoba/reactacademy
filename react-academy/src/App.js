import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES =[{
  id:'ed1',
  title:'Toilet Paper',
  amount: 94.12,
  date : new Date(2022,7,14),
},
{
  id:'ed2',
  title:'Toilet Pencil',
  amount: 204.12,
  date : new Date(2022,7,14),
}    
];

const App =() => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHanldler =(expense)=>{
   setExpenses((prevExpenses) =>{
    return [expense, ...prevExpenses]
   });
  };

  return (
    <div>
     <NewExpense onAddExpense={addExpenseHanldler} />
     <Expenses items={expenses} />     
    </div>
  );
}

export default App;

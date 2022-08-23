import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App =() => {
  const expenses =[{
    id:'ed1',
    title:'Toilet Paper',
    amount: 94.12,
    date : new Date(2020,7,14),
  },
  {
    id:'ed2',
    title:'Toilet Pencil',
    amount: 204.12,
    date : new Date(2020,7,14),
  }    
  ];

  const addExpenseHanldler =()=>{
    console.log('app js');
    console.log(expenses);
  };
  
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHanldler} />
     <Expenses items={expenses} />     
    </div>
  );
}

export default App;

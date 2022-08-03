import './App.css';
import Expenses from './components/Expenses/Expenses';

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
  ]
  return (
    <div>
      <h2>Let s get started</h2>
     <Expenses items={expenses} />     
    </div>
  );
}

export default App;

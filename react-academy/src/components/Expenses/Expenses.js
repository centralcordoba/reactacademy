import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) =>{
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHanldler = selectedyear =>{
        setFilteredYear(selectedyear);
    };

return (
    <div>   
    <Card className="expenses">
    <ExpenseFilter 
    selected={filteredYear} 
    onChangeFilter={filterChangeHanldler}/>   
     {props.items.map((expense => 
     <ExpenseItem 
     title={expense.title} 
     amount={expense.amount} 
     date ={expense.date}
     />))}    
      
</Card>
</div>
)

}

export default Expenses;
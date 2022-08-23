import React from 'react';

import ExpenseItem  from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import './ExpenseFilter.css';

const ExpenseFilter = (props) =>{
    const dropdownChangeHandler =(event)=>{
       props.onChangeFilter(event.target.value);
    };
    
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value = '2021'>2021</option>
                    <option value = '2019'>2019</option>
                </select>
            </div>
        </div>        
    )
}

export default ExpenseFilter


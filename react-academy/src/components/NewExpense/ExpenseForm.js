import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    // 1 version setState 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    // 2 version setState 
    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     setEnteredAmount: '',
    //     setEnteredDate: ''
    // })

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHanlder = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHanlder}> 
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input 
            type='text' 
            value={enteredTitle} 
            onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input 
            type='number' 
            value={enteredAmount} 
            onChange={amountChangeHandler} min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input 
            type='date' 
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate} 
            onChange={dateChangeHandler}></input>
        </div>
        </div>
        <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
import React, { useState } from "react";

//Css import
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    // Instead of using multiple states, we can declare one as an object of states, this will help us to handle a huge load 
    // of variables and it is used when we updated state depends on the previous states of the variable.

    // const [userInput, setUserInput] = useState({
    //     expenseTitle: '',
    //     expenseAmount: '',
    //     expenseDate: '',
    // });

    // const expenseTitleChangeHandler = ({target: {value}}) => {
    //     setUserInput( 
    //         (prevState) => {
    //             return { ...prevState, expenseTitle: value };
    //         }
    //     );
    // }

    const expenseTitleChangeHandler = ( {target: {value}} ) => setExpenseTitle(value);
    const expenseAmountChangeHandler = ( {target: {value}} ) => setExpenseAmount(value);
    const expenseDateChangeHandler = ( {target: {value}} ) => setExpenseDate(value);

    const submitHandler = (evt) => {
        // we use the evt.preventDefault(); to prevent the reload of the page after submitting the form
        evt.preventDefault();
        
        const expenseData = {
            title: expenseTitle,
            amount: +expenseAmount,
            date: new Date(expenseDate),
        };

        props.onSaveExpenseData(expenseData);
        
        // Two-way binding, when you gather user data and then manipulates it, it is useful upon forms submission
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
        props.cancelHandler();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={expenseTitleChangeHandler} value={expenseTitle}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="Number" min="0.01" step="0.01" onChange={expenseAmountChangeHandler} value={expenseAmount}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={expenseDateChangeHandler} value={expenseDate}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.cancelHandler} >Cancel</button> 
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
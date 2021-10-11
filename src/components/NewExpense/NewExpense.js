import React, { useState } from "react";

//Component imports
import ExpenseForm from "./ExpenseForm";

//Css import
import './NewExpense.css';

const NewExpense = (props) => {
    const [ toggleForm, setToggleForm ] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
    }

    const AddNewExpenseHandler = () => setToggleForm(!toggleForm);
    const AddNewExpenseButton = <button onClick={AddNewExpenseHandler}>Add New Expense</button>;

    return (
        <div className="new-expense">
            { !toggleForm ? AddNewExpenseButton : <ExpenseForm cancelHandler={AddNewExpenseHandler} onSaveExpenseData={saveExpenseDataHandler}/> }
        </div>
    );
}

export default NewExpense;
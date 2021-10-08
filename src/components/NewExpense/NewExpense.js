import React from "react";

//Component imports
import ExpenseForm from "./ExpenseForm";

//Css import
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        }

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
import React from "react";
import Card from "../UI/Card";

//Components import
import ExpenseDate from "./ExpenseDate";

//Css Import
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const renderExpenseItems = () => {   
        return (
            props.expenses.map( (expensesFiltered) => {
                return (
                    <li key={expensesFiltered.date}>
                        <Card className="expense-item">
                            <ExpenseDate expenseDate={expensesFiltered.date} />
                            <div className="expense-item__description">
                                <h2>
                                    {expensesFiltered.title}
                                </h2>
                                <div className="expense-item__price">
                                    {'$'+expensesFiltered.amount}
                                </div>
                            </div>
                        </Card>
                    </li>
                );
            }                
            )                 
        );
    }

    return (
        <>
            { props.expenses.length === 0 ? <p className="expenses-list__fallback">No Expenses Found.</p> : renderExpenseItems() }
        </>
    );
}

export default ExpenseItem;
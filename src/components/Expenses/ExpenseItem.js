import React from "react";
import Card from "../UI/Card";

//Components import
import ExpenseDate from "./ExpenseDate";

//Css Import
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const renderExpenseItems = () => {
        const expensesList = props.expenses;
        return (
            expensesList.map( (expense) => {
                return (
                    <Card className="expense-item" key={expense.date}>
                        <ExpenseDate expenseDate={expense.date} />
                        
                        <div className="expense-item__description">
                            <h2>
                                {expense.title}
                            </h2>
                            <div className="expense-item__price">
                                ${expense.amount}
                            </div>
                        </div>
                    </Card>
                );
            })
        );
    }

    return (
        <>
            {renderExpenseItems()}
        </>
    );
}

export default ExpenseItem;
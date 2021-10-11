import React from "react";

//Component import
import ExpenseItem from "./ExpenseItem";

//Css Import
import './ExpenseList.css';

const ExpenseList = (props) => {
    return (
        <ul className="expenses-list">
            <ExpenseItem expenses={props.expenses} onFilterByYear={props.onFilterByYear}/>
        </ul>
    );
}

export default ExpenseList;
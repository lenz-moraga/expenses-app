import React, { useState } from "react";

//Components import
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

//Css import
import '../Expenses/Expenses.css';
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {    
    const [filteredYear, setFilteredYear ] = useState(2020);

    const addFilteredYear = (year) => {
        setFilteredYear(year);
    }

    const expensesList = props.newExpenses;
    const filteredExpenses = expensesList.filter((expense) => expense.date.getFullYear() === parseInt(filteredYear));

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onFilterByYear={addFilteredYear}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card> 
        </>
    );
}

export default Expenses;
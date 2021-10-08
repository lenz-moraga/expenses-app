import React, { useState } from "react";

//Components import
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

//Css import
import './components/Expenses/Expenses.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [newExpenses, setNewExpensesArray] = useState(expenses)

  const addExpenseHandler = (expenseToBeAdded) => {
    const NewExpensesArray = [
      ...newExpenses,
      expenseToBeAdded
    ]

    setNewExpensesArray(NewExpensesArray);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card className="expenses">
        <ExpenseItem expenses={newExpenses}/>
      </Card>      
    </div>
  );
}

export default App;

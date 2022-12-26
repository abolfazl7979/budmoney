import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import Expense from "./Expense";
import NotificationCard from "./NotificationCard";
import filteringExpenses from "../../selectors/filteringExpenses";

const ExpensesList = ({ expenses }) => {
  
  return (
    <div className="app-expenses-list app-content-container">
      <div className="app-expenses-list__header">
        <p className="app-expenses-list-header__text">Expenses</p>
        <p className="app-expenses-list-header__text">Amount</p>
      </div>
      {expenses.length === 0 && (
        <div className="app-expenses-list__no-expense">
          <h2>No Expenses Currently.</h2>
        </div>
      )}
      {expenses.map((expense) => {
        return <Expense key={expense.expenseId} expense={expense} />;
      })}

     {ReactDOM.createPortal(<NotificationCard />, document.getElementById('app-notification-card-root'))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: filteringExpenses(state.filters, state.expenses),
  };
};

export default connect(mapStateToProps)(ExpensesList);

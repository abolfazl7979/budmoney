import React from "react";
import ExpensesFilters from "../components/application/ExpensesFilters";
import ExpensesList from "../components/application/ExpensesList";
import ExpensesSummery from "../components/application/ExpensesSummery";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <ExpensesSummery />
      <ExpensesFilters />
      <ExpensesList />
    </React.Fragment>
  );
};

export default DashboardPage;

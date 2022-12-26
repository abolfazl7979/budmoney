import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import expensesSummery from "../../selectors/expensesSummery";
import filteringExpenses from "../../selectors/filteringExpenses";

const ExpensesSummery = ({
  expensesSummery: { expensesCount, totalAmount },
}) => {
  return (
    <div className="app-page-header">
      <div className="app-content-container app-expenses-summery--content-container">
        <h2 className="app-page-header__title">
          Viewing{" "}
          <span className="app-page-header__bold-text">{expensesCount}</span>{" "}
          {expensesCount === 1 ? "expense" : "expenses"} totalling{" "}
          <span className="app-page-header__bold-text">
            {
              <CurrencyFormat
                decimalSeparator="."
                decimalScale={2}
                fixedDecimalScale={true}
                prefix="$"
                value={totalAmount / 100}
                displayType="text"
                thousandSeparator={true}
              />
            }
          </span>
        </h2>
        <div className="app-page-header__actions">
          <Link className="app-button" to="/create">
            Create Expense
          </Link>
          <Link className="app-button app-pie-chart--button" to="/pie-chart">
            Expenses Pie Chart
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expensesSummery: expensesSummery(
      filteringExpenses(state.filters, state.expenses)
    ),
  };
};
export default connect(mapStateToProps)(ExpensesSummery);

import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";


const Expense = ({
  expense: { expenseId, expenseDescription, expenseCreatedAt, expenseAmount, expenseCategoryType}
}) => {

  // for the different colors in the expenses for their different categories.
  let expenseCategoryTextColor;
  if(expenseCategoryType === 'Health care'){ 
    expenseCategoryTextColor = 'Health-care--color'
  } else {
    expenseCategoryTextColor = expenseCategoryType+'--color';
  }
  return (
    <article className="app-expenses-list-item">
      <Link className="app-expenses-list-item__link" to={`/edit/${expenseId}`}>
        <div>
          <h3 className="app-expenses-list-item__title">{expenseDescription}</h3>
          <p className={`app-expenses-list-item__category-paragraph ${expenseCategoryTextColor}`}>{expenseCategoryType}</p>
          <p className="app-expenses-list-item__date">{moment(expenseCreatedAt).format("YYYY MMMM, Do")}</p>
        </div>
        <div>
          <CurrencyFormat
            className="app-expenses-list-item__amount"
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            prefix="$"
            value={expenseAmount / 100}
            displayType="text"
            thousandSeparator={true}
          />
        </div>
      </Link>
    </article>
  );
};
export default (Expense);

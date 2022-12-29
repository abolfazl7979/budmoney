import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { startAddExpense } from "../actions/expensesActions";
import { showNotification } from "../slices/notificationsSlice";
import ExpenseForm from "../components/application/ExpenseForm";

const CreateExpensePage = ({ startAddExpense, showNotification }) => {

  const [startTheLoaderForCreateOrEdit, setStartTheLoaderForCreateOrEdit] =
    useState(false);
  const navigate = useNavigate();

  const onSubmitionHandler = (expense) => {
    setStartTheLoaderForCreateOrEdit(true);
    startAddExpense(expense).then(() => {
      setStartTheLoaderForCreateOrEdit(false);
      showNotification("expense added succesfully!", "success");
      navigate("/dashboard", {
        replace: "push",
      });
    });
  };

  return (
    <React.Fragment>
      <div className="app-page-header">
        <div className="app-content-container">
          <h1 className="app-page-header__title">Add Expense</h1>
          <div className="app-page-header__actions">
            <Link className="app-button" to="/dashboard">
              Expenses List
            </Link>
          </div>
        </div>
      </div>
      <div className="app-content-container">
        <ExpenseForm
          startTheLoaderForCreateOrEdit={startTheLoaderForCreateOrEdit}
          onSubmitionHandler={onSubmitionHandler}
        />
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    showNotification: (notificationMessage, notificationStatus) =>
      dispatch(showNotification({ notificationMessage, notificationStatus })),
  };
};
export default connect(undefined, mapDispatchToProps)(CreateExpensePage);

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, use } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ExpenseForm from "../components/application/ExpenseForm";
import { showNotification } from "../slices/notificationsSlice";
import {
  startEditExpense,
  startRemoveExpense,
} from "../actions/expensesActions";
import AppModal from "../components/application/AppModal";

const EditExpensePage = ({
  startEditExpense,
  startRemoveExpense,
  showNotification,
}) => {
  const { expenseId } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [confirmDeleteExpense, setConfirmDeleteExpense] = useState(false);
  const [startTheLoaderForCreateOrEdit, setStartTheLoaderForCreateOrEdit] =
    useState(false);

  const expense = useSelector((state) => {
    return state.expenses.find((expense) => {
      return expense.expenseId === expenseId;
    });
  });

  const onRemoveExpenseProcess = () => {
    startRemoveExpense(expenseId).then(() => {
      showNotification("expense removed succesfully!", "success");
      navigate("/dashboard");
    });
  };

  const onSubmitionHandler = (editObject) => {
    setStartTheLoaderForCreateOrEdit(true);
    startEditExpense(expense.expenseId, editObject).then(() => {
      showNotification("expense editted succesfully!", "success");
      setStartTheLoaderForCreateOrEdit(false);
      navigate("/dashboard");
    });
  };

  useEffect(() => {
    if (confirmDeleteExpense) {
      onRemoveExpenseProcess();
    }
  }, [confirmDeleteExpense]);

  return (
    <div>
      <div className="app-page-header">
        <div className="app-content-container">
          <h1 className="app-page-header__title">Edit Expense</h1>
          <div className="app-page-header__actions">
            <Link className="app-button" to="/dashboard">
              Expenses List
            </Link>
          </div>
        </div>
      </div>
      <div className="app-content-container">
        <ExpenseForm
          setShowModal={setShowModal}
          startTheLoaderForCreateOrEdit={startTheLoaderForCreateOrEdit}
          onSubmitionHandler={onSubmitionHandler}
          expense={expense}
        />
      </div>
      <AppModal
        titleText="Delete expense"
        processName="confirm deleting expense"
        warningMessage="After you delete an expense, It's permanently deleted. Expenses cannot be undeleted."
        showModal={showModal}
        setShowModal={setShowModal}
        setConfirmDeleteExpense={setConfirmDeleteExpense}
        confirmDeleteExpense={confirmDeleteExpense}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (expenseId, editObject) =>
      dispatch(startEditExpense(expenseId, editObject)),
    startRemoveExpense: (expenseId) => dispatch(startRemoveExpense(expenseId)),
    showNotification: (notificationMessage, notificationStatus) =>
      dispatch(showNotification({ notificationMessage, notificationStatus })),
  };
};

export default connect(undefined, mapDispatchToProps)(EditExpensePage);

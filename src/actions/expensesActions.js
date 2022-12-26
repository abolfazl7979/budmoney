// async operations related to CRUD operations of the expenses.
import moment from "moment";
import { database } from "../firebase/firebase";
import {
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
} from "../slices/expensesSlice";

export const startAddExpense = ({
  expenseDescription,
  expenseAmount = 0,
  expenseCreatedAt = moment().valueOf(),
  expenseNote = "",
  expenseCategoryType,
}) => {
  return async (dispatch, getState) => {
    // data manipulation
    const expenseInfo = {
      expenseDescription,
      expenseAmount,
      expenseNote,
      expenseCreatedAt,
      expenseCategoryType,
    };
    const uid = getState().auth.uid;
    const sendRequest = async () => {
      const response = await database
        .ref(`users/${uid}/expenses`)
        .push(expenseInfo);
      dispatch(
        addExpense({ expense: { expenseId: response.key, ...expenseInfo } })
      );
    };
    try {
      await sendRequest();
    } catch (error) {}
  };
};

export const startEditExpense = (expenseId, editObject) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const sendRequest = async () => {
      const response = await database
        .ref(`users/${uid}/expenses/${expenseId}`)
        .update({
          ...editObject,
        });
      dispatch(editExpense({ expenseId, editObject }));
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};

export const startRemoveExpense = (expenseId) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const sendRequest = async () => {
      const response = await database
        .ref(`users/${uid}/expenses/${expenseId}`)
        .remove();
      dispatch(removeExpense({ expenseId }));
    };
    try {
      await sendRequest();
    } catch (error) {}
  };
};

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then((dataSnapShot) => {
        let expenses = [];
        dataSnapShot.forEach((snapShot) => {
          expenses.push({
            expenseId: snapShot.key,
            ...snapShot.val(),
          });
        });
        dispatch(setExpenses({ expenses }));
      });
  };
};

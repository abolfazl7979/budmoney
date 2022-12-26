import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, { payload: { expense } }) => {
      state.push(expense);
    },
    editExpense: (state, { payload: { expenseId, editObject } }) => {
      state.forEach((expense, expenseIndex) => {
        if (expense.expenseId === expenseId) {
          state[expenseIndex] = {
            ...expense,
            ...editObject,
          };
        }
      });
    },
    removeExpense: (state, { payload: { expenseId } }) => {
      state.forEach((expense, expenseIndex) => {
        if (expense.expenseId === expenseId) {
          state.splice(expenseIndex, 1);
        }
      });
    },
    setExpenses: (state, { payload: { expenses } }) => {
        state.splice(0);
        state.push(...expenses)
    },
  },
});

export const { addExpense, editExpense, removeExpense, setExpenses } =
  expensesSlice.actions;
export default expensesSlice.reducer;

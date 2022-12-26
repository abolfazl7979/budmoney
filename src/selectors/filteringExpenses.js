// a selector function needed for filtering the expenses.
import moment from "moment";
const filteringExpenses = (
  { text, sortBy, endDate, startDate, categoryTypeFilter },
  expenses
) => {
  return expenses
    .filter((expense) => {
      const isTextMatch =
        text.length === 0
          ? true
          : expense.expenseDescription
              .trim()
              .toLowerCase()
              .includes(text.trim().toLowerCase());

      const startDateMatch =
        startDate === null
          ? true
          : moment(expense.expenseCreatedAt).isSameOrAfter(startDate, "day");
      const endDateMatch =
        endDate === null
          ? true
          : moment(expense.expenseCreatedAt).isSameOrBefore(endDate, "day");

          
      let categoryTypeMatch;
      if (categoryTypeFilter === "All categories") {
        categoryTypeMatch = true;
      } else if (expense.expenseCategoryType === categoryTypeFilter) {
        categoryTypeMatch = true;
      } else {
        categoryTypeMatch = false;
      }
      return isTextMatch && startDateMatch && endDateMatch && categoryTypeMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.expenseCreatedAt - b.expenseCreatedAt;
      } else {
        return b.expenseAmount - a.expenseAmount;
      }
    });
};

export default filteringExpenses;

// a selector function needed to provide the necessary information for the expenses summary component
const expensesSummery = (expenses) => {
  let summery = {
    expensesCount: 0,
    totalAmount: 0,
  };

  summery.totalAmount = expenses
    .map((expense) => {
      return expense.expenseAmount;
    })
    .reduce((sum, current) => {
      summery.expensesCount++;
      return (sum = sum + current);
    }, 0);

  return summery;
};

export default expensesSummery;

// a selector function needed to provide the necessary information for the analysis page of the application
const calcExpensesPerCategory = (expenses) => {
  let totalExpensesPerCategoryObj = {
    totalExpensesAmounts : 0,
    housing : 0,
    transportation : 0,
    healthCare : 0,
    grocery : 0,
    utilities : 0,
    entertainments : 0,
    products : 0,
    services : 0,
    others : 0,
  }

  totalExpensesPerCategoryObj.totalExpensesAmounts = expenses.map((expense) => {
    return expense.expenseAmount;
  }).reduce((sum, current) => {
    return sum +=current;
  }, 0)



  totalExpensesPerCategoryObj.housing = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Housing') {
      return expense.expenseAmount;
    }
    // by default map returns undefined if it does not return anything
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)



  totalExpensesPerCategoryObj.transportation = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Transportation') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)


  totalExpensesPerCategoryObj.healthCare = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Health care') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)

  totalExpensesPerCategoryObj.grocery = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Grocery') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)



  totalExpensesPerCategoryObj.utilities = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Utility') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)



  totalExpensesPerCategoryObj.entertainments = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Entertainment') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)


  totalExpensesPerCategoryObj.products = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Product') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)

  totalExpensesPerCategoryObj.services = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Service') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)

  totalExpensesPerCategoryObj.others = expenses.map((expense) => {
    if(expense.expenseCategoryType === 'Others') {
      return expense.expenseAmount;
    }
    return 0;
  }).reduce((sum, current) => {
    return sum += current;
  }, 0)

  return totalExpensesPerCategoryObj
}

export default calcExpensesPerCategory;
import React, { useState, useCallback, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import useInput from "../../hooks/useInput";
import usePrompt from "../../hooks/usePrompt";

const ExpenseForm = ({
  onSubmitionHandler,
  expense,
  startTheLoaderForCreateOrEdit,
  setShowModal,
}) => {
  const [noteValue, setNoteValue] = useState(
    expense ? expense.expenseNote : ""
  );
  const [amountValue, setAmountValue] = useState(
    expense ? (expense.expenseAmount / 100).toString() : "0"
  );
  const [focused, setFocused] = useState(false);
  const [createdAt, setCreatedAt] = useState(
    expense ? moment(expense.expenseCreatedAt) : moment()
  );
  const descriptionValidator = useCallback((value) => {
    if (!value) {
      return "Description is required.";
    }
    return "";
  }, []);

  const amountValidator = useCallback((value) => {
    if (!value || value.match(/^\d+(\.)?(\d{0,2})$/)) {
      return true;
    } else {
      return false;
    }
  }, []);

  const categoryTypeValidator = useCallback((value) => {
    if (value === "Choose one of the options") {
      return "choosing an option is required.";
    } else {
      return "";
    }
  }, []);
  const {
    inputValue: categoryTypeValue,
    dispatchToInputUsage: dispatchToCategoryTypeInputUsage,
    handleOnInputBlur: handleOnCategoryTypeBlur,
    handleOnInputChange: handleOnCategoryTypeChange,
    isInputValid: isCategoryTypeInputValid,
    hasError: categoryTypeHasError,
    errorMessage: categoryTypeErrorMessage,
  } = useInput(
    expense ? expense.expenseCategoryType : "Choose one of the options",
    categoryTypeValidator
  );

  const {
    inputValue: descriptionValue,
    dispatchToInputUsage: dispatchToDescriptionInputUsage,
    handleOnInputBlur: handleOnDescriptionBlur,
    handleOnInputChange: handleOnDescriptionChange,
    isInputValid: isDescriptionInputValid,
    hasError: descriptionHasError,
    errorMessage: descriptionErrorMessage,
  } = useInput(expense ? expense.expenseDescription : "", descriptionValidator);

  const onAmountChangeHandler = (e) => {
    if (amountValidator(e.target.value)) {
      setAmountValue(e.target.value);
    }
  };
  const onNoteChangeHandler = (e) => {
    setNoteValue(e.target.value);
  };

  const onFocusChangeHandler = ({ focused }) => {
    setFocused(focused);
  };

  const onDateChangeHandler = (date) => {
    setCreatedAt(date);
  };

  const handleOnRemoveButton = () => {
    setShowModal(true);
  };
  //form submition
  const onFormSubmitionHandler = (e) => {
    e.preventDefault();

    dispatchToDescriptionInputUsage({ type: "SET_TOUCHED_TO_TRUE" });
    dispatchToCategoryTypeInputUsage({ type: "SET_TOUCHED_TO_TRUE" });

    if (isDescriptionInputValid && isCategoryTypeInputValid) {
      onSubmitionHandler({
        expenseDescription: descriptionValue,
        expenseAmount: amountValue === "" ? 0 : parseFloat(amountValue) * 100,
        expenseNote: !noteValue ? "" : noteValue,
        expenseCreatedAt: moment(createdAt).valueOf(),
        expenseCategoryType: categoryTypeValue,
      });
    }
  };

  // checking form dirtiness.
  const [showIOpenConfirmBox, setShouldIOpenConfirmBox] = useState(false);
  useEffect(() => {
    if (
      noteValue ||
      descriptionValue ||
      categoryTypeValue !== "Choose one of the options" ||
      (amountValue !== "0" && amountValue !== "")
    ) {
      setShouldIOpenConfirmBox(true);
    } else {
      setShouldIOpenConfirmBox(false);
    }

    if (expense) {
      if (
        expense.expenseDescription !== descriptionValue ||
        expense.expenseNote !== noteValue ||
        expense.expenseCategoryType !== categoryTypeValue ||
        (expense.expenseAmount / 100).toString() !== amountValue ||
        !moment(expense.expenseCreatedAt).isSame(createdAt, "day")
      ) {
        setShouldIOpenConfirmBox(true);
      } else {
        setShouldIOpenConfirmBox(false);
      }
    }
  }, [noteValue, descriptionValue, amountValue, categoryTypeValue, createdAt]);
  usePrompt(
    "Are you sure you want to leave this page? you will lose your entered data.",
    showIOpenConfirmBox
  );

  return (
    <form className="app-form" onSubmit={onFormSubmitionHandler}>
      <input
        className={`app-text-input ${
          descriptionHasError ? "app-form-input__invalid" : ""
        }`}
        type=""
        placeholder="Description..."
        value={descriptionValue}
        onChange={handleOnDescriptionChange}
        onBlur={handleOnDescriptionBlur}
      />
      {descriptionHasError && (
        <p className="app-form__error">{descriptionErrorMessage}</p>
      )}
      <input
        className="app-text-input"
        type="text"
        placeholder="Amount..."
        onChange={onAmountChangeHandler}
        value={amountValue}
      />
      <select
        className={`app-select ${
          categoryTypeHasError ? "app-form-input__invalid" : ""
        }`}
        value={categoryTypeValue}
        onChange={handleOnCategoryTypeChange}
        onBlur={handleOnCategoryTypeBlur}
      >
        <option value="Choose one of the options">
          Choose one of the options
        </option>
        <option value="Housing">Housing</option>
        <option value="Transportation">Transportation</option>
        <option value="Health care">Health care</option>
        <option value="Grocery">Grocery</option>
        <option value="Utility">Utility</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Product">Product</option>
        <option value="Service">Service</option>
        <option value="Others">Others</option>
      </select>
      {categoryTypeHasError && (
        <p className="app-form__error">{categoryTypeErrorMessage}</p>
      )}
      <SingleDatePicker
        id="mySingleDatePicker"
        date={createdAt}
        onDateChange={onDateChangeHandler}
        focused={focused}
        onFocusChange={onFocusChangeHandler}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel={true}
        isOutsideRange={() => false}
        showDefaultInputIcon={true}
        readOnly={true}
        small={true}
      />
      <textarea
        className="app-text-area"
        value={noteValue}
        onChange={onNoteChangeHandler}
        placeholder="Add any description for the expense..."
      ></textarea>
      <div className="app-form__button-container">
        <button
          className="app-button app-button--form-submit app-button--for-loader"
          type="submit"
        >
          {startTheLoaderForCreateOrEdit ? (
            <Circles
              height="25"
              width="25"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          ) : expense ? (
            "Edit Expense"
          ) : (
            "Save Expense"
          )}
        </button>
        {expense && (
          <button
            className="app-button app-button--secondary-form-submit app-button--for-remove-loader"
            onClick={handleOnRemoveButton}
            type="button"
          >
            Remove Expense
          </button>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;

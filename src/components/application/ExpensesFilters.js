import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setText,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setCategoryTypeFilter,
} from "../../slices/filtersSlice";

const ExpensesFilters = ({
  filters: { text, sortBy, startDate, endDate, categoryTypeFilter },
  setText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
  setCategoryTypeFilter,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const onTextChangeHandler = (e) => {
    setText(e.target.value);
  };
  const handleOnCategoryTypeFilterChange = (e) => {
    setCategoryTypeFilter(e.target.value);
  };
  const onSortByChangeHandler = (e) => {
    if (e.target.value === "date") {
      sortByDate();
    } else {
      sortByAmount();
    }
  };
  const onFocusChangeHandler = (focusedInput) => {
    setFocusedInput(focusedInput);
  };
  const onDatesChangeHandler = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div className="app-content-container app-filters--content-container">
      <div className="app-input-group">
        <div className="app-input-group__item">
          <input
            className="app-text-input"
            type="text"
            placeholder="Search expenses ..."
            value={text}
            onChange={onTextChangeHandler}
          />
        </div>
        <div className="app-input-group__item">
          <select
            className="app-select"
            value={categoryTypeFilter}
            onChange={handleOnCategoryTypeFilterChange}
          >
            <option value="All categories">All categories</option>
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
        </div>
        <div className="app-input-group__item">
          <select
            className="app-select"
            value={sortBy}
            onChange={onSortByChangeHandler}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="app-input-group__item">
          <DateRangePicker
            startDate={startDate}
            startDateId="myStartDate"
            endDate={endDate}
            endDateId="myEndDate"
            focusedInput={focusedInput}
            onFocusChange={onFocusChangeHandler}
            onDatesChange={onDatesChangeHandler}
            readOnly={true}
            showClearDates={true}
            numberOfMonths={1}
            hideKeyboardShortcutsPanel={true}
            isOutsideRange={() => false}
            small={true}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setText: (text) => dispatch(setText({ text })),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate({ startDate })),
    setEndDate: (endDate) => dispatch(setEndDate({ endDate })),
    setCategoryTypeFilter: (categoryTypeFilter) =>
      dispatch(setCategoryTypeFilter({ categoryTypeFilter })),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesFilters);

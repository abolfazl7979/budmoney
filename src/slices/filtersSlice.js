import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
  categoryTypeFilter : 'All categories'
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setText: (state, { payload: { text } }) => {
      state.text = text;
    },
    sortByDate: (state, action) => {
      state.sortBy = "date";
    },
    sortByAmount: (state, action) => {
      state.sortBy = "amount";
    },
    setCategoryTypeFilter : (state, { payload : { categoryTypeFilter}}) => {
      state.categoryTypeFilter = categoryTypeFilter;
    },
    setStartDate: (state, { payload: { startDate } }) => {
      state.startDate = startDate;
    },
    setEndDate: (state, { payload: { endDate } }) => {
      state.endDate = endDate;
    },
  },
});

export const { setText, sortByAmount, sortByDate, setEndDate, setStartDate, setCategoryTypeFilter } =
  filtersSlice.actions;
export default filtersSlice.reducer;

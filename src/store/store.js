import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import expensesReducer from "../slices/expensesSlice";
import filtersReducer from "../slices/filtersSlice";
import notificationsReducer from "../slices/notificationsSlice";
import authReducer from "../slices/authSlice";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    filters: filtersReducer,
    notifications: notificationsReducer,
    auth: authReducer,
  },
  middleware : getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload: { uid } }) => {
      state.uid = uid;
    },
    logout: (state, action) => {
      delete state.uid;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

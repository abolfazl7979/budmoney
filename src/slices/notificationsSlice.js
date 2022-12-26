// a global notification card for database operations of the user.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message : '',
  status : ''   // either success for successful operation or fail for failed operation and '' for no status at all.
}
const notificationSlice = createSlice({ 
  name : 'notification',
  initialState : initialState,
  reducers : {
    showNotification : (state, { payload : { notificationMessage, notificationStatus }}) => {
      state.message = notificationMessage;
      state.status = notificationStatus;
    },
    hideNotification : (state, action) => {
      state.message = '';
      state.status = '';
    }
  }
})

export const {showNotification,hideNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
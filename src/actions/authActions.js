// async operations related to signing in and signing out
import firebase, { googleProvider } from "../firebase/firebase";

export const startLogin = () => {
  return async (dispatch, getState) => {
    const sendRequest = async () => {
      await firebase.auth().signInWithPopup(googleProvider);
    };
    try {
      await sendRequest();
    } catch (error) {}
  };
};

export const startLogout = () => {
  return async (dispatch, getState) => {
    const sendRequest = async () => {
      await firebase.auth().signOut();
    };
    try {
      await sendRequest();
    } catch (error) {}
  };
};

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import history from "./routers/history";
import store from "./store/store";
import firebase from "./firebase/firebase";
import App from "./App";
import Loading from "./components/application/Loading";
import { startSetExpenses } from "./actions/expensesActions";
import { login, logout } from "./slices/authSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const loaderJsx = <Loading />;

const appJsx = (
  // later add React.StrictMode
  <Provider store={store}>
    <App />
  </Provider>
);

// to avoid redownloading the bundle everytime the application refreshes and rerenders
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(appJsx);
    hasRendered = true;
  }
};

root.render(loaderJsx);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // setting user uid in the application auth state after loging in.
    store.dispatch(login({ uid: user.uid }));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // later, fix the '/' to '/login' or '/'
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    // later direct the user to /login page
    if (
      history.location.pathname === "/signup" ||
      history.location.pathname === "/login" ||
      history.location.pathname === "/"
    ) {
      history.push(history.location.pathname);
    } else {
      history.push('/login')
    }
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import AppRouter from "./routers/AppRouter";
// necessary imports needed for react-dates to work
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles/base/react-date-overrides.css";

const App = () => {
  return (
    <React.Fragment>
      <AppRouter />
    </React.Fragment>
  );
};
export default App;

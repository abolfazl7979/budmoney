import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/application/Header";


const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => {
  return isAuthenticated ? (
    <React.Fragment>
      <Header />
      <Component {...rest}/>
    </React.Fragment>
  ) : (
    <Navigate to="/login" />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};
export default connect(mapStateToProps)(PrivateRoute);

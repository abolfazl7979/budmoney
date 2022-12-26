import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest}) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Component {...rest}/>;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};
export default connect(mapStateToProps)(PublicRoute);

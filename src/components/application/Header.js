import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/authActions";

const Header = ({ startLogout }) => {
  const onLogoutHandler = () => {
    startLogout();
  };

  return (
    <header className="app-header">
      <div className="app-content-container">
        <div className="app-header__content">
          <h1 className="app-header-content__title">
            <Link className="app-header-title__link" to="/dashboard">
              Budmoney
            </Link>
          </h1>
          <button
            className="app-button app-button--link"
            onClick={onLogoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};
export default connect(undefined, mapDispatchToProps)(Header);

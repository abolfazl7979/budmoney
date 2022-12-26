import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = ({ setSideBar, toggleHome, stickyNav }) => {
  const onMenuClickHandler = () => {
    setSideBar(true);
  };
  return (
    <nav className={stickyNav ? "l-p-nav l-p-sticky" : "l-p-nav"}>
      <div className="l-p-nav__content">
        <h1 className="l-p-nav-content__title">
          <LinkR
            className="l-p-nav-content__logo-link"
            to="/"
            onClick={toggleHome}
          >
            Budmoney
          </LinkR>
        </h1>
        <div
          className="l-p-nav-content__icon-container"
          onClick={onMenuClickHandler}
        >
          <FaBars className="l-p-nav-content__menu-icon"/>
        </div>
        <ul className="l-p-nav-content__list">
          <li className="l-p-nav-content-list__item">
            <LinkS
              className="l-p-nav-content-list__link"
              to="about"
              activeClass="l-p-nav-active"
              spy={true}
              smooth={true}
              offset={-77}
              duration={500}
            >
              About
            </LinkS>
          </li>
          <li className="l-p-nav-content-list__item">
            <LinkS
              className="l-p-nav-content-list__link"
              to="discover"
              activeClass="l-p-nav-active"
              spy={true}
              smooth={true}
              offset={-77}
              duration={500}
            >
              Discover
            </LinkS>
          </li>
          <li className="l-p-nav-content-list__item">
            <LinkS
              className="l-p-nav-content-list__link"
              to="signup"
              activeClass="l-p-nav-active"
              spy={true}
              smooth={true}
              offset={-77}
              duration={500}
            >
              Sign Up
            </LinkS>
          </li>
          <li className="l-p-nav-content-list__item">
            <LinkS
              className="l-p-nav-content-list__link"
              to="services"
              activeClass="l-p-nav-active"
              spy={true}
              smooth={true}
              offset={-77}
              duration={500}
            >
              Services
            </LinkS>
          </li>
        </ul>
        <div className="l-p-nav-content__sign-in-container">
          <LinkR className="l-p-nav-content__sign-in-link" to="/login">
            Sign In
          </LinkR>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

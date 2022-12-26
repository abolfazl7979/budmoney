import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ isOpen, setSideBar }) => {
  const onCloseIconClickHandler = () => {
    setSideBar(false);
  };

  return (
    <aside
      className="l-p-sidebar"
      style={{ opacity: isOpen ? "1" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div
        className="l-p-sidebar__close-icon-container"
        onClick={onCloseIconClickHandler}
      >
        <FaTimes className="l-p-sidebar__close-icon" />
      </div>
      <nav className="l-p-sidebar__nav">
        <ul className="l-p-sidebar-nav__list">
          <LinkS
            className="l-p-sidebar-nav__link"
            to="about"
            onClick={onCloseIconClickHandler}
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            About
          </LinkS>
          <LinkS
            className="l-p-sidebar-nav__link"
            to="discover"
            onClick={onCloseIconClickHandler}
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Discover
          </LinkS>
          <LinkS
            className="l-p-sidebar-nav__link"
            to="signup"
            onClick={onCloseIconClickHandler}
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Sign Up
          </LinkS>
          <LinkS
            className="l-p-sidebar-nav__link"
            to="services"
            onClick={onCloseIconClickHandler}
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Services
          </LinkS>

          <div className="l-p-sidebar-nav__sign-in-container">
            <LinkR
              className="landing-button landing-button--primary-color"
              to="/login"
            >
              Sign In
            </LinkR>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;

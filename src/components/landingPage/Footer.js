import React from "react";
import { Link as LinkR } from "react-router-dom";
import facebookLogo from "../../resources/landingPage/svgs/logoFacebookSvg.svg";
import instagramLogo from "../../resources/landingPage/svgs/logoInstagramSvg.svg";
import twitterLogo from "../../resources/landingPage/svgs/logoTwitterSvg.svg";

const Footer = ({ toggleHome }) => {
  return (
    <footer className="l-p-footer-section">
      <div className="l-p-footer-section__content">
        <nav className="l-p-footer-section__nav">
          <div className="l-p-footer-section-nav__brand-content">
            <h1 className="l-p-footer-section__logo-title">
              <LinkR
                className="l-p-footer-section-logo__link"
                to="#"
                onClick={toggleHome}
              >
                Budmoney
              </LinkR>
            </h1>
            <article className="l-p-footer-section__icons">
              <LinkR
                className="l-p-footer-section__icon-link"
                to="#"
                target="_blank"
              >
                <img
                  className="l-p-footer-section__icon"
                  alt="facebook icon"
                  src={facebookLogo}
                />
              </LinkR>
              <LinkR
                className="l-p-footer-section__icon-link"
                to="#"
                target="_blank"
              >
                <img
                  className="l-p-footer-section__icon"
                  alt="insagram icon"
                  src={instagramLogo}
                />
              </LinkR>
              <LinkR
                className="l-p-footer-section__icon-link"
                to="#"
                target="_blank"
              >
                <img
                  className="l-p-footer-section__icon"
                  alt="twiiter icon"
                  src={twitterLogo}
                />
              </LinkR>
            </article>
            <p className="l-p-footer-section__copy-right">
              Copyright © 2022 by Budmoney, Inc. All rights reserved.
            </p>
          </div>
          <ul className="l-p-footer-section-nav__list">
            <li className="l-p-footer-section-nav__list-title">contact us</li>
            <li className="l-p-footer-section-nav__list-address">
              Iran, Isfahan, Najaf Abad University, Computer Department
            </li>
            <li className="l-p-footer-section__list-item l-p-list-item--no-margin-bottom">
              <LinkR
                className="l-p-footer-section__nav-link"
                to="tel:415-201-6370"
              >
                123-456-7890
              </LinkR>
            </li>
            <li className="l-p-footer-section__list-item">
              <LinkR
                className="l-p-footer-section__nav-link"
                to="mailto:hello@Budmoney.com"
              >
                hello@Budmoney.com
              </LinkR>
            </li>
          </ul>
          <ul className="l-p-footer-section-nav__list">
            <li className="l-p-footer-section-nav__list-title">account</li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="/signup">
                Create account
              </LinkR>
            </li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="/login">
                Sign in
              </LinkR>
            </li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="#">
                iOS app
              </LinkR>
            </li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="#">
                Android app
              </LinkR>
            </li>
          </ul>
          <ul className="l-p-footer-section-nav__list">
            <li className="l-p-footer-section-nav__list-title">company</li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="#">
                About Budmoney
              </LinkR>
            </li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="#">
                For Business
              </LinkR>
            </li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="#">
                Careers
              </LinkR>
            </li>
          </ul>
          <ul className="l-p-footer-section-nav__list">
            <li className="l-p-footer-section-nav__list-title">Resources</li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="#">
                Help center
              </LinkR>
            </li>
            <li className="l-p-footer-section__list-item">
              <LinkR className="l-p-footer-section__nav-link" to="#">
                Privacy & terms
              </LinkR>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

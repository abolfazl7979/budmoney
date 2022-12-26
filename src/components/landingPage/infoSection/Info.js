import React from "react";
import { Link } from "react-router-dom";

// a reusable component made for different sections of the landing page
const Info = ({
  data: {
    sectionName,
    sectionId,
    sectionParagraph,
    sectionTitle,
    sectionSubtitle,
    linkToValue,
    linkTextValue,
    imgFirst,
    imgAlt,
    imgSrc,
  },
}) => {
  // for different styles
  let infoBackgroundColor;
  let textColor;
  let btnColorModifier;
  if (sectionName === "about" || sectionName === "signUp") {
    infoBackgroundColor = "l-p-light--background";
    textColor = "l-p-dark--text";
    btnColorModifier = "landing-button--dark";
  } else {
    infoBackgroundColor = "l-p-dark--background";
    textColor = "l-p-light--text";
    btnColorModifier = "landing-button--white";
  }
  return (
    <div className={`l-p-info-section ${infoBackgroundColor}`} id={sectionId}>
      <div className="l-p-info-section__content">
        <div
          className={`l-p-info-section-content__row ${
            imgFirst ? "l-p-img-first" : ""
          }`}
        >
          <div className="l-p-info-section-content__column1">
            <div className="l-p-info-section-content-column1__content">
              <p className="l-p-info-section-content-column1__paragraph">
                {sectionParagraph}
              </p>
              <h1
                className={`l-p-info-section-content-column1__title ${textColor}`}
              >
                {sectionTitle}
              </h1>
              <p
                className={`l-p-info-section-content-column1__subtitle ${textColor}`}
              >
                {sectionSubtitle}
              </p>
              <div className="l-p-info-section-content-column1__link-container">
                <Link
                  className={`landing-button ${btnColorModifier}`}
                  to={linkToValue}
                >
                  {linkTextValue}
                </Link>
              </div>
            </div>
          </div>
          <div className="l-p-info-section-content__column2">
            <div className="l-p-info-section-content-column2__img-container">
              <img
                className="l-p-info-section-content-column2__img"
                alt={imgAlt}
                src={imgSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

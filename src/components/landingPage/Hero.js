import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../resources/landingPage/heroVideoSmallSize.mp4";
import { MdArrowForward } from "react-icons/md";

const Hero = ({ setStickyNav }) => {
  const [hoverSignUp, setHoverSignUp] = useState(false);
  const heroSection = useRef();
  const onSignUpHover = () => {
    setHoverSignUp((prevState) => !prevState);
  };

  useEffect(() => {
    // intersectionObserver for sticky navigation process
    const stickyNavObserver = new IntersectionObserver(
      (entries) => {
        const hero = entries[0];

        if (!hero.isIntersecting) {
          setStickyNav(true);
        } else {
          setStickyNav(false);
        }
      },
      {
        root: null,
        // to fix the issue of smooth scroll does not active the nav when clicking on about section
        rootMargin: "-80px",
        threshold: 0,
      }
    );

    stickyNavObserver.observe(heroSection.current);
  }, []);
  return (
    <div className="l-p-hero" ref={heroSection}>
      <div className="l-p-hero__background">
        <video
          className="l-p-hero__video"
          autoPlay
          loop
          muted
          src={heroVideo}
        ></video>
      </div>
      <div className="l-p-hero__content">
        <h1 className="l-p-hero-content__title">Managing Expenses Made Easy</h1>
        <p className="l-p-hero-content__paragraph">
          Sign up for a new account today and bring your expenses under control
        </p>
        <div className="l-p-hero-content__sign-up-btn-container">
          <Link
            className="landing-button landing-button--primary-color"
            to="/signup"
            onMouseEnter={onSignUpHover}
            onMouseLeave={onSignUpHover}
          >
            Get started{" "}
            {hoverSignUp && (
              <MdArrowForward className="l-p-hero-content__arrow-icons" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

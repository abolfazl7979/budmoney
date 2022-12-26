import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import NavBar from "../components/landingPage/NavBar";
import SideBar from "../components/landingPage/SideBar";
import Hero from "../components/landingPage/Hero";
import Info from "../components/landingPage/infoSection/Info";
import Services from "../components/landingPage/Services";
import Footer from "../components/landingPage/Footer";
import {
  aboutSectionData,
  discoverSectionData,
  signUpSectionData,
} from "../components/landingPage/infoSection/dataObjects";

const LandingPage = () => {
  // for hamburgerMenu in the landing page header.
  const [sideBar, setSideBar] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <React.Fragment>
      <SideBar isOpen={sideBar} setSideBar={setSideBar} />
      <NavBar
        stickyNav={stickyNav}
        setSideBar={setSideBar}
        toggleHome={toggleHome}
      />
      <Hero setStickyNav={setStickyNav} />
      <Info data={aboutSectionData} />
      <Info data={discoverSectionData} />
      <Info data={signUpSectionData} />
      <Services />
      <Footer toggleHome={toggleHome} />
    </React.Fragment>
  );
};

export default LandingPage;

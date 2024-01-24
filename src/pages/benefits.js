import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";
import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

import NavBar from "../components/NavBar";
import HeroBlockDark from '../components/HeroBlockDark';
import IntroImage from '../images/about-01.jpg';
import BenefitsContent from "../components/BenefitsContent";
import Footer from "../components/Footer";

const Benefits = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky("[data-sticky]");
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Helmet>
        <title>Benefits | Rho Impact</title>
        <meta charset="UTF-8" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <NavBar theme='dark' />
      {/*  Page content */}
      <main className="flex-grow">
        <HeroBlockDark
          heroImage={IntroImage}
          titleText="Benefits of joining the<br />Rho Impact Team"
        />
        <BenefitsContent />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Benefits;

import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroBlockDark from '../../components/HeroBlockDark';
import HeroImage from '../../images/case-studies-hero.jpg';
import Cta from "../../components/Cta";
import CaseStudyGrid from "../../components/CaseStudyGrid";

import { Helmet } from "react-helmet";
import orgSchema from "../../orgSchema.json";

const CaseStudiesIndex = () => {
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
        <title>Case Studies | Rho Impact</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="See Rho Impact's rigorous and pragmatic modeling approaches in action."
        />
        <meta name="keywords" content="impact forecasting, impact modeling, impact forecasting case studies" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <NavBar theme='dark' />

      {/*  Page content */}
      <main className="flex-grow">

        <HeroBlockDark
          heroImage={HeroImage}
          titleText="Case Studies"
          subtitleText=""
        />
        <CaseStudyGrid />
        <br />
        <br />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default CaseStudiesIndex;
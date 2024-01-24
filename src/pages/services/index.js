import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";
import { Link } from "gatsby";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroBlockDark from '../../components/HeroBlockDark';
import HeroImage from '../../images/services-hero.jpg';
import ServicesList from "../../components/ServicesList";
import FrameworkScrolling from "../../components/FrameworkScrolling";
import Cta from "../../components/Cta";
import ServicesHighlights from "../../components/ServicesHighlights";

import { Helmet } from "react-helmet";
import orgSchema from "../../orgSchema.json";

const ServicesIndex = () => {
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
        <title>Technical &amp; Advisory Services | Rho Impact</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Our team of experts help cut time and effort, contextualize the data, and build capacity within your team so you can get the job done."
        />
        <meta name="keywords" content="impact modeling, impact forecasting, esg as a service, esg strategy, esg integration, impact strategy, social impact strategy, esg integration strategy, what is an esg strategy, corporate esg strategy, social impact strategy consulting, impact strategy consulting, developing an esg strategy" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <NavBar theme='dark' />

      {/*  Page content */}
      <main className="flex-grow">

        <HeroBlockDark
          heroImage={HeroImage}
          titleText="Technical &amp; Advisory Services"
          subtitleText=""
        />
        <ServicesHighlights />
        <ServicesList />
        <FrameworkScrolling />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default ServicesIndex;
import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";
import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

import NavBar from "../components/NavBar";
import HeroBlockDark from '../components/HeroBlockDark';
import HeroImage from '../images/earth-night-nasa-unsplash-hero.jpeg';
import AboutStory from "../components/AboutStory";
import AboutIntro from "../components/AboutIntro";
import Timeline from "../components/Timeline";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const About = () => {
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
        <title>About | Rho Impact</title>
        <meta
          name="description"
          content="Rho Impact is built on over a decade applying data to solve real-world challenges."
        />

        {/* Google / search */}
        <meta itemprop="name" content="About | Rho Impact" />
        <meta itemprop="description" content="Rho Impact is built on over a decade applying data to solve real-world challenges." />
        <meta itemprop="image" content="/website-generic-social-image.png" />

        {/* Facebook */}
        <meta property="og:title" content="About | Rho Impact" />
        {/* <meta property="og:url" content="CANONICAL URL" /> */}
        <meta property="og:image" content="/website-generic-social-image.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Rho Impact is built on over a decade applying data to solve real-world challenges."
        />

        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="emissions forecasting, impact forecasts, quantifying impact, ghg emissions forecasting, impact claims, auditable impact claims, sustainability claims, esg software"
        />

        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <NavBar theme='dark' />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroBlockDark
          heroImage={HeroImage}
          titleText="Powering the World's<br />Most Reliable<br />Impact Forecasts"
          subtitleText=""
          opacityClass="opacity-75"
        />
        <AboutIntro />
        <AboutStory />
        <Timeline />
        <Newsletter />
        {/*
        <Career />
         */}
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default About;

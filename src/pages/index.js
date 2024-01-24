import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";
import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";
import LandingPage from "../modules/LandingPage";

function Home() {
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
        <title>Rho Impact | Quantify and Forecast Impact</title>
        <meta
          name="description"
          content="Powering the world's most reliable impact forecasts."
        />

        {/* Google / search */}
        <meta
          itemprop="name"
          content="Rho Impact | Quantify and Forecast Impact"
        />
        <meta
          itemprop="description"
          content="Powering the world's most reliable impact forecasts."
        />

        {/* Facebook */}
        <meta
          property="og:title"
          content="Rho Impact | Quantify and Forecast Impact"
        />
        {/* <meta property="og:url" content="CANONICAL URL" /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Powering the world's most reliable impact forecasts."
        />

        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="emissions forecasting, quantifying impact, ghg emissions forecasting, impact claims, auditable impact claims, sustainability claims, esg software"
        />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/9473175.js"
        ></script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      <main className="flex-grow">
        <LandingPage />
      </main>
    </div>
  );
}

export default Home;

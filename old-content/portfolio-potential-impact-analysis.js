import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../components/Header";
import Faqs from "../components/Faqs";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

function Pricing() {
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
        <title>
          Portfolio Potential Impact Analysis | IMM Consulting for Investors |
          Rho Impact
        </title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rho Impact combines high-touch advisory services along with an ever-expanding suite of tech-enabled tooling. Our most common advisory services have been bundled into discrete packages to expedite your journey into well defined, actionable ESG practices."
        />
        <meta
          name="keywords"
          content="esg advisory services, environmental impact analyst, esg impact analysis, esg consulting services, esg components, esg integration strategy, esg integration, esg framework"
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section className="relative">
          <div
            className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80"
            aria-hidden="true"
          ></div>

          <div className="relative max-w-full mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center mt-16 pb-12">
                <h1 className="h2 font-playfair-display text-slate-800 mb-4">
                  Portfolio Potential Impact Analysis
                  <br />
                  for Investors
                </h1>
                <p className="text-xl text-slate-768">
                  Quantifying the environmental, social, and economic impacts of
                  your portfolio is a unique and complex challenge. Issues with
                  data integrity, assurance documentation, and information
                  gathering makes even the most straightforward impact analysis
                  out of reach. Rho Impact provides a systematic approach for
                  measuring and managing your impact performance today, and
                  projecting what these impacts will be in the future.
                </p>
              </div>

              {/* Section content */}
              <div className="max-w-3xl mx-auto bg-white p-12">
                <ul className="text-gray-600 -mb-2 flex-grow">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Measure and manage your impacts on identified material
                      issues, including your GHG emissions
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Measure the forward-looking emissions reduction potential
                      of your portfolio companies with{" "}
                      <Link
                        className="text-blue-500 hover:text-blue-700 font-medium"
                        to="/crane-tool/"
                      >
                        {" "}
                        CRANE Analyses
                      </Link>{" "}
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Project your future impacts with assurable documentation
                      for each data point, assumption, and methodology used
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Create in-house ESG frameworks and scorecards to gauge
                      progress and communicate performance
                    </span>
                  </li>
                </ul>
                <div className="pb-5 pt-5 mt-6">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                    to="/contact/"
                  >
                    Contact us for additional information or pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Faqs />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Pricing;

import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../../components/Header";
import NewsLetter from "../../components/Newsletter";
import Footer from "../../components/Footer";

import { Helmet } from "react-helmet";
import orgSchema from "../../orgSchema.json";

function Services() {
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
          ESG Special Projects | ESG Consulting for Corporations | Rho Impact
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
        <section className="relative">
          <div
            className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80"
            aria-hidden="true"
          ></div>
          <div className="relative max-w-full mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center mt-16 pb-12">
                <nav className="flex mb-8" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <Link
                        to="/"
                        className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-800"
                      >
                        <svg
                          className="mr-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <Link
                          to="/esg-special-projects/"
                          className="ml-1 text-sm font-medium text-gray-400 hover:text-gray-800 md:ml-2"
                        >
                          ESG Special Projects
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-400 hover:text-gray-800 md:ml-2">
                          Corporate
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
                <h2 className="h2 font-playfair-display text-slate-800 mb-4">
                  ESG Special Projects
                  <br />
                  for Corporate Entities
                </h2>
                <p className="text-xl text-slate-768">
                  There will be plenty of road bumps along your ESG journey.
                  That’s why we provide customized solutions to key challenges
                  at each step in the ESG planning, tracking, and reporting
                  process. We offer a suite of services designed to address
                  common pain points across industries and functional areas.
                  Choose from our a la carte menu of ESG services or receive
                  customized advisory based on the unique qualities of your
                  company and associated pressures.
                </p>
              </div>

              {/* Section content */}
              <div className="max-w-sm md:max-w-2xl xl:max-w-3xl mx-auto grid gap-8 md:grid-cols-1 xl:grid-cols-1 xl:gap-6 items-start">
                {/* Pricing table 1 */}
                <div
                  className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="mb-4">
                    <div className="text-2xl font-bold mb-4">
                      ESG Health Check-up
                    </div>
                    <div className="text-lg text-gray-800">
                      Need to evaluate your company’s ESG performance? The ESG
                      Health Check-Up provides a holistic assessment of your
                      current performance in relation to industry peers,
                      stakeholder expectations, regulatory pressures, and
                      business risks and opportunities. Preemptively address
                      issues, reduce your risk exposure, and ensure you have the
                      foundation for long-term ESG success. Ensure you’re
                      aligned with stakeholder expectations, market trends and
                      ESG regulations.
                    </div>
                  </div>
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
                        Validate you’re focusing on the right issues for your
                        company and the broader industry
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
                        Amplify the impact of your strategy with the support of
                        ESG practitioners and domain experts
                      </span>
                    </li>
                  </ul>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                      to="/contact/"
                    >
                      Contact us for additional information or pricing
                    </Link>
                  </div>
                </div>

                {/* Pricing table 2 */}
                <div
                  className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="mb-4">
                    <div className="text-2xl font-bold mb-4">
                      ESG Communications, Reporting &amp; Disclosures
                    </div>
                    <br />
                    <div className="text-lg text-gray-800">
                      The quality of your ESG reporting has an outsized impact
                      on how your efforts are perceived by investors,
                      regulators, and rating agencies. Communicate your ESG
                      performance with credibility and technical accuracy - from
                      ESG reports to climate risk disclosures - so you can
                      provide your stakeholders with accurate and auditable
                      information.
                    </div>
                    <br />
                  </div>
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
                        Report consistent with global disclosure standards and
                        frameworks like SASB, TCFD, GRI, GRESB, UNPRI, and the
                        UNSDG's
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
                        Stay compliant with emerging ESG disclosure regulations
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
                      <span>Advance on ESG ratings and ranking systems</span>
                    </li>
                  </ul>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                      to="/contact/"
                    >
                      Contact us for additional information or pricing
                    </Link>
                  </div>
                </div>

                {/* Pricing table 4 */}
                <div
                  className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="mb-4">
                    <div className="text-2xl font-bold mb-4">
                      ESG Governance
                    </div>
                    <div className="text-lg text-gray-800">
                      ESG performance can only be achieved with commitment from
                      senior leadership and a sound governance structure. Having
                      the right policies, programs, and protocols in place will
                      ensure your efforts are scalable and sustainable - from
                      the Boardroom to the break room. Build the internal
                      structure and capabilities needed to set the foundation
                      for long-term success.
                    </div>
                  </div>
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
                        Improve the effectiveness of your Board, leadership
                        team, and workforce in driving ESG performance
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
                        Enhance internal communications, coordination, and
                        alignment across organizational silos
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
                        Engage, empower, and energize your employees to drive
                        progress on ESG commitments
                      </span>
                    </li>
                  </ul>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                      to="/contact/"
                    >
                      Contact us for additional information or pricing
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:max-w-2xl xl:max-w-3xl mb-12 mt-12 text-left sm:mx-auto">
                <Link
                  to="/esg-special-projects/"
                  className="inline-flex items-center text-base text-blue-600 font-medium hover:underline"
                >
                  <svg
                    className="w-3 h-3 fill-current text-blue-400 shrink-0 mr-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                  </svg>
                  <span>Change Option</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <NewsLetter />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Services;

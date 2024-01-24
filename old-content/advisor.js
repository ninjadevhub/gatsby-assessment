import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../../components/Header";
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
          ESG Advisory Services Overview | ESG Consulting for Advisors | Rho
          Impact
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
                <h2 className="h2 font-playfair-display text-slate-800 mb-4">
                  Advisor Services Overview
                </h2>
                <p className="text-xl text-slate-768">
                  Your clients face a wide range of ESG pressures and pain
                  points. ESG is multidisciplinary in nature and requires
                  multidisciplinary expertise, experiences, and capabilities.
                  Rho Impact partners with consulting and advisory firms to help
                  them integrate ESG into their internal operations, brand
                  positioning, and client service areas.
                </p>
              </div>

              {/* Section content */}
              <div className="max-w-sm md:max-w-2xl xl:max-w-6xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-2 xl:gap-4 items-start">
                {/* ESG as Service */}
                <div
                  className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="mb-4">
                    <div className="text-lg font-bold mb-1">
                      ESG-as-a-Service
                    </div>
                    <div className="text-lg text-gray-800 mb-12">
                    Adapt to your client’s ESG expectations and deliver results with support from Rho Impact’s advisory team and software suite.
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                      to="/esg-as-service/advisor/"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                {/* ESG Special Projects  */}
                <div
                  className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="mb-4">
                    <div className="text-lg font-bold mb-1">
                      ESG Special Projects
                    </div>

                    <div className="text-lg text-gray-800">
                      Our a la carte menu of support areas are based on our
                      decades of ESG consulting experience with clients across
                      industries and segments.
                    </div>
                    <br />
                  </div>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                      to="/esg-special-projects/advisor/"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="mt-12">
                  <Link
                    to="/services/"
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
          </div>
        </section>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Services;

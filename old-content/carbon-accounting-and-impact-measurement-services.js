import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";
import Cta from "../components/Cta";

import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

const CarbonAccounting = () => {
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
          Carbon Accounting &amp; Impact Measurement Services | IMM Consulting
          for Corporations | Rho Impact
        </title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="The Rho Impact team is serious about the science of carbon accounting, emissions, and forecasting. As a core contributor to the CRANE Tool, we are passionate about both the importance of, and need for, these activities as a way to catalyze progress towards a carbon-neutral future."
        />
        <meta
          name="keywords"
          content="impact measurement and management, impact management project, impact management services, impact change management, environmental management impact factor, imm company, carbon accounting"
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section className="bg-gradient-to-b from-white to-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h1 mb-4" data-aos="zoom-y-out">
                  Carbon Accounting and Impact Measurement Services
                </h1>
                <p className="text-xl text-gray-600">
                  You're serious about your net-zero commitments, and we're
                  serious about helping you achieve them. Whether it be your
                  emissions footprint or your impacts on local communities, an
                  impact measurement and management (IMM) system provides a systematic
                  approach to quantifying and tracking your impact progress.
                </p>
                <br />
                <p className="text-xl text-gray-600">
                  As a core contributor to
                  <a
                    className="text-blue-500 hover:text-blue-700 font-medium"
                    href="https://cranetool.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &nbsp;the CRANE Tool,&nbsp;
                  </a>
                  we continue to help advance the state of the art so we
                  can help you manage and reduce your emissions.
                </p>
              </div>

              {/* Pricing tables */}
              <div>
                <div className="max-w-sm md:max-w-xl xl:max-w-3xl mx-auto grid gap-8 md:grid-cols-1 xl:grid-cols-1 xl:gap-6 items-start">
                  {/* Pricing table 1 */}
                  <div
                    className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <div className="mb-4">
                      <div className="text-2xl font-bold mb-4">
                        Greenhouse Gas (GHG) Accounting
                      </div>
                      <div className="text-lg text-gray-800">
                        Calculate the GHG footprint of your operations, supply chains, business units, or individual products and assets.
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
                          Determine your Scope 1, 2, and 3 emissions
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
                          Identify emission ‘hot-spots' and leverage points for reduction across your operations and supply chains
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
                          Provide investor-grade data on your Net Zero performance
                        </span>
                      </li>
                    </ul>
                    <div className="border-t border-gray-200 pt-5 mt-6">
                      <Link
                        className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                        to="/contact/"
                      >
                        Assess Your Potential
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
                        Impact Measurement and Management (IMM)
                      </div>
                      <br />
                      <div className="text-lg text-gray-800">
                        Implement a systematic approach for measuring and managing your environmental, social, and economic impacts.
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
                          Create a customized IMM system specific to your material issues and stakeholder expectations
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
                          Choose a prescribed system from Rho Impact's data-base of industry-specific IMM templates
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
                          Provide investor grade data across a wide range of environmental, social, and governance issues
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

                  {/* Pricing table 4 */}
                  <div
                    className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <div className="mb-4">
                      <div className="text-2xl font-bold mb-4">
                        Forward-Looking Emission Reduction Potential (ERP) Projections
                      </div>
                      <div className="text-lg text-gray-800">
                        Assess the emissions reduction potential of your emerging technology, enterprise, product line, or portfolio investments.
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
                          Validate your impact thesis with assurable, evidence-based methodologies and calculation transparency
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
                          Provide investor grade data for every calculation, data source, and methodology
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
                          Pressure test the effectiveness and technical accuracy of your Net Zero strategy, environmental justice efforts, and TCFD reporting
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
};

export default CarbonAccounting;

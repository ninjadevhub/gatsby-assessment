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
          ESG Special Projects | ESG Consulting for Advisors | Rho Impact
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
                          Advisor
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
                <h2 className="h2 font-playfair-display text-slate-800 mb-4">
                  ESG Special Projects
                  <br />
                  for Advisors
                </h2>
                <p className="text-xl text-slate-768">
                  ESG has moved from a ‘nice-to-have’ to an absolute necessity.
                  This means more clients will be requesting ESG services to
                  support their growth and adaptation in meeting these new
                  expectations and requirements. Our a la carte menu of support
                  areas are based on our decades of ESG consulting experience
                  with clients across industries and segments. We can also
                  customize these offerings to meet the unique needs of your
                  company and your clients.
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
                      ESG Education &amp; Capacity-Building
                    </div>
                    <div className="text-lg text-gray-800">
                      ESG is THE topic of the boardroom. Yet implementation
                      typically falters due to a lack of relevant board
                      experience, organizational alignment, and workforce
                      capabilities. Up-skill your people and accelerate
                      performance through human capital management and ESG
                      capacity-building that advances your capabilities at the
                      board, manager, and individual contributor levels.
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
                        Customize internal training programs and seminars for
                        industry-specific pain points
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
                        Deploy e-learning modules that address ESG within the
                        context of your business and functional areas
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
                        Engage, educate, and energize your stakeholders with
                        proactive ESG education campaigns
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
                      ESG Practice &amp; Services Development
                    </div>
                    <br />
                    <div className="text-lg text-gray-800">
                      The ESG space is rapidly saturating. Consulting firms are
                      scrambling to capture the market opportunities with
                      existing and prospective clients. Position yourself as a
                      credible and experienced service provider with support
                      from Rho Impact. We help you build upon your current
                      expertise and capabilities, networks, and personnel to
                      help you and your clients adapt and thrive in ‘the age of
                      ESG’.
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
                        Develop your ESG brand positioning and market entry
                        strategy
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
                        Build out your ESG service offerings based on existing
                        capabilities, clients needs, and networks
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
                        Facilitate ESG capacity-building for your employees and
                        clients
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
                      Internal ESG Strategy &amp; Reporting
                    </div>
                    <div className="text-lg text-gray-800">
                      Develop and implement your firm’s own ESG strategy and
                      positioning. “Walk the walk” alongside your clients by
                      developing, implementing, and communicating on your own
                      ESG efforts and outcomes. Position your brand as a thought
                      leader in the space as you execute on the fundamentals of
                      ESG within your own organization and networks.
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
                        Identify and address your material issues and commercial
                        opportunities
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
                        Develop the ESG policies and internal governance
                        structure needed for long-term success
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
                        Deploy ESG communications and reports in alignment with
                        global disclosure standards and frameworks
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

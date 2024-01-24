import React from "react";
import { Link } from "gatsby"

function ServiceTiers() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">
              Advisory Services
            </h1>
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Rho Impact combines high-touch advisory services along with an
              ever-expanding suite of tech-enabled tooling. Our most common
              advisory services have been bundled into discrete packages to
              expedite your journey into well defined, actionable ESG practices.
            </p>
          </div>

          {/* Pricing tables */}
          <div>
            <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 items-start">
              {/* Pricing table 1 */}
              <div
                className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-4">
                    ESG Health Checkup
                  </div>
                  <div className="text-lg text-gray-800">
                    An evaluation and improvement plan regarding your
                    organization’s <span className="italic">ESG Health</span>.
                    This includes an assessment of your business and stakeholder
                    pressures, your existing efforts and outcomes, and key
                    recommendations to enhance performance and address your top
                    risks and opportunities.
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
                      Align your strategy with both market needs and stakeholder
                      expectations
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
                      Scale what’s working well and iterate on what isn’t
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
                      Achieve greater impact with less time, energy, and
                      resources
                    </span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                    to="/contact/"
                  >
                    Get your Checkup
                  </Link>
                </div>
              </div>

              {/* Pricing table 2 */}
              {/* <div
                className="relative flex flex-col h-full py-5 px-6 rounded bg-blue-100 shadow-xl border-2 border-blue-500"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-4">
                    Virtual Director of Impact
                  </div>
                  <div className="text-lg text-gray-800">
                    Engage the Rho Impact team as your company's Virtual
                    Director of Impact. We bring all our tools and services to
                    bear under one comprehensive plan.
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
                      Analysis of ESG Trends &amp; Stakeholder Expectations
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
                      Internal Interviews &amp; Inventory of Current Efforts
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
                      Recommendations to Address Top Risks &amp; Opportunities
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
                      Analysis of Unaddressed Risks &amp; Opportunities
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
                      Plans for Cultural Shifts to Enhance Performance &amp;
                      Results
                    </span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <a
                    className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                    href="#0"
                  >
                    Let's Get to Work
                  </a>
                </div>
              </div> */}

              {/* Pricing table 3 */}
              <div
                className="relative flex flex-col h-full py-5 px-6 rounded bg-blue-100 shadow-xl border-2 border-blue-500"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-4">ESG Special Projects</div>
                  <div className="text-lg text-gray-800">
                    Customized advisory at critical points along your ESG Journey. We provide expertise
                    and hands-on support in helping you execute important projects such as:
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
                      Governance development and ESG executive education for board members
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
                      Brokering critical stakeholder partnerships
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
                      Boots on the ground Implementation support
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
                      Strategic planning guidance and facilitation
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
                      Employee capacity building and ESG training programs
                    </span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                    to="/contact/"
                  >
                    Let's Get to Work
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
                    ESG Reports &amp; Disclosures
                  </div>
                  <div className="text-lg text-gray-800">
                    Communicate your company's performance with credibility and technical accuracy
                    - from ESG reports to climate risk disclosures - we'll support ESG communications
                    and reporting collateral that are comprehensive, clear, and auditable.
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
                    <span>Consistent with global disclosure standards and frameworks like
                      SASB, TCFD, GRI, GRESB, UNPRI, and the UNSDG's</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Stay compliant with emerging climate and ESG disclosure regulations</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Provide performance updates that are easy to read and understand</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                    to="/contact/"
                  >
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceTiers;

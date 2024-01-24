import React from "react";
import { Link } from "gatsby";

function AccountingTiers() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">
              Impact Measurement and Management
            </h1>
            <p className="text-xl text-gray-600">
              The Rho Impact team is serious about the science of carbon
              accounting, emissions, and forecasting. As a core contributor to
              <a href="https://cranetool.org"
                target="_blank" rel="noreferrer"
              >
                &nbsp;the CRANE Tool,&nbsp;
              </a>
              we are passionate about both the importance of, and need for, these
              activities as a way to catalyze progress towards a carbon-neutral
              future. We have a number of services geared specifically towards
              the modeling, accounting, and projection of carbon emissions.
              {/* <Link
                to="/science"
                className="text-md flex font-medium text-gray-600 hover:text-gray-900 py-2"
              >
                For more detail on how we actively participate in the growing
                body of research, methodology, and science, see our Science page
                &rarr;
              </Link> */}
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
                    Emission Reduction Assessments for
                    <br /> Emerging Enterprises
                  </div>
                  <div className="text-lg text-gray-800">
                    Assess the emission reduction potential for your emerging
                    enterprise, technology, product line, or portfolio
                    investments.
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
                      Validate your “theory of change” with evidence-based
                      methodologies and calculation transparency
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
                      Access assurance documentation for every calculation, data
                      source, and methodology
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
                      Provide investor-grade data on emission reduction
                      potential, cumulative emissions reduction potential,
                      market penetration, key calculation factors, and
                      scenario-planning
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
                className="relative flex flex-col h-full py-5 px-6 rounded bg-blue-100 shadow-xl border-2 border-blue-500"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-4">
                    Greenhouse Gas (GHG) Accounting &amp; Footprinting{" "}
                  </div>
                  <br />
                  <div className="text-lg text-gray-800">
                    Calculate the GHG footprint of your operations, supply
                    chains, business units, business lines, or individual
                    products and assets.
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
                      Calculate your total emissions footprint for each Greenhouse Gas
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
                      Calculate the emission intensity of individual products,
                      facilities, or business lines
                    </span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                    to="/contact/"
                  >
                    Get Your Footprint
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
                    Scope 3 Emission Assessments and Value-Chain Footprinting
                  </div>
                  <div className="text-lg text-gray-800">
                    Calculate your scope 3 emissions and identify your greatest
                    emission sources, blind spots and risks, and leverage points
                    to maximize emission reductions across your supply chains.
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
                      Determine your greatest emission drivers and identify
                      leverage points to maximize reductions
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
                      Identify your supply chain’s sustainability champions,
                      sustainability laggards, and the associated risks and
                      opportunities they present
                    </span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-700 w-full"
                    to="/contact/"
                  >
                    Understand Scope 3
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

export default AccountingTiers;

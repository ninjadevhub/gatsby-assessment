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
          Corporate ESG Strategy &amp; Advisory Services | Rho Impact
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
                  What is your Corporate ESG Strategy?
                </h2>
                <p className="text-xl text-slate-768">
                  Corporate ESG performance is the ultimate team sport. Adapting
                  to today's stakeholder expectations, changing business
                  conditions and emerging disclosure regulations is
                  labor-intensive, complex, and messy.
                </p>
                <br />
                <p className="text-xl text-slate-768">
                  Rho Impact has decades of experience in ESG consulting,
                  greenhouse gas (GHG) accounting, and impact measurement and
                  management. We provide the ESG advisory, software, and
                  issue-specific expertise to help you adapt and thrive in the
                  new normal of business without the hefty price tag.
                </p>
                <br />
                <p className="text-xl text-slate-768">
                  These are our most requested consulting packages, but our
                  services span additional capabilities. If you don't see what
                  you're looking for, contact us and we would be happy to
                  discuss additional options.
                </p>
              </div>

              {/* Section content */}
              <div className="max-w-sm md:max-w-2xl xl:max-w-6xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-4 items-start">
                {/* ESG as Service */}
                <div
                  className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="mb-4">
                    <div className="text-lg font-bold mb-8">
                      ESG-as-a-Service
                    </div>
                    <div className="text-lg text-gray-800">
                      The Rho Impact “ESG-as-a-Service” combines ESG advisory,
                      software, and hands-on implementation support. We function
                      as your outsourced ESG department, dedicated to
                      translating your ESG aspirations into action and results.
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                      to="/esg-as-service/corporate/"
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
                    <div className="text-lg font-bold mb-8">
                      ESG Special Projects
                    </div>

                    <div className="text-lg text-gray-800">
                      There will be plenty of road bumps along your ESG journey.
                      That's why we provide customized solutions to key
                      challenges at each step in the ESG planning, tracking, and
                      reporting process.
                    </div>
                    <br />
                  </div>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                      to="/esg-special-projects/corporate/"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                {/* Carbon Accounting*/}
                <div
                  className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="mb-4">
                    <div className="text-lg font-bold mb-1">
                      Carbon Accounting &amp; Impact Measurement
                    </div>
                    <div className="text-lg text-gray-800">
                      Whether it be your emissions footprint or your impacts on
                      local communities, an impact measurement and management (IMM)
                      system provides a systematic approach to quantifying and
                      tracking your impact progress.
                    </div>
                    <br />
                  </div>
                  <div className="border-t border-gray-200 pt-5 mt-6">
                    <Link
                      className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                      to="/carbon-accounting-and-impact-measurement-services/"
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

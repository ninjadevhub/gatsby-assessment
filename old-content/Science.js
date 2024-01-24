import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Link } from "gatsby";

const Science = () => {
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
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4">Science &amp; Methodology</h1>
                <p className="text-xl text-gray-600">
                  As a core contributor to the CRANE Tool, we are passionate
                  about both the importance of and need for these activities as
                  a way to catalyze progress towards a carbon-neutral future. We
                  have a number of services geared specifically towards the
                  modeling, impact measurement and management, and projection of
                  carbon emissions.
                  <Link
                    to="/imm-services/"
                    className="text-md flex font-medium text-gray-600 hover:text-gray-900 py-2"
                  >
                    See our impact measurement and management services as well
                    for on-demand Emissions Reduction Potential (ERP) analysis,
                    footprinting, and more.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <p className="text-xl text-gray-600">SCIENCE CONTENT HERE!!!</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Science;

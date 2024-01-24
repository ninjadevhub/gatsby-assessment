import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Transition from "../utils/Transition";
import CtaProduct from "../components/CtaProduct";

import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

const Products = () => {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

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

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Helmet>
        <title>
          CRANE Tool | Forward-Looking Carbon Impact Analysis | Rho Impact
        </title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="CRANE was built for anyone assessing the emissions reduction potential of their investments – early-stage investors, incubators, accelerators, government agencies, large corporations, philanthropists and more."
        />
        <meta
          name="keywords"
          content="environmental projection software, impact analytics, carbon accounting, carbon accounting software, climate analytics, carbon analytics, emissions analytics"
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <br />
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <section>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div
              className="mt-12 md:pt-20 mb-12"
              style={{ overflow: "hidden" }}
            >
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <a
                  className="h2 mb-4 text-green-500 hover:text-green-600"
                  href="https://cranetool.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  CRANE Tool - Forward-Looking Emissions Assessment Software
                </a>
                <p className="text-xl text-gray-600">
                  <br />
                  Designed as an open-access and free tool, CRANE was built for anyone
        assessing the emissions reduction potential of innovative technologies
        or companies– early-stage investors, incubators, accelerators,
        government agencies, large corporations, philanthropists and more.
                </p>
              </div>

              {/* Section content */}
              <div className="md:grid md:grid-cols-12 md:gap-6">
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                  data-aos="fade-right"
                >
                  {/* Tabs buttons */}
                  <div className="mb-8 md:mb-0">
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 1
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">
                        Comprehensive Taxonomy
                        </div>
                        <div className="text-gray-600">
                        CRANE’s goal is to provide users with as many technology
                solutions as possible, covering most industries that touch
                greenhouse gas emissions.
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 2
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(2);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">
                        Robust Methodology
                        </div>
                        <div className="text-gray-600">
                        CRANE aggregates data for you so you don’t need to reinvent the
                wheel every time you want to assess climate impact for a new
                technology.
                        </div>
                      </div>
                    </a>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 3
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(3);
                      }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">
                        Standard Output Reports
                        </div>
                        <div className="text-gray-600">
                        You can choose to view annual emissions reduction potential,
                cumulative emissions reduction potential, market penetration,
                key calculation factors, and a heat map of likely scenarios.
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Tabs items */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  <div className="relative flex flex-col text-center lg:text-right">
                    {/* Item 1 */}
                    <Transition
                      show={tab === 1}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterStart="opacity-0 translate-y-16"
                      enterEnd="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveStart="opacity-100 translate-y-0"
                      leaveEnd="opacity-0 -translate-y-16"
                    >
                      <div className="relative inline-flex flex-col">
                        <img
                          className="md:max-w-none mx-auto rounded"
                          src={
                            require("../images/features-home-bg-04.png").default
                          }
                          width="500"
                          height="375"
                          alt="Features bg"
                        />
                        {/* <img
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={
                          require("../images/features-home-element-01.png")
                            .default
                        }
                        width="500"
                        height="147"
                        alt="Element 01"
                        style={{ top: "22%" }}
                      />
                      <img
                        className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                        src={
                          require("../images/features-home-element-03.png")
                            .default
                        }
                        width="500"
                        height="167"
                        alt="Element 03"
                        style={{ top: "77%" }}
                      /> */}
                      </div>
                    </Transition>
                    {/* Item 2 */}
                    <Transition
                      show={tab === 2}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterStart="opacity-0 translate-y-16"
                      enterEnd="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveStart="opacity-100 translate-y-0"
                      leaveEnd="opacity-0 -translate-y-16"
                    >
                      <div className="relative inline-flex flex-col">
                        <img
                          className="md:max-w-none mx-auto rounded"
                          src={
                            require("../images/features-home-bg-05.png").default
                          }
                          width="500"
                          height="375"
                          alt="Features bg"
                        />
                        {/* <img
                        className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                        src={
                          require("../images/features-home-element-03.png")
                            .default
                        }
                        width="500"
                        height="167"
                        alt="Element 03"
                        style={{ top: "18%" }}
                      />
                      <img
                        className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
                        src={
                          require("../images/features-home-element-02.png")
                            .default
                        }
                        width="500"
                        height="158"
                        alt="Element 02"
                        style={{ top: "40%" }}
                      />
                      <img
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={
                          require("../images/features-home-element-01.png")
                            .default
                        }
                        width="500"
                        height="147"
                        alt="Element 01"
                        style={{ top: "79%" }}
                      /> */}
                      </div>
                    </Transition>
                    {/* Item 3 */}
                    <Transition
                      show={tab === 3}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterStart="opacity-0 translate-y-16"
                      enterEnd="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveStart="opacity-100 translate-y-0"
                      leaveEnd="opacity-0 -translate-y-16"
                    >
                      <div className="relative inline-flex flex-col">
                        <img
                          className="md:max-w-none mx-auto rounded"
                          src={
                            require("../images/features-home-bg-06.png").default
                          }
                          width="500"
                          height="375"
                          alt="Features bg"
                        />
                        {/* <img
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={
                          require("../images/features-home-element-01.png")
                            .default
                        }
                        width="500"
                        height="147"
                        alt="Element 01"
                        style={{ top: "22%" }}
                      />
                      <img
                        className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
                        src={
                          require("../images/features-home-element-02.png")
                            .default
                        }
                        width="500"
                        height="158"
                        alt="Element 02"
                        style={{ top: "39%" }}
                      />
                      <img
                        className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
                        src={
                          require("../images/features-home-element-03.png")
                            .default
                        }
                        width="500"
                        height="167"
                        alt="Element 03"
                        style={{ top: "77%" }}
                      /> */}
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ clear: "both" }}></div>
        </section>
        <CtaProduct
                    url="https://cranetool.org"
                    url_text="Learn More"
                    signupUrl="https://auth.rho.ai/auth/realms/CRANE/protocol/openid-connect/registrations?client_id=cranetool&response_type=code&scope=openidemail&redirect_uri=https://app.cranetool.org"
                    signupUrl_text="Get Started"
                    cta_text="Estimate your carbon reduction potential"
                    color="green"
        />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Products;

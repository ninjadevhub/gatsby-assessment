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
                    ESG Impact Program &amp; Due Diligence Benchmarking | Rho Impact
                </title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="Expert-designed platform to guide you and your organization through each critical step in the planning, tracking, and reporting on your ESG strategy and impacts."
                />
                <meta
                    name="keywords"
                    content="esg program, esg impact, esg due diligence, esg data management, esg benchmarking, esg data platform, esg platform, environmental projection software, esg artificial intelligence, esg platform"
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
                                    className="h2 mb-4 text-purple-600 hover:text-purple-800"
                                    href="https://esgprogram.io"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ESGProgram.io
                                </a>
                                <p className="text-xl text-gray-600">
                                    <br />
                                    Expert-designed platform to guide you and your organization
                                    through each critical step in the planning, tracking, and
                                    reporting on your ESG strategy and impacts.
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
                                            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1
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
                                                    Begin Immediately
                                                </div>
                                                <div className="text-gray-600">
                                                    Plan, track, and report on an enterprise ESG program,
                                                    no matter what your starting point is. Our systems are
                                                    designed based on our decades of experience
                                                    implementing ESG programs at Fortune 500s, local
                                                    municipalities, and everything in between.
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2
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
                                                    Maximize Your Impact
                                                </div>
                                                <div className="text-gray-600">
                                                    Organize your data, track policies and training, and
                                                    engage your stakeholders through automated systems and
                                                    task management tools that address the key barriers to
                                                    ESG performance. Automatically classify your files in
                                                    relevant and non-relevant documents using our Document
                                                    Discovery tool.
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3
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
                                                    Built for Everyone
                                                </div>
                                                <div className="text-gray-600">
                                                    ESGProgram.io was created to democratize global access
                                                    to ESG expertise and tooling. Our products are the
                                                    combination of decades of experience in ESG
                                                    consulting, software engineering, and data science,
                                                    all designed to empower organizations to act now and
                                                    with confidence.
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
                                                        require("../images/features-home-bg-01.png").default
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
                                                        require("../images/features-home-bg-02.png").default
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
                                                        require("../images/features-home-bg-03.png").default
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
                    url="https://esgprogram.io"
                    url_text="Learn More"
                    signupUrl="https://app.rhoimpact.com/signup"
                    signupUrl_text="Get Started Free"
                    cta_text="Are you ready to launch your ESGProgram?"
                    color="purple"
                />
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    );
};

export default Products;

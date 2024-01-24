import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroBlockDark from '../../components/HeroBlockDark';
import HeroImage from '../../images/case-studies-hero.jpg';
import EclipseThumb from '../../images/case-studies/eclipse-arc-boats.jpg';
import ECOThumb from '../../images/case-studies/eco-framework.png';
import Cta from "../../components/Cta";

import { Helmet } from "react-helmet";
import orgSchema from "../../orgSchema.json";

const CaseStudiesIndex = () => {
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
                <title>Case Study | Rho Impact</title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="2023 Eclipse Carbon Optimization (ECO) Report"
                />
                <meta name="keywords" content="robotic inspection, impact forecasting, impact modeling, impact forecasting case studies" />
                <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
            </Helmet>
            {/*  Site header */}
            <NavBar theme='dark' />

            {/*  Page content */}
            <main className="flex-grow">

                <HeroBlockDark
                    heroImage={HeroImage}
                    titleText="2023 Eclipse Carbon Optimization (ECO) Report"
                    subtitleText=""
                />

                <article className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-12 md:pt-12">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
                            <span className="h2 font-playfair-display text-slate-800 mb-4">Summary</span>
                            <p className="text-lg text-gray-600 italic mt-8">
                                Rho Impact worked with <a href="https://eclipse.vc"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-500 hover:text-emerald-600">
                                    Eclipse
                                </a> to establish the <a href="https://eco.rhoimpact.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-500 hover:text-emerald-600">ECO Framework</a>,
                                which leverages <a href="https://cranetool.org"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-500 hover:text-emerald-600">CRANE</a>
                                &nbsp;(an open software tool) to assess the
                                environmental impact of early-stage ventures. The model
                                estimates carbon reduction much like an investor would
                                evaluate an investment's future revenue and profit potential,
                                making it widely applicable and powerful.
                            </p>
                        </div>
                    </div>
                    <br />
                    <p className="text-xl text-center pb-6">
                        The ECO Framework comprises three key elements to estimate:
                    </p>
                    <ol className="text-lg list-none max-w-3xl mx-auto pb-12 px-4 md:pb-12">
                        <li className="mt-4 mb-4">
                            <span className="text-xl"><b>01</b>&nbsp;&nbsp;&nbsp;Total Market Emissions</span><br />
                            <div className="pl-9 text-slate-600">The estimated total GHG emissions in the market(s) addressed by an Eclipse portfolio technology.</div>
                        </li>
                        <li className="mt-4 mb-4">
                            <span className="text-xl"><b>02</b>&nbsp;&nbsp;&nbsp;Reduction Potential</span><br />
                            <div className="pl-9 text-slate-600">The estimated GHG intensity reduction (%) per unit of good or service of an Eclipse portfolio technology.</div>
                        </li>
                        <li className="mt-4 mb-4">
                            <span className="text-xl"><b>03</b>&nbsp;&nbsp;&nbsp;Penetration Rate by 2050</span><br />
                            <div className="pl-9 text-slate-600">The estimated market penetration rate of a company technology by 2050.</div>
                        </li>
                    </ol>

                </article>

                <section className="relative">
                    {/* Section background (needs .relative class on parent and next sibling elements) */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 pointer-events-none mb-12"
                        aria-hidden="true"
                    ></div>

                    {/* Vertical gray line */}
                    <div
                        className="absolute left-0 right-0 top-4 m-auto w-px p-px h-14 bg-gray-300 transform -translate-y-1/2"
                    ></div>

                    <div className="relative max-w-3xl mx-auto pt-12 w-11/12 pb-6 md:pb-6">
                        <div className="h2 font-playfair-display text-slate-800 my-10 text-center">
                            Learn More About ECO
                        </div>
                        <div
                            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 items-start md:max-w-2xl text-center"
                            data-aos-id-blocks
                        >
                            <a href="https://eco.rhoimpact.com"
                                target="_blank"
                                rel="noreferrer"
                                className="relative flex flex-col p-6 rounded shadow-xl bg-slate-300 hover:shadow-2xl"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                {/* 1st item */}
                                <div
                                    className="relative flex flex-col p-6 bg-white rounded shadow-xl bg-no-repeat bg-center"
                                    style={{ backgroundImage: `url(${ECOThumb})` }}
                                    data-aos="zoom-y-out"
                                    data-aos-anchor="[data-aos-id-blocks]"
                                >
                                    <h4 className="text-2xl font-bold leading-snug tracking-tight text-white mt-16 mb-16">
                                        <br />
                                        Download the<br />ECO Framework
                                        <br />
                                    </h4>
                                </div>
                            </a>
                            <a href="https://bit.ly/45xki8U"
                                target="_blank"
                                rel="noreferrer"
                                className="relative flex flex-col p-6 rounded shadow-xl bg-slate-300 hover:shadow-2xl"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                {/* 1st item */}
                                <div
                                    className="relative flex flex-col p-6 bg-white rounded shadow-xl bg-no-repeat bg-center"
                                    style={{ backgroundImage: `url(${EclipseThumb})` }}
                                    data-aos="zoom-y-out"
                                    data-aos-anchor="[data-aos-id-blocks]"
                                >
                                    <h4 className="text-2xl font-bold leading-snug tracking-tight text-white mt-16 mb-16">
                                        <br />Read the<br />ECO Report<br />
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>

                </section>
                <br />
                <br />
                <Cta />
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    );
};

export default CaseStudiesIndex;
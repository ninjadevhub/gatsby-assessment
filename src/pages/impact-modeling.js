import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import QuantifyImpactCTABlock from "../components/QuantifyImpactCTABlock";
import ImpactModelHighlights from "../components/ImpactModelHighlights";
import HeroBlockDark from '../components/HeroBlockDark';
import HeroImage from '../images/anne-nygard-unsplash.jpg';
import CtaAlternative from "../components/CtaAlternative";
import Testimonial from '../components/Testimonial';

import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

const ImpactModeling = () => {

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
            <Helmet>
                <title>
                    Impact Modeling | Rho Impact
                </title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="Impact modeling to quantify your company's impact on the planet and stakeholders."
                />
                <meta
                    name="keywords"
                    content="impact modeling, esg, esg strategy, impact data, impact data management, environmental projection software, esg artificial intelligence, quantify impact"
                />
                <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
            </Helmet>
            <NavBar theme="dark" />
            {/*  Page content */}
            <main className="flex-grow">
                {/* <HeroBlockDark
                    heroImage={HeroImage}
                    titleText="Company and Portfolio<br />Impact Modeling"
                    subtitleText=""
                    opacityClass="opacity-75"
                /> */}
                <QuantifyImpactCTABlock />
                {/* <ImpactModelHighlights /> */}
                <section className="bg-slate-100">
                    <div className="max-w-6xl px-4 mx-auto sm:px-6">
                        <div className="pt-12 md:pt-20">
                            {/* Section callout */}
                            <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
                                <h2 className="h2 text-slate-800">
                                    Forecast your impact (e.g. emissions, water, waste)
                                    to win new bids, raise new capital,
                                    and keep up with the impact economy.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
                    <div className="py-4">
                        {/* Line */}
                        <div
                            className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-300"
                            aria-hidden="true"
                        ></div>
                    </div>
                </div>
                <Testimonial showNumbers={[5]} />
                <CtaAlternative />
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    );
};

export default ImpactModeling;

import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import { focusHandling } from "cruip-js-toolkit";
import AOS from "aos";
import Sticky from "sticky-js";
import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCards from '../components/PricingCards';
import FeaturesTableApp from '../components/FeaturesTableApp';


const Pricing = () => {
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
                    Gemini Pricing | Rho Impact
                </title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="Expert-designed platform to guide you and your organization through each critical step in the planning, tracking, and reporting on your ESG strategy and impacts."
                />
                <meta
                    name="keywords"
                    content="esg program, esg impact, esg due diligence, esg data management, impact data, impact data management, esg benchmarking, esg data platform, esg platform, environmental projection software, esg artificial intelligence, esg platform"
                />
                <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
            </Helmet>
            <br />
            <Header />
            <PricingCards />
            <FeaturesTableApp />
            {/*  Site footer */}
            <Footer />
        </div>
    );
};


export default Pricing;

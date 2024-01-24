import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FeaturesZigZagApp from "../components/FeaturesZigZagApp";
import CtaAlternative from "../components/CtaAlternative";
import Testimonial from '../components/Testimonial';

import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

const Products = () => {

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
                    Platform Overview | Rho Impact
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
            <NavBar />
            {/*  Page content */}
            <main className="flex-grow">

                <FeaturesZigZagApp />

                <Testimonial showNumbers={[4]} />
                <CtaAlternative />
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    );
};

export default Products;

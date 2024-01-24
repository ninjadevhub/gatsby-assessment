import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HeroBlockDark from '../../components/HeroBlockDark';
import HeroImage from '../../images/case-studies-hero.jpg';
import Cta from "../../components/Cta";
import CaseStudyDownload from "../../components/CaseStudyDownload";

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
                    content="The Role of Robotic Inspections in Advancing the Sustainability Performance of Today's Energy Infrastructure"
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
                    titleText="The Role of Robotic Inspections in Advancing the Sustainability Performance of Today's Energy Infrastructure"
                    subtitleText=""
                />

                <article className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-12 md:pt-12">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
                            <span className="h2 font-playfair-display text-slate-800 mb-4">Summary</span>
                            <p className="text-lg text-gray-600 italic mt-8">
                                This case study examines potential systemwide reductions
                                in carbon emissions from the increased use of robotic
                                inspections to prevent boiler tube failures.
                            </p>
                        </div>
                    </div>
                    <br />
                    <p className="text-xl pb-12">
                        A range of innovations have emerged focused on our global
                        transition to a net zero economy.  From electric planes to direct
                        air capture, these technologies present promising solutions to our
                        net zero aspirations and can be complemented by solutions that
                        reduce the emissions associated with today's infrastructure.
                        This case study examines the use of robotic inspections in
                        improving the efficiency, resilience, and sustainability
                        performance of today's energy infrastructure.
                    </p>
                    <p className="text-xl">
                        Natural gas and coal power plants provide the bulk of the global
                        power generated for electrical grids; however, this critical
                        infrastructure is aging, leading to forced outages. These
                        outages threaten plants' ability to reliably produce energy on
                        demand and typically lead to increased CO<sub>2</sub> emissions through the use of
                        back-up generation. This study finds that, by decreasing the occurrence of forced outages,
                        robotic inspections and decision-making software may provide
                        several concrete benefits if they were to be rapidly adopted:
                    </p>
                    <br />
                    <ul className="text-lg list-disc max-w-3xl mx-auto pb-12 px-4 md:pb-12">
                        <li className="mt-4 mb-4">
                            Robotic inspections combined with decision making software
                            have the potential to reduce global CO<sub>2</sub> emissions
                            by 52-230 million metric tons (MMT)
                            CO<sub>2</sub> annually if they were to be deployed
                            immediately and at a global scale. For comparison, this is
                            equivalent to eliminating between <strong>1.1%-4.8% of annual emissions in the U.S.</strong> By
                            identifying corrosion before it leads to unplanned downtime,
                            robotic inspections help power plants reduce their reliance
                            on backup generation.
                        </li>
                        <li className="mt-4 mb-4">
                            Robotic inspections that eliminate boiler tube failures could
                            lead to, on average, <strong>32% lower CO<sub>2</sub> emissions</strong> per
                            unit of electricity generated by keeping base load generators in
                            service rather than relying on more GHG intensive peaker plants and
                            other forms of backup generation.
                        </li>
                        <li className="mt-4 mb-4">
                            These technologies are commercially available today and could
                            have an immediate impact on the boiler tube failure if deployed at scale.
                        </li>
                    </ul>

                </article>

                <CaseStudyDownload
                    downloadLink="https://bit.ly/3rkpq2d"
                    caseStudyTitle="The Role of Robotic Inspections in Advancing the Sustainability Performance of Today's Energy Infrastructure"
                />
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
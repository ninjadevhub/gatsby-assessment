import React from "react";
import { Link } from "gatsby";

function CaseStudyGrid() {
    return (
        <section className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-slate-100 pointer-events-none mb-16"
                aria-hidden="true"
            ></div>

            {/* Vertical gray line */}
            <div
                className="absolute left-0 right-0 top-4 m-auto w-px p-px h-14 bg-gray-300 transform -translate-y-1/2"
            ></div>

            {/* How It Works */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2 font-playfair-display text-slate-800 mb-4">See Rho Impact's <span className="text-emerald-500">rigorous and pragmatic modeling</span> approaches in real-world use cases.</h2>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none text-center"
                        data-aos-id-blocks
                    >
                        <Link
                            to="/case-studies/2023-eco-report"
                            className="relative flex flex-col p-6 rounded shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
                            data-aos="zoom-y-out"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            {/* 1st item */}
                            <div
                                className="relative flex flex-col p-6 bg-white rounded shadow-xl hover:bg-opacity-90"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <h4 className="text-xl font-bold leading-snug tracking-tight mt-16 mb-16">
                                    2023 Eclipse Carbon Optimization (ECO) Report
                                </h4>
                            </div>
                        </Link>

                        <Link
                            to="/case-studies/robotic-inspections-in-advancing-sustainability-performance"
                            className="relative flex flex-col p-6 rounded shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
                            data-aos="zoom-y-out"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            <div
                                className="relative flex flex-col p-6 bg-white rounded shadow-xl hover:bg-opacity-90"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <h4 className="text-xl font-bold leading-snug tracking-tight mt-6 mb-6">
                                    The Role of Robotic Inspections in Advancing the Sustainability Performance of Today's Energy Infrastructure
                                </h4>
                            </div>
                        </Link>

                        <div
                            className="relative flex flex-col p-6 rounded shadow-xl bg-gradient-to-r from-gray-800 to-gray-500"
                            data-aos="zoom-y-out"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            {/* 2nd item */}
                            <div
                                className="relative flex flex-col p-6 bg-white rounded shadow-xl hover:bg-opacity-90"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <h4 className="text-xl font-bold leading-snug tracking-tight mt-6 mb-6">
                                    The Role of Next-Generation Batteries in Reducing Transportation Emissions
                                </h4>
                                <p className="text-gray-600 italic mb-1">
                                    Coming soon...
                                </p>
                            </div>
                        </div>

                        <div
                            className="relative flex flex-col p-6 rounded shadow-xl bg-gradient-to-r from-gray-800 to-gray-500"
                            data-aos="zoom-y-out"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            {/* 3rd item */}
                            <div
                                className="relative flex flex-col p-6 bg-white rounded shadow-xl hover:bg-opacity-90"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <h4 className="text-xl font-bold leading-snug tracking-tight mt-6 mb-6">
                                    The Impact of ESG Training Programs in Advancing Global Sustainability Commitments.
                                </h4>
                                <p className="text-gray-600 italic mb-1">
                                    Coming soon...
                                </p>
                            </div>
                        </div>

                        <div
                            className="relative flex flex-col p-6 rounded shadow-xl bg-gradient-to-r from-gray-800 to-gray-500"
                            data-aos="zoom-y-out"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            {/* 5th item */}
                            <div
                                className="relative flex flex-col p-6 bg-white rounded shadow-xl hover:bg-opacity-90"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >

                                <h4 className="text-xl font-bold leading-snug tracking-tight mt-6 mb-6">
                                    Opportunities for Biomass Valorization to Address Renewable Energy Intermittency
                                </h4>
                                <p className="text-gray-600 italic mb-1">
                                    Coming soon...
                                </p>
                            </div>
                        </div>

                        <div
                            className="relative flex flex-col p-6 rounded shadow-xl bg-gradient-to-r from-gray-800 to-gray-500"
                            data-aos="zoom-y-out"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            {/* 2nd item */}
                            <div
                                className="relative flex flex-col p-6 bg-white rounded shadow-xl hover:bg-opacity-90"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <h4 className="text-xl font-bold leading-snug tracking-tight mt-20 mb-20">
                                    More Soon!
                                </h4>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    );
}

export default CaseStudyGrid;

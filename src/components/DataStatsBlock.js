import React from "react";

function DataStatsBlock() {
    return (
        <section className="relative bg-white">
            {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 pointer-events-none mb-16"
                aria-hidden="true"
            ></div>
            {/* End section background */}

            {/* 3 Boxes */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-4 md:py-4">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2 text-gray-100 mb-4 mt-8">
                            Answer the Hard Questions
                        </h2>
                        <p className="text-xl text-gray-200">
                            {/* We are setting the bar for <b>data quality and auditability</b>.
                            Articulate your impact with confidence in the numbers and
                            the research that backs them. */}
                            <span className="leading-loose">"<em><strong>
                                How can investment scale decarbonization solutions and accelerate growth?
                            </strong></em>"</span>
                            <br />
                            <span className="leading-loose">"<em><strong>
                                How does a product impact my Net-Zero goals?
                            </strong></em>"</span>
                            <br />
                            <span className="leading-loose">
                                "<em><strong>
                                    How will a technology reduce emissions compared
                                    to the status quo?
                                </strong></em>"
                            </span>
                            <br /><br />
                            These are complex questions. They're also
                            increasingly required to win and maintain your customers
                            and investors. We have you covered and provide the
                            world's most verifiable and auditable impact forecasts.
                        </p>
                    </div>
                    {/* Items */}
                    <div className="relative max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

                        {/* 1st item */}
                        <div className="relative grid grid-cols-6 bg-slate-800 text-gray-100 shadow-xl" data-aos="zoom-y-out">
                            <div className="col-span-1 p-4 border-t border-r border-l border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                    <path fill="#fff" d="M459.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 276.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l160-160zm-352 160l160-160c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 84.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
                                </svg>
                            </div>
                            <div className="col-span-5 p-4 border-t border-r border-gray-400">
                                <h4 className="text-xl font-light leading-snug tracking-tight text-center">
                                    Impact Models Delivered
                                </h4>
                            </div>
                            <div className="text-gray-200 text-center items-center col-span-6 p-8 border border-b-4 border-gray-400">
                                <h2 className="h2 text-7xl font-bold">
                                    300+
                                </h2>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="relative grid grid-cols-6 bg-slate-800 text-gray-100 shadow-xl" data-aos="zoom-y-out">
                            <div className="col-span-1 p-4 border-t border-r border-l border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                    <path fill="#fff" d="M459.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 276.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l160-160zm-352 160l160-160c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 84.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
                                </svg>
                            </div>
                            <div className="col-span-5 p-4 border-t border-r border-gray-400">
                                <h4 className="text-xl font-light leading-snug tracking-tight text-center">
                                    Verified Research Sources
                                </h4>
                            </div>
                            <div className="text-gray-200 text-center items-center col-span-6 p-8 border border-b-4 border-gray-400">
                                <h2 className="h2 text-7xl font-bold">
                                    1,500+
                                </h2>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="relative grid grid-cols-6 bg-slate-800 text-gray-100 shadow-xl" data-aos="zoom-y-out">
                            <div className="col-span-1 p-4 border-t border-r border-l border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                    <path fill="#fff" d="M459.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 276.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l160-160zm-352 160l160-160c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 84.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
                                </svg>
                            </div>
                            <div className="col-span-5 p-4 border-t border-r border-gray-400">
                                <h4 className="text-xl font-light leading-snug tracking-tight text-center">
                                    Reusable Data Points
                                </h4>
                            </div>
                            <div className="text-gray-200 text-center items-center col-span-6 p-8 border border-b-4 border-gray-400">
                                <h2 className="h2 text-7xl font-bold">
                                    180k+
                                </h2>
                            </div>
                        </div>

                        {/* 4th item */}
                        {/* <div className="relative grid grid-cols-6 bg-slate-800 text-gray-100 shadow-xl" data-aos="zoom-y-out">
                            <div className="col-span-1 p-4 border-t border-r border-l border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                    <path fill="#fff" d="M459.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 276.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l160-160zm-352 160l160-160c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 84.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
                                </svg>
                            </div>
                            <div className="col-span-5 p-4 border-t border-r border-gray-400">
                                <h4 className="text-xl font-light leading-snug tracking-tight text-center">
                                    Emissions Modeled
                                </h4>
                            </div>
                            <div className="text-gray-200 text-center items-center col-span-6 p-8 border border-b-4 border-gray-400">
                                <h2 className="h2 text-7xl font-bold">
                                    3,720<small className="text-sm">MMTCO2e</small>
                                </h2>
                            </div>
                        </div> */}

                        {/* 5th item */}
                        {/* <div className="relative grid grid-cols-6 bg-slate-800 text-gray-100 shadow-xl" data-aos="zoom-y-out">
                            <div className="col-span-1 p-4 border-t border-r border-l border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                    <path fill="#fff" d="M459.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 276.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l160-160zm-352 160l160-160c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 84.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
                                </svg>
                            </div>
                            <div className="col-span-5 p-4 border-t border-r border-gray-400">
                                <h4 className="text-xl font-light leading-snug tracking-tight text-center">
                                    Capital Raised
                                </h4>
                            </div>
                            <div className="text-gray-200 text-center items-center col-span-6 p-8 border border-b-4 border-gray-400">
                                <h2 className="h2 text-7xl font-bold">
                                    $1.5B
                                </h2>
                            </div>
                        </div> */}

                        {/* 6th item */}
                        {/* <div className="relative grid grid-cols-6 bg-slate-800 text-gray-100 shadow-xl" data-aos="zoom-y-out">
                            <div className="col-span-1 p-4 border-t border-r border-l border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ maxWidth: '40px', maxHeight: '40px', padding: '0 0 5px 0' }}>
                                    <path fill="#fff" d="M459.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 276.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l160-160zm-352 160l160-160c6.2-6.2 6.2-16.4 0-22.6l-160-160c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 84.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
                                </svg>
                            </div>
                            <div className="col-span-5 p-4 border-t border-r border-gray-400">
                                <h4 className="text-xl font-light leading-snug tracking-tight text-center">
                                    Portfolio AUM
                                </h4>
                            </div>
                            <div className="text-gray-200 text-center items-center col-span-6 p-8 border border-b-4 border-gray-400">
                                <h2 className="h2 text-7xl font-bold">
                                    $180B
                                </h2>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section >
    );
}

export default DataStatsBlock;

import React from "react";
import { Link } from "gatsby";

function ServicesHighlights() {
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
                        {/* <h2 className="h2 font-playfair-display text-slate-800 mb-4">We offer high-quality impact <span className="text-emerald-500">analytics</span>.</h2> */}
                        <h2 className="h2 font-playfair-display text-slate-800 mb-4">What are <span className="text-emerald-500">impact and ESG advisory</span> services? Can't software handle it all?</h2>
                        <p className="text-xl text-slate-500">
                            We're glad you asked! While software can help (a lot), it can't do everything.
                            We have results orientation based on decades of doing this work,
                            so we know how to get the most out of all available data and tools.
                            Our team of experts help cut time and effort, contextualize the data,
                            and build capacity within your team so you can get the job done.
                            {/* Impact and Environmental, Social, and Governance (ESG) issues are wide-ranging and take more than simple dashboards. Rho Impact provides tailor-made solutions that combine software with experts in order to help organizations of any size. */}
                        </p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks
                    >
                        {/* 1st item */}
                        <div
                            className="relative flex flex-col p-6 bg-white rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 640 512">
                                <path fill="#268ae8" d="M512 64V320h96V96c0-17.7-14.3-32-32-32H512zm-32 0H384V192h96V64zM352 64H288V320h64V64zm-96 0H160V192h96V64zM128 64H64C46.3 64 32 78.3 32 96V320h96V64zM32 352v64c0 17.7 14.3 32 32 32H304V352H32zm304 96H576c17.7 0 32-14.3 32-32V352H336v96zM0 96C0 60.7 28.7 32 64 32H576c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM256 320V224H160v96h96zm224-96H384v96h96V224z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Design an Actionable &amp; Evidence-Based Impact Strategy
                            </h4>
                            <p className="text-gray-600">
                                Create an ESG, Net Zero, Sustainability, or Specific Impact
                                Strategy. Rho Impact guides you from start to finish.
                            </p>
                        </div>

                        {/* 2nd item */}
                        <div
                            className="relative flex flex-col p-6 bg-white rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-delay="150"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 512 512">
                                <path fill="#268ae8" d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V400c0 44.2 35.8 80 80 80H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48V48zM368 96h57.4L288 233.4l-68.7-68.7c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 198.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0L448 118.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0 288h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v57.4l-68.7-68.7-22.6 22.6L425.4 352H368c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Forecast Your Triple Bottom-Line Impacts
                            </h4>
                            <p className="text-gray-600">
                                Forecast the environmental, social &amp; economic impacts of
                                your strategy in a variety of scenarios specific to you.
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div
                            className="relative flex flex-col p-6 bg-white rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-delay="300"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 576 512">
                                <path fill="#268ae8" d="M354.1 64c-5.6 0-10.8 2.9-13.7 7.8L263 200.7c-8.7 14.5-24.3 23.3-41.2 23.3H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H221.9c5.6 0 10.8-2.9 13.7-7.8L313 55.3C321.6 40.8 337.3 32 354.1 32H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H354.1zM201.7 320l74.5 120.4c2.9 4.7 8.1 7.6 13.6 7.6H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H289.8c-16.6 0-32.1-8.6-40.8-22.7L164 320H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H180.9l.7-.4 .3 .4H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H201.7z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Visualize and Scale Your Impact
                            </h4>
                            <br />
                            <p className="text-gray-600">
                                Visualize your operations, assign tasks and track progress
                                across your enterprise.
                            </p>
                        </div>

                        {/* 4th item */}
                        <div
                            className="relative flex flex-col p-6 bg-white rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-delay="450"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 512 512">
                                <path fill="#268ae8" d="M128 416v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V416h96zm-16 96c12.3 0 23.5-4.6 32-12.2c8.5 7.6 19.7 12.2 32 12.2h64c26.5 0 48-21.5 48-48V416 400 384 193.8l51.4 198.1 4 15.5 18 69.2c6.6 25.5 32 40.6 56.7 33.8l59.6-16.5c24.7-6.8 39.3-33 32.7-58.5l-13.9-53.7-4-15.5-63.9-246-4-15.5-18-69.2C400 9.9 374.6-5.2 349.9 1.6L290.3 18.1c-3.5 1-6.8 2.3-9.9 4C271.9 8.8 257 0 240 0H176c-12.3 0-23.5 4.6-32 12.2C135.5 4.6 124.3 0 112 0H48C21.5 0 0 21.5 0 48V96v16 16V384v16 16 48c0 26.5 21.5 48 48 48h64zM288 64.8V63.5c.3-7.2 5.1-13 10.8-14.6l59.6-16.5c6.6-1.8 14.8 2 17.2 11l14.1 54.2-87.3 24.2L288.6 68.6c-.3-1.3-.5-2.6-.6-3.8zm-32-.6c0 0 0 0 0 0V96H160V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V64.2zM176 480c-8.8 0-16-7.2-16-16V416h96v48c0 8.8-7.2 16-16 16H176zM128 128V384H32V128h96zm0-80V96H32V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16zM256 384H160V128h96V384zM397.7 128.7l59.8 230.5-87.3 24.2L310.4 152.8l87.3-24.2zm67.9 261.5l13.8 53.2c2.4 9.4-3.2 17.7-10.3 19.6l-59.6 16.5c-6.6 1.8-14.8-2-17.2-11l-14.1-54.2 87.3-24.2z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Build Capacity and Improve Governance
                            </h4>
                            <p className="text-gray-600">
                                Step-by-step, guided ESG Governance process &mdash;from policies
                                and procedures to working group management, all from
                                your <Link to="/gemini" className="underline">Gemini</Link> dashboard.
                            </p>
                        </div>

                        {/* 5th item */}
                        <div
                            className="relative flex flex-col p-6 bg-white rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-delay="600"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 384 512">
                                <path fill="#268ae8" d="M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H192V144c0 26.5 21.5 48 48 48H352V448c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4H240zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM176 224v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16c0-61.9-50.1-112-112-112c-8.8 0-16 7.2-16 16zm32 17.6c31.3 6.4 56 31.1 62.4 62.4H208V241.6zm-56-21C105.7 234.4 72 277.3 72 328c0 61.9 50.1 112 112 112c50.7 0 93.6-33.7 107.4-80h-34c-12.3 28.3-40.5 48-73.3 48c-44.2 0-80-35.8-80-80c0-32.8 19.7-61 48-73.3v-34z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Create Investor-Grade Disclosures at your Fingertips
                            </h4>
                            <p className="text-gray-600">
                                Provide performance reports and assurance documentation aligned
                                with leading global disclosure standards.
                            </p>
                            <br />
                        </div>

                        {/* 6th item */}
                        <div
                            className="relative flex flex-col p-6 bg-white rounded shadow-xl"
                            data-aos="zoom-y-out"
                            data-aos-delay="600"
                            data-aos-anchor="[data-aos-id-blocks]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-3" viewBox="0 0 640 512">
                                <path fill="#268ae8" d="M507.3 4.7c6.2 6.2 6.2 16.4 0 22.6L452.7 81.9c-9 9-21.2 14.1-33.9 14.1H304c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V168c0-8.8 7.2-16 16-16s16 7.2 16 16v24H448c35.3 0 64 28.7 64 64c0 24.5-13.7 45.7-33.9 56.5c1.2 5 1.9 10.2 1.9 15.5c0 29.9-20.5 55-48.3 62.1C428.7 422.6 401.3 448 368 448H237.3c-4.2 0-8.3 1.7-11.3 4.7l-54.6 54.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l54.6-54.6c9-9 21.2-14.1 33.9-14.1H368c17.7 0 32-14.3 32-32c0-1.8-.2-3.6-.4-5.4c-.8-4.7 .5-9.5 3.6-13.1s7.6-5.6 12.4-5.6l.4 0c17.7 0 32-14.3 32-32c0-6.1-1.7-11.7-4.6-16.6c-2.7-4.5-3.1-10-.9-14.8s6.5-8.2 11.6-9.2c14.8-2.8 25.9-15.8 25.9-31.4c0-17.7-14.3-32-32-32H336v32c0 35.3-28.7 64-64 64s-64-28.7-64-64V160c0-53 43-96 96-96H418.7c4.2 0 8.3-1.7 11.3-4.7L484.7 4.7c6.2-6.2 16.4-6.2 22.6 0zM125.6 190.3c9.2-24.5 27.6-43.5 50.4-53.8v37.1c-9.1 7.1-16.3 16.7-20.5 27.9l-26.1 69.6c-2.4 6.4-6.2 12.2-11 17.1L27.3 379.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l91.1-91.1c1.6-1.6 2.9-3.6 3.7-5.7l26.1-69.6zm509.8-57.6c6.2 6.2 6.2 16.4 0 22.6L543.6 247c-1.2-12.5-4.7-24.4-10.2-35l79.3-79.3c6.2-6.2 16.4-6.2 22.6 0z" />
                            </svg>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Engage Your Stakeholders on the Issues that Matter the Most
                            </h4>
                            <p className="text-gray-600">
                                Engage and build consensus with your stakeholders through
                                automated tooling and data management.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ServicesHighlights;

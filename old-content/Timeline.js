import React from "react";

function Timeline() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
                    {/* <h2 className="h2 mb-4">Bringing ideas to life</h2> */}
                    <h2 className="h2 mb-4">The path to impact</h2>
                    <p className="text-xl text-gray-400">
                        In 2012, we began our journey in motorsports by building "Pit Rho,"
                        an innovative set of AI tools and infrastructure used to predict
                        and forecast optimal race strategy in real-time during motorsports events.
                    </p>
                    <br />
                    <p className="text-xl text-gray-400">
                        As we matured in applying data science and software engineering
                        across the fields of motorsports, energy, finance, healthcare,
                        and others, we recognized an internal motivation was solidifying
                        to use these core competencies to help solve some of the world's
                        bigger problems.
                    </p>
                    <br />
                    <p className="text-xl text-gray-400">
                        In 2018 we made the decision to dedicate a significant portion
                        of our team to climate-focused projects. By 2020 we knew it
                        was time to fully lean in and in 2021 we spun out Rho Impact
                        as an entirely new company with a simple mission baked into its
                        name: <em>to empower every organization to make an impact</em>.
                    </p>
                </div>

                {/* Items */}
                <div
                    className="max-w-3xl mx-auto -my-4 md:-my-6"
                    data-aos-id-timeline
                >
                    {/* 1st item */}
                    <div
                        className="relative py-4 md:py-6 pl-24"
                        data-aos="fade-up"
                        data-aos-anchor="[data-aos-id-timeline]"
                    >
                        <div className="pl-2">
                            <div className="text-md text-blue-500 mb-2">Early Opportunity</div>
                            <div className="flex items-center mb-3">
                                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-blue-500 bg-blue-200 rounded-full">
                                    2012
                                </div>
                                <div
                                    className="absolute left-0 h-full px-px bg-gray-200 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                                    aria-hidden="true"
                                ></div>
                                <div
                                    className="absolute left-0 w-2 h-2 bg-blue-500 border-3 box-content border-blue-200 rounded-full ml-20 transform -translate-x-1/2"
                                    aria-hidden="true"
                                ></div>
                                <h4 className="h4">The Founding Idea</h4>
                            </div>
                            <p className="text-lg text-gray-600">
                                Rho AI begins applying data science, machine learning, and
                                bespoke software development to address a key need for faster
                                and more actionable strategy options, in real-time, during
                                competitive motorsports. We bootstrapped the company and learned
                                a lot, often the hard way, about what it takes to apply data
                                science to real-world problems.
                            </p>
                        </div>
                    </div>

                    {/* 2nd item */}
                    <div
                        className="relative py-4 md:py-6 pl-24"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-anchor="[data-aos-id-timeline]"
                    >
                        <div className="pl-2">
                            <div className="flex items-center mb-3">
                                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-blue-500 bg-blue-200 rounded-full">
                                    2015
                                </div>
                                <div
                                    className="absolute left-0 h-full px-px bg-gray-200 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                                    aria-hidden="true"
                                ></div>
                                <div
                                    className="absolute left-0 w-2 h-2 bg-blue-500 border-3 box-content border-blue-200 rounded-full ml-20 transform -translate-x-1/2"
                                    aria-hidden="true"
                                ></div>
                                <h4 className="h4">Beyond Motorsports</h4>
                            </div>
                            <p className="text-lg text-gray-600">
                                With a functional &amp; growing motorsports product and some
                                experience under our belts, Rho AI begins to work for and partner
                                with organizations such as Rubicon Global, XLHybrids, and Zero Mass
                                Water across industries as varied as financial services,
                                healthcare, and energy.
                            </p>
                        </div>
                    </div>

                    {/* 3rd item */}
                    <div
                        className="relative py-4 md:py-6 pl-24"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-anchor="[data-aos-id-timeline]"
                    >
                        <div className="pl-2">
                            <div className="text-md text-blue-500 mb-2">
                                Promising Partnerships
                            </div>
                            <div className="flex items-center mb-3">
                                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-blue-500 bg-blue-200 rounded-full">
                                    2017
                                </div>
                                <div
                                    className="absolute left-0 h-full px-px bg-gray-200 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                                    aria-hidden="true"
                                ></div>
                                <div
                                    className="absolute left-0 w-2 h-2 bg-blue-500 border-3 box-content border-blue-200 rounded-full ml-20 transform -translate-x-1/2"
                                    aria-hidden="true"
                                ></div>
                                <h4 className="h4">
                                    Department of Energy and the Prime Coalition
                                </h4>
                            </div>
                            <p className="text-lg text-gray-600">
                                Rho AI is selected for an initiative by the DOE's office of
                                Energy Efficiency &amp; Renewable Energy (EERE) to use artificial
                                intelligence and data science to efficiently connect investors to
                                startups in the energy sector.
                            </p>
                            <p className="text-lg mt-2 text-gray-600">
                                In 2018, Rho AI is tapped by the Prime Coalition to help drive catalytic
                                capital by developing the{" "}
                                <a
                                    className="text-blue-500 hover:text-blue-700 font-medium"
                                    href="https://cranetool.org"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    CRANE Tool
                                </a>{" "}- open-source software for assessing the carbon
                                reduction potential of new enterprises and emerging technologies.
                            </p>
                        </div>
                    </div>

                    {/* 4th item */}
                    <div
                        className="relative py-4 md:py-6 pl-24"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-anchor="[data-aos-id-timeline]"
                    >
                        <div className="pl-2">
                            <div className="flex items-center mb-3">
                                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-blue-500 bg-blue-200 rounded-full">
                                    2020
                                </div>
                                <div
                                    className="absolute left-0 h-full px-px bg-gray-200 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                                    aria-hidden="true"
                                ></div>
                                <div
                                    className="absolute left-0 w-2 h-2 bg-blue-500 border-3 box-content border-blue-200 rounded-full ml-20 transform -translate-x-1/2"
                                    aria-hidden="true"
                                ></div>
                                <h4 className="h4">
                                    Expanding Work with Leading Impact Organizations
                                </h4>
                            </div>
                            <p className="text-lg text-gray-600">
                                CRANE is publicly launched in collaboration with Prime, Rho AI,
                                Greenometry, and the Clean Energy Trust.
                            </p>
                            <p className="text-lg mt-2 text-gray-600">
                                Rho AI is brought on board by Breakthrough Energy to support
                                the development of their Emerging Climate Technology Framework
                                (ECTF) in collaboration with CDP.
                            </p>
                            <p className="text-lg mt-2 text-gray-600">
                                The MaRS Discovery District partners with Rho AI and leverages
                                the CRANE methodology to evaluate the potential impact of
                                their climate tech competition applicants.
                            </p>
                        </div>
                    </div>

                    {/* 5th item */}
                    <div
                        className="relative py-4 md:py-6 pl-24"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-anchor="[data-aos-id-timeline]"
                    >
                        <div className="pl-2">
                            <div className="text-md text-blue-500 mb-2">
                                Rho Impact is Born
                            </div>
                            <div className="flex items-center mb-3">
                                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-blue-500 bg-blue-200 rounded-full">
                                    2021
                                </div>
                                <div
                                    className="absolute left-0 h-full px-px bg-gray-200 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                                    aria-hidden="true"
                                ></div>
                                <div
                                    className="absolute left-0 w-2 h-2 bg-blue-500 border-3 box-content border-blue-200 rounded-full ml-20 transform -translate-x-1/2"
                                    aria-hidden="true"
                                ></div>
                                <h4 className="h4">Rho AI Doubles Down on Impact</h4>
                            </div>
                            <p className="text-lg text-gray-600">
                                After over 3 years of CRANE development and initial public use,
                                CRANE's Custom Technology module is released and an{" "}
                                <a
                                    className="text-blue-500 hover:text-blue-700 font-medium"
                                    href="https://www.primecoalition.org/library/crane-2021-user-report"
                                    target="_blank"
                                    rel="noreferrer"
                                >in-depth CRANE user report</a>
                                {" "}is published.
                            </p>
                            <p className="text-lg mt-2 text-gray-600">
                                Bravos Energia engages Rho AI to support development of grid
                                optimization software for the Texas grid and Electric
                                Reliability Council of Texas (ERCOT)
                            </p>
                            <p className="text-lg mt-2 text-gray-600">
                                In October, 2021 Rho Impact is officially founded. With enthusiasm
                                and humility, we are building off of the founding team's decades
                                of experience and thought leadership in ESG consulting, software
                                engineering, and data science. We hope to have the opportunity to
                                work with you and work for a better planet, together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;

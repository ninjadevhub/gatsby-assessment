import React, { useState } from 'react';
// import React from "react";
// import { Link } from 'react-router-dom';

const PricingCards = (props) => {
    const [priceOutput] = useState({
        plan1: ['Self-Service', '', 'Free', '', '', '', 'Primary Account Only'],
        plan2: ['Starter', '', '$5k', '/year', '', '', 'Up to 25 Users'],
        plan3: ['Scale', '', 'Inquire', '', '', '', 'Unlimited Users'],
    });

    return (
        <section className="relative">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:border-b lg:border-gray-800">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
                        <small>
                            PRICING &amp; PLANS
                        </small>
                        <h1 className="mb-4 h1">
                            A Plan for Every Stage
                        </h1>
                        <br />
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div className="grid max-w-sm grid-cols-2 gap-12 mx-auto md:max-w-4xl md:gap-12 md:grid-cols-2">
                                <div>
                                    <a
                                        className="text-white bg-blue-500 btn hover:bg-blue-600"
                                        href="https://app.rhoimpact.com/signup"
                                    >
                                        Sign Up Now
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-white bg-gray-700 btn hover:bg-gray-800"
                                        href="/contact?request=Demo"
                                    >
                                        Schedule a Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing tables */}
                    <div>
                        {/* Pricing toggle */}

                        <div className="grid items-start max-w-sm gap-8 mx-auto lg:grid-cols-3 lg:gap-12 lg:max-w-none ">
                            {/* Pricing table 1 */}
                            <div
                                className="relative flex flex-col h-full p-6 bg-slate-100"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                {/* <div className="absolute top-0 right-0 mr-6 -mt-4">
                                    <div className="inline-flex px-3 py-1 mt-px text-sm font-semibold text-green-600 bg-green-200 rounded-full">
                                        Most Popular
                                    </div>
                                </div> */}
                                <div className="pb-4 mb-4 border-b border-gray-700">
                                    <div className="mb-1 text-blue-500 h4">{priceOutput.plan1[0]}</div>
                                    <div className="inline-flex items-baseline mt-8 mb-2">
                                        <span className="text-2xl font-medium text-gray-500 md:text-3xl">
                                            {priceOutput.plan1[1]}
                                        </span>
                                        <span className="h2">{priceOutput.plan1[2]}</span>
                                        <span className="font-medium text-gray-500">
                                            {priceOutput.plan1[3]}
                                        </span>
                                    </div>
                                    <div className="flex items-baseline mb-8">
                                        <span className="text-2xl font-medium text-gray-500 md:text-3xl">
                                            {priceOutput.plan1[4]}
                                        </span>
                                        <span className="h2">{priceOutput.plan1[5]}</span>
                                        <span className="font-medium text-gray-500">
                                            {priceOutput.plan1[6]}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3 font-medium">
                                    Launch your first ESG program and execute
                                    on the fundamentals with end-to-end program management
                                    and implementation resources.
                                </div>
                                <div className="flex justify-center mt-8 mb-4">
                                    <a
                                        className="text-white bg-blue-500 btn hover:bg-blue-600"
                                        href="https://app.rhoimpact.com/signup"
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            </div>

                            {/* Pricing table 2 */}
                            <div
                                className="relative flex flex-col h-full p-6 bg-slate-100"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <div className="pb-4 mb-4 border-b border-gray-700">
                                    <div className="mb-1 text-blue-500 h4">{priceOutput.plan2[0]}</div>
                                    <div className="inline-flex items-baseline mt-8 mb-2">
                                        <span className="text-2xl font-medium text-gray-500 md:text-3xl">
                                            {priceOutput.plan2[1]}
                                        </span>
                                        <span className="h2">{priceOutput.plan2[2]}</span>
                                        <span className="font-medium text-gray-500">
                                            {priceOutput.plan2[3]}
                                        </span>
                                    </div>
                                    <div className="flex items-baseline mb-8">
                                        <span className="text-2xl font-medium text-gray-500 md:text-3xl">
                                            {priceOutput.plan2[4]}
                                        </span>
                                        <span className="h2">{priceOutput.plan2[5]}</span>
                                        <span className="font-medium text-gray-500">
                                            {priceOutput.plan2[6]}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3 font-medium">
                                    Formalize your ESG program and accelerate your performance
                                    with tools that reduce complexity and drive
                                    measurable progress.
                                </div>
                                <div className="flex justify-center mt-8 mb-4">
                                    <a
                                        className="text-white bg-gray-700 btn hover:bg-gray-800"
                                        href="/contact?request=Demo"
                                    >
                                        Schedule a Demo
                                    </a>
                                </div>
                            </div>

                            {/* Pricing table 4 */}
                            <div
                                className="relative flex flex-col h-full p-6 bg-slate-100"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                <div className="pb-4 mb-4 border-b border-gray-700">
                                    <div className="mb-1 text-blue-500 h4">{priceOutput.plan3[0]}</div>
                                    <div className="inline-flex items-baseline mt-8 mb-2">
                                        <span className="text-2xl font-medium text-gray-500 md:text-3xl">
                                            {priceOutput.plan3[1]}
                                        </span>
                                        <span className="h2">{priceOutput.plan3[2]}</span>
                                        <span className="font-medium text-gray-500">
                                            {priceOutput.plan3[3]}
                                        </span>
                                    </div>
                                    <div className="flex items-baseline mb-8">
                                        <span className="text-2xl font-medium text-gray-500 md:text-3xl">
                                            {priceOutput.plan3[4]}
                                        </span>
                                        <span className="h2">{priceOutput.plan3[5]}</span>
                                        <span className="font-medium text-gray-500">
                                            {priceOutput.plan3[6]}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3 font-medium">
                                    Enter new markets, exceed regulatory and B2B buyer requirements,
                                    and stand out with features designed for expansion and customer acquisition.
                                </div>
                                <div className="flex justify-center mt-8 mb-4">
                                    <a
                                        className="text-white bg-gray-700 btn hover:bg-gray-800"
                                        href="/contact"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>

                            {/* Pricing table 5 */}
                            {/* <div
                className="relative flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="pb-4 mb-4 border-b border-gray-700">
                  <div className="mb-1 text-purple-600 h4">
                    Managed
                  </div>
                  {/* <div className="inline-flex items-baseline mt-10 mb-2">
                    <span className="text-2xl font-medium text-gray-500 md:text-3xl">
                      {priceOutput.plan4[0]}
                    </span>
                    <span className="h2">{priceOutput.plan4[1]}</span>
                    <span className="font-medium text-gray-500">
                      {priceOutput.plan4[2]}
                    </span>
                  </div> */}
                            {/* </div>
                <div className="mb-3 font-medium">
                 For organizations looking to outsource their ESG needs to the
                  Rho Impact team of ESG subject-matter experts
                </div>
              </div>  */}
                        </div>
                    </div>
                </div>

                {props.cta && (
                    <div
                        className="flex justify-center mb-8"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-anchor="[data-aos-id-cta]"
                    >
                        {/* <Link
                            className="text-white bg-purple-600 btn hover:bg-purple-700"
                            to="/pricing/"
                        >
                            Learn More
                        </Link> */}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PricingCards;

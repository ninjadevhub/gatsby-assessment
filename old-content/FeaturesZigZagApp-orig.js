import React from 'react';
import FingerprintIllustration2 from '../components/FingerprintIllustration2';

function FeaturesZigzagApp() {
    return (
        <section className="relative">
            {/* Illustration behind hero content */}
            <div
                className="absolute top-0 transform -translate-x-1/2 pointer-events-none left-1/2 -z-1"
                aria-hidden="true"
            >
                <FingerprintIllustration2 />
            </div>
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="mt-14 mb-14 pt-6 md:pt-14">
                    {/* Section header */}
                    <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
                        <h1 className="mb-4 h1">Gemini</h1>
                        <p className="text-xl text-gray-400">
                            Emissions. Regulations. ESG. Training. Forecasting. There are a lot
                            of strategic and operational concerns that are part of a business' new normal.
                        </p>
                        <br />
                        <p className="text-xl text-gray-400">
                            In addition to expert-developed resources and processes, Gemini
                            has an ever expanding collection of purpose-built software and
                            AI models that reduce the time and complexity of
                            your Impact and ESG implementation process.{' '}
                        </p>
                        <br />
                        <a
                            className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full mb-4 sm:w-full sm:mb-0"
                            href="https://calendly.com/rho-impact/discovery-session"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Book Your Demo &#10140;
                        </a>
                    </div>

                    <a href="https://cranetool.org" target="_blank" rel="noreferrer">
                        <article
                            className="bg-white p-6 md:px-8 shadow-lg"
                            data-aos="fade-up"
                            data-aos-anchor="[data-aos-id-support]"
                            data-aos-delay={100}
                        >
                            <div className="flex">
                                {/* Icon */}
                                <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                                    <img
                                        className="rounded shadow-2xl"
                                        src={require('../images/crane.png').default}
                                        width="64"
                                        height="64"
                                        alt="CRANE Tool Logo"
                                    />
                                </div>
                                {/* Content */}
                                <div className="grow">
                                    <h1>
                                        <h2 className="h4 mb-2 text-slate-800 hover:underline hover:decoration-green-400">
                                            The CRANE Tool
                                        </h2>
                                    </h1>
                                    <p className="text-slate-500 mb-4">
                                        An open-source, open-access tool to assess the emissions
                                        reduction potential of new
                                        technologies or companies for early-stage investors,
                                        incubators, accelerators, government agencies,
                                        corporations, philanthropists and more.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </a>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 3r item */}
                        <div className="items-center md:grid md:grid-cols-12 md:gap-6">
                            {/* Image */}
                            <div
                                className="max-w-xl mx-auto mb-8 shadow-xl md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <img
                                    className="h-auto max-w-full mx-auto md:max-w-none"
                                    src={require('../images/features-04-image-03.png').default}
                                    width="540"
                                    height="405"
                                    alt="Features 03"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="mb-3 h3">Built for Tangible Results</h3>
                                    <p className="mb-4 text-xl text-gray-400">
                                        Gemini is designed with practical outcomes in mind. We are
                                        deeply intimate with the work involved and strive to build
                                        tools and services that address real pain points and real
                                        needs. From machine learning models that speed up the
                                        document discovery process during baselining to
                                        auto-classification systems to streamline impact data
                                        management, Rho Impact addresses the key barriers to putting
                                        Impact and ESG into practice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4th item */}
                        <div className="items-center md:grid md:grid-cols-12 md:gap-6">
                            {/* Image */}
                            <div
                                className="max-w-xl mx-auto mb-8 shadow-xl md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:rtl"
                                data-aos="fade-up"
                            >
                                <img
                                    className="h-auto max-w-full mx-auto md:max-w-none"
                                    src={require('../images/features-04-image-04.png').default}
                                    width="540"
                                    height="405"
                                    alt="Features 02"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                                data-aos="fade-left"
                            >
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <h3 className="mb-3 h3">
                                        Tackle Cross-Functional Compliance
                                    </h3>
                                    <p className="mb-4 text-xl text-gray-400">
                                        The Governance component of ESG can be the most challenging
                                        to manage, especially as regulations are tightening.
                                        Nonetheless, governance is a crucial component of your ESG
                                        strategy's success. Rho Impact helps you form a holistic
                                        approach that includes compliance under your ESG plan. With
                                        RhoGemini regulatory risk-assessment tool, you can tackle
                                        cross-functional compliance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1st item */}
                        <div className="items-center md:grid md:grid-cols-12 md:gap-6">
                            {/* Image */}
                            <div
                                className="max-w-xl mx-auto mb-8 shadow-xl md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <img
                                    className="h-auto max-w-full mx-auto md:max-w-none"
                                    src={require('../images/features-04-image-01.png').default}
                                    width="540"
                                    height="405"
                                    alt="Features 01"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="mb-3 h3">Get Started Quickly</h3>
                                    <p className="mb-4 text-xl text-gray-400">
                                        <b>Plan</b>, <b>track</b>, and <b>report</b> on enterprise
                                        Impact, ESG programs, carbon footprints, and more, no matter
                                        your starting point. Gemini, our tool ecosystem, and our
                                        expert advisors help make meaningful progress whether you're
                                        a seasoned pro or just getting started. We have tailored our
                                        process based on our decades of experience implementing
                                        these programs at Fortune 500s, local municipalities, and
                                        everything in between.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="items-center md:grid md:grid-cols-12 md:gap-6">
                            {/* Image */}
                            <div
                                className="max-w-xl mx-auto mb-8 shadow-xl md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:rtl"
                                data-aos="fade-up"
                            >
                                <img
                                    className="h-auto max-w-full mx-auto md:max-w-none"
                                    src={require('../images/features-04-image-02.png').default}
                                    width="540"
                                    height="405"
                                    alt="Features 02"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                                data-aos="fade-left"
                            >
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <h3 className="mb-3 h3">Maximize Your Impact</h3>
                                    <p className="mb-4 text-xl text-gray-400">
                                        Impact and ESG data are messy. Rho Impact helps you organize
                                        your data, classify your documents, track progress, and
                                        report your efforts where and when it counts. We automate
                                        when appropriate and have our expert team available when
                                        hands-on effort is best, all to maximize your ability to
                                        make meaningful progress.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesZigzagApp;

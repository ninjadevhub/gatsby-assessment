import React from 'react';
import CtaImage from '../images/cta-image.png';

function CtaBlogDigest({
    FeaturedImage = CtaImage,
    titleText = 'Try Gemini for expert resources, tooling, and management systems to implement enterprise-level Impact and ESG solutions <span class="text-emerald-500">that scale with you</span>.',
    subtitleText = 'For avoided emissions forecasting and carbon accounting, contact us!'
}) {
    return (
        <div data-aos="fade-up">
            <div className="relative px-8 py-10 rounded-sm bg-slate-900 md:p-10 md:mt-24">
                {/* Background illustration */}
                <div
                    className="absolute bottom-0 right-0 hidden pointer-events-none lg:block"
                    aria-hidden="true"
                >
                    <img
                        src={FeaturedImage}
                        width="456"
                        height="337"
                        alt="Free trial"
                    />
                </div>

                <div className="relative flex flex-col items-center justify-between lg:flex-row">
                    {/* CTA content */}
                    <div className="text-center lg:text-left lg:max-w-xl">
                        <h3 className="mb-8 h3 font-playfair-display text-slate-100" dangerouslySetInnerHTML={{ __html: titleText }}></h3>
                        <div className="mb-3">
                            <a
                                className="text-white bg-blue-600 btn hover:bg-blue-700 group"
                                href="/gemini"
                            >
                                Explore Gemini
                            </a>
                        </div>
                        <div className="text-sm italic text-slate-500" dangerouslySetInnerHTML={{ __html: subtitleText }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaBlogDigest;
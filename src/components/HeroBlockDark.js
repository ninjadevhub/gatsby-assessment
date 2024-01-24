import React from 'react';

function HeroBlockDark({
    heroImage,
    titleText,
    subtitleText = '',
    opacityClass = 'opacity-10'
}) {
    return (
        <section className="relative">

            {/* Dark background */}
            <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10" aria-hidden="true">
                <div className="w-full h-full" data-aos="fade">
                    <img className={"w-full h-full object-cover " + opacityClass} src={heroImage} width="1440" alt="Rho Impact Services Hero" />
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-8">
                        <h1 className="h1 text-slate-100 mb-4" dangerouslySetInnerHTML={{ __html: titleText }}></h1>
                        {
                            subtitleText &&
                            <p className="text-xl text-slate-300" dangerouslySetInnerHTML={{ __html: subtitleText }}></p>
                        }
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HeroBlockDark;
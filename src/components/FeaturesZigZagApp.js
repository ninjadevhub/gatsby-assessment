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
            <p className="text-xl text-slate-500">
              Emissions. Regulations. ESG. Training. Forecasting. The list goes on.
            </p>
            <br />
            <p className="text-xl text-slate-500">
              The impact economy increasingly requires answers to these as core
              strategic and operational concerns for businesses and investors of all
              sizes.
            </p>
            <br />
            <p className="text-2xl text-slate-500">
              Gemini brings it all together.
            </p>
            <br />
            <a
              className="btn text-2xl text-white bg-indigo-500 hover:bg-indigo-600 w-full mb-4 sm:w-full sm:mb-0"
              href="https://calendly.com/rho-impact/discovery-session"
              target="_blank"
              rel="noreferrer"
            >
              Book Your Demo &#10140;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzagApp;

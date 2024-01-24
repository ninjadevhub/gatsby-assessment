import React from "react";
import { Link } from "gatsby";

function CtaAlternative() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="h3 text-white mb-2">Ready to get started?</h3>
                {/* <p className="text-white text-lg opacity-75">
                  Us to.
                </p> */}
              </div>

              {/* CTA button */}
              <div>
                <a
                  className="h4 btn text-white bg-blue-500 hover:bg-blue-600 w-full mb-4 sm:w-full sm:mb-0"
                  href="https://quantify.rhoimpact.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textAlign: 'center' }}
                >
                  You're Minutes Away &#10140;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default CtaAlternative;

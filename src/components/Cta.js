import React from 'react';
import { Link } from "gatsby";

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-blue-500 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Want to learn more?</h3>
                <p className="text-white text-lg opacity-75">Sometimes it's easier to just talk! Get in touch to schedule a call or ask us specific questions.</p>
              </div>

              {/* CTA button */}
              <div>
                <Link to="/contact/" className="btn text-gray-600 bg-gradient-to-r from-blue-100 to-white" href="#0">Contact Us</Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;

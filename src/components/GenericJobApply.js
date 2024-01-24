import React from "react";

function GenericJobApply() {
  return (
    <section className="bg-slate-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative max-w-3xl mx-auto text-center">
            <div
              className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block"
              aria-hidden="true"
            >
              <svg className="fill-slate-300" width="56" height="43">
                <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
              </svg>
            </div>

            <div className="relative">
              <h2 className="h2 font-playfair-display text-slate-100 mb-4">
                We're always looking for amazing people who have a passion for
                the work we do here at{" "}
                <span className="text-emerald-500">Rho Impact</span>.
              </h2>
              <p className="text-xl text-slate-400 mb-6">
                While we may not have the specific positions, you're looking for
                listed as open, don't let that stop you from getting in touch.
                If it's a great match, we'll make sure to reach out.
              </p>
              <p className="text-xl text-slate-400 mb-8">
                Please email your resume to jobs@rhoimpact.com, and tell us why
                you'd be a great fit.
              </p>
              <div>
                <a
                  href={`mailto:jobs@rhoimpact.com`}
                  className="btn text-white bg-blue-500 hover:bg-blue-600 group"
                >
                  Send Your Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenericJobApply;

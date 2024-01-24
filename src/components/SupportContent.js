import React from 'react';

function SupportContent() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h1 className="h1 mb-2 text-center">Helpful Links</h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            For related inquiries, consider directly visiting:
          </p>
          {/* Articles */}
          <div className="max-w-3xl mx-auto space-y-4" data-aos-id-support>
            {/* Article*/}
            {/* <a href="https://esgprogram.io" target="_blank" rel="noreferrer">
              <article
                className="bg-white p-6 md:px-8 shadow-lg mb-10"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-support]"
              >
                <div className="flex">
                  <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                  <img
                      className="rounded shadow-2xl"
                      src={require('../images/esgprogram.png').default}
                      width="45"
                      height="45"
                      alt="ESGProgram Logo"
                    />
                  </div>
                  <div className="grow">
                    <header>
                      <h2 className="h4 mb-2 text-slate-800 hover:underline hover:decoration-purple-400">
                        ESGProgram.io
                      </h2>
                    </header>
                    <p className="text-slate-500 mb-4">
                      Expert-designed platform to guide you and your
                      organization through each critical step in the planning,
                      tracking, and reporting on your ESG strategy and impacts.
                    </p>
                  </div>
                </div>
              </article>
            </a> */}

            {/* Article*/}
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
                    <header>
                      <h2 className="h4 mb-2 text-slate-800 hover:underline hover:decoration-green-400">
                        The CRANE Tool
                      </h2>
                    </header>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportContent;

import React from "react";

function AboutStory() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-6">
          <div className="max-w-3xl mx-auto">
            {/* <h3 className="h3 mb-3">Our story</h3> */}
            <p className="text-lg text-gray-600 mb-8">
              No matter where you are in your impact journey -
              whether that be Net Zero planning, ESG strategy development,
              decarbonizing an investment portfolio, or square one - we are
              here to help you where you want to go.
            </p>
          </div>

          <div className="sm:flex">
            <figure className="flex flex-shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
              <img
                className="flex-grow self-start rounded"
                src={require("../images/about-02.jpg").default}
                width="435"
                height="326"
                alt="About us 02"
              />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              {/* <h4 className="h4 mb-2">2021 - </h4> */}
              <p className="text-lg text-gray-600 mb-2">
                Rho Impact is built upon a decade of experience in
                solving real world problems with data science and software
                development at Pit Rho/Rho AI.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our involvement in what is now the{" "}
                <a
                  className="text-blue-500 hover:text-blue-700 font-medium"
                  href="https://cranetool.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  CRANE Tool
                </a>{" "}
                was the result of our partnership with{" "}
                <a
                  className="text-blue-500 hover:text-blue-700 font-medium"
                  href="https://primecoalition.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prime Coalition
                </a>
                , which has long been a foundational leader in advancing the field
                of catalytic capital. In 2017 Prime and NYSERDA published a
                seminal report entitled, "
                <a
                  className="text-blue-500 hover:text-blue-700 font-medium"
                  href="https://www.primecoalition.org/library/climate-impact-assessment-for-early-stage-ventures"
                  target="_blank"
                  rel="noreferrer"
                >
                  Climate Impact Assessment for Early-Stage Ventures
                </a>," in which they laid the foundation for
                everything that has been built today.
              </p>
              <div className="flex  mb-8">
                {/* <img
                  className="rounded-full self-start flex-shrink-0 shadow-lg mr-4"
                  src={require("../images/about-logo.png").default}
                  width="40"
                  height="40"
                  alt="Logo"
                />
                <div>
                  <blockquote className="text-gray-600 italic">
                    “ I love this product and would recommend it to anyone.
                    Could be not easier to use, and our multiple websites are
                    wonderful. We get nice comments all the time. “
                  </blockquote>
                  <div className="text-sm font-medium text-gray-600 mt-2">
                    <cite className="text-gray-900 not-italic">
                      Micheal Osman
                    </cite>{" "}
                    ·{" "}
                    <a className="text-blue-600" href="#0">
                      New York Times
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Our experience with avoided emissions and emissions reduction forecasting
              for early-stage ventures revealed the need to reliably forecast the effectiveness
              of enterprise climate change interventions. Whether it be a
              climate risk, ESG, or corporate impact strategy, we have applied
              this thinking to address the key barriers corporations face in
              achieving their triple bottom-line impacts for the planet, people,
              and profits. We aim to simplify the impact planning, tracking, and
              reporting process so you can achieve the impact you're capable of
              and that society needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;

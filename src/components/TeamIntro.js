import React from "react";

function TeamIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-30 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="h1 mb-4">
                We Bridge the Art and Science of Impact
              </h1>
            </div>
            <h2 className="text-xl text-gray-600 mb-4">
              Our team brings together software engineers,
              data scientists, methodology developers,
              and boots-on-the-ground experience
              to address key barriers to our sustainable future.
              We focus on translating impact aspirations into action and results.
            </h2>
          </div>

          <figure className="flex justify-center items-start">
            <img
              className="rounded shadow-2xl"
              src={require("../images/about-01.jpg").default}
              width="768"
              height="432"
              alt="About us"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default TeamIntro;

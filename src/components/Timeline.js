import React from "react";

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
          {/* <h2 className="h2 mb-4">Bringing ideas to life</h2> */}
          <p className="h2 mb-4">The path to impact</p>
          <p className="text-xl text-gray-400">
            In 2012, we began delivering real-world solutions by building "Pit Rho,"
            an innovative set of AI tools and infrastructure used to predict
            and forecast optimal race strategy in real-time during motorsports events.
          </p>
          <br />
          <p className="text-xl text-gray-400">
            As we matured in applying data science and software engineering
            across the fields of energy, finance, healthcare,
            and others, we recognized an internal motivation was solidifying
            to use these core competencies to help solve some of the world's
            bigger problems.
          </p>
          <br />
          <p className="text-xl text-gray-400">
            In 2018 we made the decision to dedicate a significant portion
            of our team to climate-focused projects. By 2020 we knew it
            was time to fully commit and in 2021 we spun out Rho Impact
            as a new company with a simple mission baked into its name:
            <em> to empower every organization to make an impact</em>.
            We see humanity thriving in 2152.
            This is the future we are working for and this is our <em>why</em>.
            What's yours?
          </p>
        </div>

      </div>
    </section>
  );
}

export default Timeline;

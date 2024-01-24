import React from "react";
import { Link } from "gatsby";

function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl text-gray-600 mb-4">
              Rho Impact is built upon over a decade of solving real-world problems
              with data science, practitioner experience, and software engineering.
            </h1>

            <p className="text-xl text-gray-600">
              As climate change and social inequalities continue to intensify,
              we firmly believe that organizations around the world have an
              obligation to act and occupy a central role in many viable solutions.
              This drives our{" "}
              <b>mission to empower every organization to make an impact</b>{" "}
              so we can build toward a future where humanity thrives. Read on to
              learn a little more about Rho Impact, our origin story,
              and see some of the{" "}
              <Link
                to="/impact/"
                className="text-blue-500 hover:text-blue-700 font-medium"
                href="#0"
              >ways we try to make a direct impact</Link> through pro bono and
              volunteer work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;

import React from "react";
import Accordion from "../utils/Accordion";

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-20">
            <h2 className="h2">
              What Makes the Rho Impact <br /> Approach Unique{" "}
            </h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            <Accordion title="Simplify Complexity" active>
              Your organization is a dynamic, interconnected array of
              relationships and feedback loops. Rho Impact identifies, labels
              and explains each element to simplify the complexity and
              accelerate your impact.
            </Accordion>
            <Accordion title="Visualize and Interact with Your Operations">
              Move from macro, to mid-level, to micro views of your
              organization. Whether you need a broad or detailed view of your
              operations, Rho Impact lets you discover as much or as little
              detail as needed.
            </Accordion>
            <Accordion title="Pinpoint Trade-offs, Duplications, Synergies">
              Whether it's your whole organization or a sub-system of a business
              unit or product-line, Rho Impact informs greater decision-making
              and resource stewardship.
            </Accordion>
            <Accordion title="Unpack Problems & Pack Up Solutions">
              Rho Maps provide dynamic breakdowns of your risks, presents an
              array of interventions, and enables you to test those solutions in
              a variety of scenarios.
            </Accordion>
            <span
              className="block border-t border-gray-200"
              aria-hidden="true"
            ></span>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faqs;

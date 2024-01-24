import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import ESGTiers from "../../components/ESGTiers";
import UserTypes from "../../components/UserTypes";
import Cta from "../../components/Cta";

import { Helmet } from "react-helmet";
import orgSchema from "../../orgSchema.json";

const ESGSpecialProjects = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky("[data-sticky]");
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Helmet>
        <title>ESG Special Projects | Rho Impact</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Corporate ESG performance is the ultimate team sport. Adapting to today’s stakeholder expectations, emerging disclosure regulations, and associated frameworks is labor-intensive, complex, and can feel like a box-checking exercise more than anything else."
        />
        <meta name="keywords" content="esg as a service" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white to-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-24 md:pt-32 md:pb-12">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-4">
                <h1 className="h1 mb-4" data-aos="zoom-y-out">
                  ESG Special Projects
                </h1>
                <p
                  className="text-xl text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  There will be plenty of road bumps along your ESG journey.
                  That’s why we provide customized solutions to key challenges
                  at each step in the ESG planning, tracking, and reporting
                  process. We offer a suite of services designed to address
                  common pain points across industries and functional areas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <UserTypes
          routes={{
            corporate: "/esg-special-projects/corporate",
            investor: "/esg-special-projects/investor",
            advisor: "/esg-special-projects/advisor",
          }}
          descriptions={{
            corporate: `We provide customized solutions to key challenges
            at each step in the ESG planning, tracking, and reporting
            process. We offer a suite of services designed to address
            common pain points across industries and functional areas.`,
            investor: ` Portfolio ESG integration can be complex, confusing, and labor
            intensive. That’s why we provide customized solutions for key
            pain points in the ESG integration and implementation process.`,
            advisor: `Our a la carte menu of support
            areas are based on our decades of ESG consulting experience
            with clients across industries and segments. We can also
            customize these offerings to meet the unique needs of your
            company and your clients.`,
          }}
        />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default ESGSpecialProjects;

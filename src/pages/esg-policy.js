import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

const About = () => {
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
        <title>
          ESG Companies - Corporate Compliance Best Practices| Rho Impact
        </title>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="esg company, esg best practices, corporate esg policy, esg governance examples, esg governance framework, esg in corporate governance, esg companies, esg index, social impact measurement, esg compliance, esg best practices, measuring social impact, measure social impact, esg standards"
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/*  Site header */}
      <NavBar />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section>
          <div className="pt-32 pb-8 md:pt-40 md:pb-8">
            {/* Section header */}
            {/* <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16"> */}
            <div className="max-w-3xl mx-auto">
              <h1 className="mb-4 h1">
                Environmental, Social, and Governance (ESG) Policy
              </h1>
              <p className="mb-4 text-sm text-gray-500">
                Last Updated: 10/20/2021
              </p>
              <p className="mb-8 text-lg text-gray-600">
                Rho Impact has the following set of ESG policies that apply
                across the firm:
              </p>
              <ul className="mb-8 text-lg text-gray-600">
                <li>Business Code of Conduct</li>
                <li>Climate Policy</li>
                <li>Diversity, Equity, Inclusion (DEI)</li>
                <li>Environmental Policy</li>
                <li>Human Rights Policy</li>
                <li>Labor Management Policy</li>
                <li>Responsible Sourcing</li>
                <li>Stakeholder Engagement Policy</li>
                <li>Supplier Code of Conduct</li>
              </ul>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="mb-3 h3">Contact Us</h3>
            <p className="mb-8 text-lg text-gray-600">
              For further details about any of these policies feel free to
              contact us at{" "}
              <a
                className="font-medium text-blue-500 hover:text-blue-700"
                href="mailto:cio@rhoimpact.com?subject=ESG Practices"
              >
                cio@rhoimpact.com
              </a>
            </p>
          </div>
        </section>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default About;

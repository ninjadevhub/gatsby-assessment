import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
      {/*  Site header */}
      <NavBar />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section>
          <div className="pt-32 pb-8 md:pt-40 md:pb-8">
            {/* Section header */}
            {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16"> */}
            <div className="max-w-3xl mx-auto">
              <h1 className="h1 mb-4">Security Policy</h1>
              <p className="text-sm text-gray-500 mb-4">
                Last Updated: 10/20/2021
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Rho Impact has the following set of security policies that apply
                across the firm:
              </p>
              <ul className="text-lg text-gray-600 mb-8">
                <li>Acceptable Use Policy</li>
                <li>Application Security Policy</li>
                <li>Asset Management Policy</li>
                <li>Business Continuity Policy</li>
                <li>
                  Data Classification, Confidentiality and Encryption Policy
                </li>
                <li>Identity and Access Management Policy</li>
                <li>Incident Response Policy</li>
                <li>Network Security Policy</li>
                <li>Partner Security Policy</li>
                <li>Physical Security Policy</li>
                <li>Privacy Policy</li>
                <li>Risk Assessment and Management Policy</li>
                <li>Systems Security Policy</li>
              </ul>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Contact Us</h3>
            <p className="text-lg text-gray-600 mb-8">
              For further details about any of these policies feel free to
              contact us at{" "}
              <a
                className="text-blue-500 hover:text-blue-700 font-medium"
                href="mailto:security@rhoimpact.com?subject=Security"
              >
                security@rhoimpact.com
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

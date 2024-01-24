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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4">Overview</h1>
              <p className="text-lg text-gray-600 mb-8">
                This policy describes how Rho Impact will handle individual’s
                private information. The policy aims to provide clear
                information for users and/or customers, to provide clear
                direction to Rho Impact employees, and to keep Rho Impact
                compliant with all applicable local, state, federal, and
                international data privacy regulations. The policy includes both
                a section specifically around website policies and more general
                information about maintaining appropriate controls around
                privacy that apply to both the website and any applications we
                may build.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                As your in-house intrapreneurs – we help you develop new and
                scalable impact strategies or recalibrate your existing efforts
                to achieve greater outcomes. Through advisory and customized
                technology tools, we combine the best of human and machine to
                maximize your impact.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Website Privacy</h3>
            <p className="text-lg text-gray-600 mb-8">
              At Rho Impact we work hard not to collect information we don’t
              explicitly need and avoid integrating tools that collect data in
              unsolicited ways. During the course of online interactions with
              our website (Site), it is customary to collect information that
              your web browser provides including: IP Address Web Browser Time
              Zone / Locale Additionally, as you browse the Site, we collect
              information about the individual web pages that you view, what
              websites or search terms referred you to the Site, and information
              about how you interact with the Site. We collect Device
              Information using the following technologies: “Cookies” are data
              files that are placed on your device or computer and often include
              an anonymous unique identifier.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              For more information about cookies, and how to disable cookies,
              visit allaboutcookies.org. “Log files” track actions occurring on
              the Site, and collect data including your IP address, browser
              type, Internet service provider, referring/exit pages, and
              date/time stamps. “Web beacons,” “tags,” and “pixels” are
              electronic files used to record information about how you browse
              the Site. Additionally when you purchase Services or attempt to
              purchase Services through the Site, we collect certain information
              from you, including your name, billing address, shipping address,
              payment information (including credit card numbers), email
              address, and phone number. We refer to this information as “Order
              Information.” When we talk about “Personal Information” in this
              Privacy Policy, we are talking both about Device Information and
              Order Information.
            </p>
            <h3 className="h3 mb-3">Contact Us</h3>
            <p className="text-lg text-gray-600 mb-8">
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e-mail at{" "}
              <a
                className="text-blue-500 hover:text-blue-700 font-medium"
                href="mailto:privacy@rhoimpact.com?subject=Privacy Practices"
              >
                privacy@rhoimpact.com
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

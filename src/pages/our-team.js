import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";
import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";

import CTAGeneric from '../components/CTAGeneric';
import NavBar from "../components/NavBar";
import TeamIntro from "../components/TeamIntro";
import Team from "../components/MeetTeam";
import TeamResearch from "../components/MeetTeamResearch";
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
      <Helmet>
        <title>Team | Rho Impact</title>
        <meta charset="UTF-8" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <NavBar />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <TeamIntro />
        <Team />
        <TeamResearch />
        <CTAGeneric
          title="Want to be part of the journey?"
          paragraph="We are always open to talk to great people who want to help us shape the future of work, and we have job openings all over the world."
          ctaText="See Open Positions"
          url="/careers"
        />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default About;

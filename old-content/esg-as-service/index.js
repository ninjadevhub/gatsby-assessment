import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ESGTiers from "../../components/ESGTiers";
import UserTypes from "../../components/UserTypes";
import Cta from "../../components/Cta";

import { Helmet } from "react-helmet";
import orgSchema from "../../orgSchema.json";

const ESGasService = () => {
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
        <title>ESG As A Service | Rho Impact</title>
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
        <ESGTiers />
        {/* <Faqs /> */}
        <UserTypes
          routes={{
            corporate: "/esg-as-service/corporate",
            investor: "/esg-as-service/investor",
            advisor: "/esg-as-service/advisor",
          }}
          descriptions={{
            corporate: `We function as your
            outsourced ESG department, dedicated to translating your ESG
            aspirations into action and results.`,
            investor: `Market realities, disclosure regulations, and stakeholder
            expectations have made ESG ‘table-stakes’ for investment firms
            of all shapes and sizes.`,
            advisor: `Adapt to your client’s ESG expectations and deliver results
            with support from Rho Impact’s advisory team and software
            suite.`,
          }}
        />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default ESGasService;

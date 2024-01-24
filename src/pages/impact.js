import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import { useLocation } from '@reach/router';

import AOS from 'aos';
import Sticky from 'sticky-js';
import { focusHandling } from 'cruip-js-toolkit';

import { Helmet } from 'react-helmet';
import orgSchema from '../orgSchema.json';

import NavBar from '../components/NavBar';
import WorldVisual from '../components/WorldVisual';
import ImpactCollab from '../components/ImpactCollab';
import CTAGeneric from '../components/CTAGeneric';
import Footer from '../components/Footer';

const Impact = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Helmet>
        <title>Our Impact | Rho Impact</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rho Impact's contributions, pro bono work, and volunteer activities."
        />
        <meta
          name="keywords"
          content="impact, esg, modeling, forecasting, impact forecasting, impact analytics"
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      {/*  Site header */}
      <NavBar />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <WorldVisual />
        <ImpactCollab />

        <section className="bg-slate-100">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="pt-12 md:pt-20">
              {/* Section header */}
              <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
                <h2 className="h2 text-slate-800">
                  Our team was born and raised in the impact space, helping
                  organizations address some of the world's most complex
                  challenges.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
          <div className="py-4">
            {/* Line */}
            <div
              className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-300"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <CTAGeneric
          title="Forecast Your Impact"
          paragraph="Forecast your impact (e.g. emissions, water, waste) to win new bids, raise new capital, and keep up with the impact economy."
          ctaText="Impact Modeling"
          url="/impact-modeling"
          bgClass="bg-white"
        />
        <CTAGeneric
          title="Get Your ESG Strategy"
          paragraph="Our “ESG-as-a-Service” approach provides the ESG advisory, technology, and issue-specific expertise to help you meet stakeholder expectations."
          ctaText="ESG Service Options"
          url="/services"
          includeFlourish={false}
        />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Impact;

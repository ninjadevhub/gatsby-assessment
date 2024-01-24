import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';

import AOS from 'aos';
import Sticky from 'sticky-js';
import { focusHandling } from 'cruip-js-toolkit';

import { Helmet } from 'react-helmet';
import orgSchema from '../src/orgSchema.json';

import Header from '../src/components/Header';
import Frameworks from '../src/components/Frameworks';
import Frameworks2 from '../src/components/Frameworks2';
import CTAGeneric from '../src/components/CTAGeneric';
import Footer from '../src/components/Footer';

const FrameworksPage = (props) => {
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
      {/*  Site header */}
      <Helmet>
        <title>ESG Frameworks | Rho Impact</title>
        <meta charset="UTF-8" />
        {/* <meta
          name="description"
          content="Rho Impact combines high-touch advisory services along with an ever-expanding suite of tech-enabled tooling. Our most common advisory services have been bundled into discrete packages to expedite your journey into well defined, actionable ESG practices."
        /> */}
        <meta
          name="keywords"
          content="disclosure frameworks, esg disclosure, Global Reporting Initiative, GRI, Carbon DIsclosure Project, CDP, Task Force on Climate-Related Financial Disclosures, TCFD, Sustainability Accounting Standards Board, SASB "
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section className="pt-24">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl pb-0 mx-auto text-center md:pb-2">
                <h1 className="mb-4 h2">
                  Carbon Footprint
                  <span style={{ display: 'block' }}>Frameworks and Tools</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Our team of experts has years of experience in carbon
                  footprinting and sustainability. We stay up-to-date with the
                  latest trends and best practices in the industry, so you can
                  be sure you're getting the most accurate and reliable
                  information.
                </p>
              </div>
            </div>
          </div>
          <Frameworks />
          <Frameworks2 />
          <CTAGeneric
            title="Get Your ESG Strategy"
            paragraph="Our “ESG as a Service” offerings provide the ESG advisory, technology, and issue-specific expertise to help you meet stakeholder expectations without the hefty price-tag."
            ctaText="ESG Service Options"
            url="/services"
          />
        </section>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default FrameworksPage;

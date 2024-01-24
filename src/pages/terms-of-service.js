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
              <h1 className="h1 mb-4 text-center">Overview</h1>
              <p className="text-sm text-gray-500 mb-4 text-center">
                Last Updated: 10/20/2021
              </p>
              <p className="text-lg text-gray-600 mb-8">
                This website is operated by Rho Impact, Inc. Throughout the
                site, the terms “we”, “us” and “our” refer to Rho Impact. Rho
                Impact offers this website, including all information, tools and
                services available from this site to you, the user, conditioned
                upon your acceptance of all terms, conditions, policies and
                notices stated here.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By visiting our site and/or purchasing services from us, you
                engage in our “Service” and agree to be bound by the following
                terms and conditions (“Terms of Service”, “Terms”), including
                those additional terms and conditions and policies referenced
                herein and/or available by hyperlink. These Terms of Service
                apply to all users of the site, including without limitation
                users who are browsers, vendors, customers, merchants, and/or
                contributors of content.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Any new features or tools which are added to the current service
                shall also be subject to the Terms of Service. You can review
                the most current version of the Terms of Service at any time on
                this page. We reserve the right to update, change or replace any
                part of these Terms of Service by posting updates and/or changes
                to our website. It is your responsibility to check this page
                periodically for changes. Your continued use of or access to the
                website following the posting of any changes constitutes
                acceptance of those changes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By visiting our site and/or purchasing services from us, you
                engage in our “Service” and agree to be bound by the following
                terms and conditions (“Terms of Service”, “Terms”), including
                those additional terms and conditions and policies referenced
                herein and/or available by hyperlink. These Terms of Service
                apply to all users of the site, including without limitation
                users who are browsers, vendors, customers, merchants, and/or
                contributors of content.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Online Terms</h3>
            <p className="text-lg text-gray-600 mb-8">
              By agreeing to these Terms of Service, you represent that you are
              at least the age of majority in your state or province of
              residence.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You may not use our products for any illegal or unauthorized
              purpose nor may you, in the use of the Service, violate any laws
              in your jurisdiction (including but not limited to copyright
              laws).
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You must not transmit any worms or viruses or any code of a
              destructive nature.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              A breach or violation of any of the Terms will result in an
              immediate termination of your Services.
            </p>
            <h3 className="h3 mb-3">General Conditions</h3>
            <p className="text-lg text-gray-600 mb-8">
              We reserve the right to refuse service to anyone for any reason at
              any time.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service or any contact on the website through which the
              service is provided, without express written permission by us.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              The headings used in this agreement are included for convenience
              only and will not limit or otherwise affect these Terms.
            </p>
            <h3 className="h3 mb-3">
              Accuracy, Completeness and Timeliness Of Information
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We are not responsible if information made available on this site
              is not accurate, complete or current. The material on this site is
              provided for general information only and should not be relied
              upon or used as the sole basis for making decisions without
              consulting primary, more accurate, more complete or more timely
              sources of information. Any reliance on the material on this site
              is at your own risk.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              This site may contain certain historical information. Historical
              information, necessarily, is not current and is provided for your
              reference only. We reserve the right to modify the contents of
              this site at any time, but we have no obligation to update any
              information on our site. You agree that it is your responsibility
              to monitor changes to our site.
            </p>
            <h3 className="h3 mb-3">Modifications to the Service and Prices</h3>
            <p className="text-lg text-gray-600 mb-8">
              Prices for our products and services are subject to change without
              notice.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We reserve the right at any time to modify or discontinue the
              Service (or any part or content thereof) without notice at any
              time.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We shall not be liable to you or to any third-party for any
              modification, price change, suspension or discontinuance of the
              Service.
            </p>
            <h3 className="h3 mb-3">
              Accuracy of Billing and Account Information
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              You agree to provide current, complete and accurate purchase and
              account information for all purchases made through our Site. You
              agree to promptly update your account and other information,
              including your email address and credit card numbers and
              expiration dates, so that we can complete your transactions and
              contact you as needed.
            </p>
            <h3 className="h3 mb-3">Third-Party Links</h3>
            <p className="text-lg text-gray-600 mb-8">
              Certain content, in particular links to detailed remediation
              instructions, available via our Service may include materials from
              third-parties.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Third-party links on this site may direct you to third-party
              websites that are not affiliated with us. We screen referenced
              links at the time of writing remediation instructions, but we are
              not responsible for periodically re-examining or re-evaluating the
              content or accuracy and we do not warrant and shall not have any
              liability or responsibility for any third-party materials or
              websites, or for any other materials, products, or services of
              third-parties.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We are not liable for any harm or damages related to the purchase
              or use of services, resources, content, or any other transactions
              made in connection with any third-party websites. Please review
              carefully the third-party’s policies and practices and make sure
              you understand them before you engage in any transaction.
              Complaints, claims, concerns, or questions regarding third-party
              products should be directed to the third-party.
            </p>
            <h3 className="h3 mb-3">Personal Information</h3>
            <p className="text-lg text-gray-600 mb-8">
              Your submission of personal information through the Site is
              governed by our Privacy Policy.
            </p>
            <h3 className="h3 mb-3">Errors, Inaccuracies and Omissions</h3>
            <p className="text-lg text-gray-600 mb-8">
              Occasionally there may be information on our site or in the
              Service that contains typographical errors, inaccuracies or
              omissions that may relate to security issue descriptions,
              remediation descriptions, finding scores, and other material
              information about the data in the service. We reserve the right to
              correct any errors, inaccuracies or omissions, and to change or
              update information if any information in the Service or on any
              related website is inaccurate at any time without prior notice.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We undertake no obligation to update, amend or clarify information
              in the Service or on any related website, including without
              limitation, security information, except as required by law. No
              specified update or refresh date applied in the Service or on any
              related website, should be taken to indicate that all information
              in the Service or on any related website has been modified or
              updated.
            </p>
            <h3 className="h3 mb-3">Prohibited Uses</h3>
            <p className="text-lg text-gray-600 mb-8">
              In addition to other prohibitions as set forth in the Terms of
              Service, you are prohibited from using the site or its content:
              (a) for any unlawful purpose; (b) to solicit others to perform or
              participate in any unlawful acts; (c) to violate any
              international, federal, provincial or state regulations, rules,
              laws, or local ordinances; (d) to infringe upon or violate our
              intellectual property rights or the intellectual property rights
              of others; (e) to harass, abuse, insult, harm, defame, slander,
              disparage, intimidate, or discriminate based on gender, sexual
              orientation, religion, ethnicity, race, age, national origin, or
              disability; (f) to submit false or misleading information; (g) to
              upload or transmit viruses or any other type of malicious code
              that will or may be used in any way that will affect the
              functionality or operation of the Service or of any related
              website, other websites, or the Internet; (h) to collect or track
              the personal information of others; (i) to spam, phish, pharm,
              pretext, spider, crawl, or scrape; (j) for any obscene or immoral
              purpose; or (k) to interfere with or circumvent the security
              features of the Service or any related website, other websites, or
              the Internet. We reserve the right to terminate your use of the
              Service or any related website for violating any of the prohibited
              uses.
            </p>
            <h3 className="h3 mb-3">
              Disclaimer of Warranties; Limitation of Liability
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We do not guarantee, represent or warrant that your use of our
              service will be uninterrupted, timely, secure or error-free.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We do not warrant that the results that may be obtained from the
              use of the service will be accurate or reliable.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You agree that from time to time we may remove the service for
              indefinite periods of time or cancel the service at any time,
              without notice to you.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You expressly agree that your use of, or inability to use, the
              service is at your sole risk. The service and all products and
              services delivered to you through the service are (except as
              expressly stated by us) provided ‘as is’ and ‘as available’ for
              your use, without any representation, warranties or conditions of
              any kind, either express or implied, including all implied
              warranties or conditions of merchantability, merchantable quality,
              fitness for a particular purpose, durability, title, and
              non-infringement.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              In no case shall Rho Impact, our directors, officers, employees,
              affiliates, agents, contractors, interns, suppliers, service
              providers or licensors be liable for any injury, loss, claim, or
              any direct, indirect, incidental, punitive, special, or
              consequential damages of any kind, including, without limitation
              lost profits, lost revenue, lost savings, loss of data,
              replacement costs, or any similar damages, whether based in
              contract, tort (including negligence), strict liability or
              otherwise, arising from your use of any of the service or any
              products procured using the service, or for any other claim
              related in any way to your use of the service or any product,
              including, but not limited to, any errors or omissions in any
              content, or any loss or damage of any kind incurred as a result of
              the use of the service or any content (or product) posted,
              transmitted, or otherwise made available via the service, even if
              advised of their possibility. Because some states or jurisdictions
              do not allow the exclusion or the limitation of liability for
              consequential or incidental damages, in such states or
              jurisdictions, our liability shall be limited to the maximum
              extent permitted by law.
            </p>
            <h3 className="h3 mb-3">Indemnification</h3>
            <p className="text-lg text-gray-600 mb-8">
              You agree to indemnify, defend and hold harmless Rho Impact and
              our parent, subsidiaries, affiliates, partners, officers,
              directors, agents, contractors, licensors, service providers,
              subcontractors, suppliers, interns and employees, harmless from
              any claim or demand, including reasonable attorneys’ fees, made by
              any third-party due to or arising out of your breach of these
              Terms of Service or the documents they incorporate by reference,
              or your violation of any law or the rights of a third-party.
            </p>
            <h3 className="h3 mb-3">Severability</h3>
            <p className="text-lg text-gray-600 mb-8">
              In the event that any provision of these Terms of Service is
              determined to be unlawful, void or unenforceable, such provision
              shall nonetheless be enforceable to the fullest extent permitted
              by applicable law, and the unenforceable portion shall be deemed
              to be severed from these Terms of Service, such determination
              shall not affect the validity and enforceability of any other
              remaining provisions.
            </p>
            <h3 className="h3 mb-3">Termination</h3>
            <p className="text-lg text-gray-600 mb-8">
              The obligations and liabilities of the parties incurred prior to
              the termination date shall survive the termination of this
              agreement for all purposes.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              These Terms of Service are effective unless and until terminated
              by either you or us. You may terminate these Terms of Service at
              any time by notifying us that you no longer wish to use our
              Services, or when
            </p>
            you cease using our site.
            <p className="text-lg text-gray-600 mb-8">
              If in our sole judgment you fail, or we suspect that you have
              failed, to comply with any term or provision of these Terms of
              Service, we also may terminate this agreement at any time without
              notice and you will remain liable for all amounts due up to and
              including the date of termination; and/or accordingly may deny you
              access to our Services (or any part thereof).
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You can cancel the Service at any time.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              All services auto renew (monthly or annually) unless cancelled.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Refunds are not offered for the month of the cancellation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              If you terminate the Service and your payment method is annual, a
              refund will be offered for the unused months. The refund will be
              calculated with the previous (used) months being charged at the
              full monthly rate (without the annual discount applied).
            </p>
            <h3 className="h3 mb-3">Entire Agreement</h3>
            <p className="text-lg text-gray-600 mb-8">
              The failure of us to exercise or enforce any right or provision of
              these Terms of Service shall not constitute a waiver of such right
              or provision.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              These Terms of Service and any policies or operating rules posted
              by us on this site or in respect to The Service constitutes the
              entire agreement and understanding between you and us and govern
              your use of the Service, superseding any prior or contemporaneous
              agreements, communications and proposals, whether oral or written,
              between you and us (including, but not limited to, any prior
              versions of the Terms of Service).
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Any ambiguities in the interpretation of these Terms of Service
              shall not be construed against the drafting party.
            </p>
            <h3 className="h3 mb-3">Governing Law</h3>
            <p className="text-lg text-gray-600 mb-8">
              These Terms of Service and any separate agreements whereby we
              provide you Services shall be governed by and construed in
              accordance with the laws of Virginia, United States.
            </p>
            <h3 className="h3 mb-3">Changes to the Terms of Service</h3>
            <p className="text-lg text-gray-600 mb-8">
              You can review the most current version of the Terms of Service at
              any time at this page.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We reserve the right, at our sole discretion, to update, change or
              replace any part of these Terms of Service by posting updates and
              changes to our website. It is your responsibility to check our
              website periodically for changes. Your continued use of or access
              to our website or the Service following the posting of any changes
              to these Terms of Service constitutes acceptance of those changes.
            </p>
            <h3 className="h3 mb-3">Contact Us</h3>
            <p className="text-lg text-gray-600 mb-8">
              Questions about the Terms of Service should be sent to us at{" "}
              <a
                className="text-blue-500 hover:text-blue-700 font-medium"
                href="mailto:info@rhoimpact.com"
              >
                info@rhoimpact.com
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

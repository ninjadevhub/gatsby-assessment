import React from 'react';

import AOS from 'aos';
import Sticky from 'sticky-js';
import { focusHandling } from 'cruip-js-toolkit';

import { Helmet } from 'react-helmet';
import orgSchema from '../orgSchema.json';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SupportContent from '../components/SupportContent';
import Newsletter from '../components/Newsletter';
import encode from '../utils/encode';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    const isBrowser = typeof window !== "undefined";

    let contactReason = '';
    if (isBrowser) {
      const urlParams = new URLSearchParams(window.location.search);
      contactReason = urlParams.get('request');
    }
    var heading = 'Want to Learn More?';
    var subject = '';
    var message_placeholder = 'How can we help?';
    if (contactReason === 'Demo') {
      heading = 'Request a Demo';
      subject = 'Request for a Demo';
      message_placeholder =
        'e.g. I would like to schedule a demo! I am interested because of x, y, and z.';
    } else if (contactReason === 'Strategy') {
      heading = 'Contact Us About ESG and Impact Strategy';
      subject = 'ESG and Impact Strategy';
      message_placeholder =
        'e.g. I would like to learn more about your ESG and Impact Strategy Development services.';
    } else if (contactReason === 'Measure') {
      heading = 'Contact Us About GHG Accounting and Impact Measurement';
      subject = 'GHG Accounting and Impact Measurement';
      message_placeholder =
        'e.g. I would like to learn more about your GHG Accounting and Impact Measurement services.';
    } else if (contactReason === 'Reporting') {
      heading = 'Contact Us About ESG and Impact Reporting';
      subject = 'ESG and Impact Reporting';
      message_placeholder =
        'e.g. I would like to learn more about your ESG and Impact Reporting services.';
    } else if (contactReason === 'ESG-as-a-Service') {
      heading = 'Learn About ESG-as-a-Service';
      subject = 'ESG-as-a-Service';
      message_placeholder =
        'e.g. I would like to learn more about your ESG-as-a-Service options.';
    } else if (contactReason === 'Education') {
      heading = 'Learn About ESG Education and Impact Capacity-Building';
      subject = 'ESG Education and Impact Capacity-Building';
      message_placeholder =
        'e.g. I would like to learn more about your ESG Education and Impact Capacity-Building services.';
    } else if (contactReason === 'Forecasting' || contactReason === 'AskHow') {
      heading = 'Learn About Impact Forecasting';
      subject = 'Impact Forecasting';
      message_placeholder =
        'e.g. I would like to learn more about your Impact Forecasting services including Emissions Reduction Potential (ERP) analyses.';
    } else if (contactReason === 'BookSession') {
      heading = 'Book a Discovery Session';
      subject = 'Discovery Session';
      message_placeholder =
        'e.g. I would like to book a discovery session for my impact modeling!';
    }

    this.state = {
      name: '',
      email: '',
      message: '',
      message_placeholder: message_placeholder,
      subject: subject,
      heading: heading,
      successAlert: false,
      failAlert: false,
    };
  }

  componentDidMount() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
          successAlert: true,
        })
      )
      .then(
        setTimeout(() => {
          if (this.state.successAlert) {
            this.setState({
              successAlert: false,
            });
          }
        }, 10000)
      )
      .catch((error) =>
        this.setState({
          failAlert: true,
        }).then(
          setTimeout(() => {
            if (this.state.failAlert) {
              this.setState({
                failAlert: false,
              });
            }
          }, 10000)
        )
      );
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, message_placeholder, subject, heading } =
      this.state;

    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {this.state.successAlert && (
          <div
            id="alert-border-3"
            className="z-10 flex p-4 mt-20 -mb-32 bg-green-100 border-t-4 border-green-500 dark:bg-green-200"
            role="alert"
            data-aos="zoom-y-out"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="ml-3 text-sm font-medium text-green-700">
              Your message was sent successfully!
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-green-100 dark:bg-green-200 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:hover:bg-green-300 inline-flex h-8 w-8"
              data-dismiss-target="#alert-border-3"
              aria-label="Close"
              onClick={() => {
                this.setState({ successAlert: false });
              }}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}
        {this.state.failAlert && (
          <div
            id="alert-border-3"
            className="z-10 flex p-4 mt-20 -mb-32 bg-red-100 border-t-4 border-red-500 dark:bg-red-200"
            role="alert"
            data-aos="zoom-y-out"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="ml-3 text-sm font-medium text-red-700">
              There was an issue while sending out your message.
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"
              data-dismiss-target="#alert-border-3"
              aria-label="Close"
              onClick={() => {
                this.setState({ failAlert: false });
              }}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}
        <Helmet>
          <title>Contact Us | Rho Impact</title>
          <meta charset="UTF-8" />
          {this.contactReason && <meta name="robots" content="noindex" />}
          {/* <meta
          name="description"
          content="Rho Impact combines high-touch advisory services along with an ever-expanding suite of tech-enabled tooling. Our most common advisory services have been bundled into discrete packages to expedite your journey into well defined, actionable ESG practices."
        />
        <meta
          name="keywords"
          content="esg advisory services, environmental impact analyst, esg impact analysis, esg consulting services, esg components, esg integration strategy, esg integration, esg framework"
        /> */}
          <script type="application/ld+json">
            {JSON.stringify(orgSchema)}
          </script>
        </Helmet>
        {/*  Site header */}
        <NavBar />

        {/*  Page content */}
        <main className="flex-grow">
          {/* Contact section */}
          <section>
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="pt-32 md:pt-40">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center ">
                  <h1 className="mb-8 h1">{heading}</h1>
                  <p className="mb-8 text-xl text-gray-600">
                    We look forward to hearing from you. Please use the form
                    below or email us at
                    <br />
                    <span className="text-gray-600 underline">
                      info@rhoimpact.com
                    </span>
                  </p>
                </div>

                {/* Contact form */}
                <form
                  className="max-w-xl mx-auto"
                  onSubmit={this.handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  action="/contact/?success=true"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3 mb-4 md:w-1/2 md:mb-0">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-800"
                        htmlFor="name"
                      >
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        className="w-full text-gray-800 form-input"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-800"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        className="w-full text-gray-800 form-input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-800"
                        htmlFor="subject"
                      >
                        Subject <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="w-full text-gray-800 form-input"
                        placeholder="e.g. Services inquiry, Schedule a Demo"
                        value={subject}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-1 text-sm font-medium text-gray-800"
                        htmlFor="message"
                      >
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        type="textarea"
                        name="message"
                        value={message}
                        onChange={this.handleChange}
                        rows="4"
                        className="w-full text-gray-800 form-textarea"
                        placeholder={message_placeholder}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-4 -mx-3">
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-500 btn hover:bg-blue-600"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                  {/* <div className="mt-4 text-sm text-gray-600">
                    By clicking "send" you consent to allow Simple to store and
                    process the personal information submitted above and agree
                    to our{" "}
                    <a className="underline" href="#0">
                      terms and conditions
                    </a>{" "}
                    as well as our{" "}
                    <a className="underline" href="#0">
                      Privacy Policy
                    </a>
                    .
                  </div> */}
                </form>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-6xl px-4 py-10 mx-auto sm:px-6 text-center">
              <p className="text-xl text-gray-600">
                {/* <!--!Font Awesome Pro 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.--> */}
                <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                <br />
                <span>1 (434) 207-2835</span>
                <br /><br />
                <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M0 208V384c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144S0 128.5 0 208zm64 0c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm256 0V384c0 24.6-9.2 47-24.4 64H512c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144H245.2C290.4 95.9 320 148.5 320 208zm64 0c0-8.8 7.2-16 16-16h64 32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V224H400c-8.8 0-16-7.2-16-16z" /></svg>
                <br />
                <span>PO Box 7643</span>
                <br />
                <span>Charlottesville, VA 22906</span>
              </p>
            </div>
          </section>

          <SupportContent />
          <Newsletter />
        </main>
        {/*  Site footer */}
        <Footer />
      </div>
    );
  }
}

export default Contact;

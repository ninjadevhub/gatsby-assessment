import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

function Footer() {
  const [email, setEmail] = useState('');
  const [year, setYear] = useState();

  useEffect(() => {
    const dateYear = new Date().getFullYear();
    setYear(dateYear);
  }, []);


  return (
    <footer>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-8 py-8 border-t border-gray-200 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Rho Impact">
                <img
                  className="h-auto max-w-full mx-auto md:max-w-none"
                  src={require('../images/rhoimpact/rhoimpact_horizontal.png').default}
                  width="250"
                  alt="Rho Impact Logo"
                />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                to="/privacy-policy/"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Privacy Policy
              </Link>{' '}
              ·{' '}
              <Link
                to="/terms-of-service/"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/impact-modeling/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Impact Modeling
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/gemini/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Gemini
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/crane-tool/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  CRANE
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/impact/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Impact & Methodology
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Our Company
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/our-team/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Our Team
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/esg-blog/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  ESG Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/case-studies/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Case Studies
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/news/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Rho Impact News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-medium text-gray-800">
              Newsletter
            </h6>
            <p className="mb-4 text-sm text-gray-600">
              Get the latest Rho Impact and industry news delivered to your inbox.
            </p>
            <form
              action={process.env.GATSBY_MAILCHIMP_KEY}
              method="POST"
              noValidate
            >
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <input
                    type="hidden"
                    name="u"
                    value={process.env.GATSBY_MAILCHIMP_U}
                  />
                  <input
                    type="hidden"
                    name="id"
                    value={process.env.GATSBY_MAILCHIMP_ID}
                  />
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      type="email"
                      name="EMAIL"
                      id="MERGE0"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="off"
                      className="w-full px-3 py-2 pr-12 text-sm text-gray-800 form-input"
                      placeholder="Your email"
                      required
                    />
                    <button
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px my-2 -ml-px bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="flex-shrink-0 w-3 h-3 mx-3 text-blue-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  <p className="hidden mt-2 text-sm text-green-600">
                    Thanks for subscribing!
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="py-4 border-t border-gray-200 md:flex md:items-center md:justify-between md:py-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://www.linkedin.com/company/rho-impact/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="-8 -9 42 42"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://twitter.com/rhoimpact"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://github.com/rhoai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          {year && (
            <div className="mr-4 text-sm text-gray-600">
              &copy; {year} Rho Impact, All rights reserved.
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'gatsby';

import CustomerAvatar01 from '../images/customer-avatar-01.jpg';
import CustomerAvatar02 from '../images/customer-avatar-02.jpg';
import CustomerAvatar03 from '../images/customer-avatar-03.jpg';
import Customers01 from '../images/customers-01.jpg';
import Customers02 from '../images/customers-02.jpg';
import Customers03 from '../images/customers-03.jpg';

function Customers() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-24 md:py-28">
          {/* Line */}
          <div
            className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200"
            aria-hidden="true"
          ></div>

          {/* Customers */}
          <div className="max-w-xl mx-auto md:max-w-none space-y-20">
            {/* 1st Customer */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                  <Link
                    className="text-slate-800 hover:underline hover:decoration-blue-100"
                    to="/wall-of-love-single"
                  >
                    Black Inc.
                  </Link>
                </h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                  Award-winning design firm Black Inc. didn't get the
                  personalized approach they wanted from colloboration tools -
                  until they met Tidy.
                </p>
                <div className="space-y-3">
                  <svg
                    className="fill-blue-600"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                  >
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                  <blockquote className="font-playfair-display text-slate-500 italic">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur e xcepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia.
                  </blockquote>
                </div>
                <div className="flex items-center mt-4">
                  <Link to="#0">
                    <img
                      className="rounded-full shrink-0 mr-3"
                      src={CustomerAvatar01}
                      width="32"
                      height="32"
                      alt="Customer Avatar 01"
                    />
                  </Link>
                  <div className="font-medium">
                    <Link
                      className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                      to="#0"
                    >
                      Christine Duck
                    </Link>
                    <span className="text-slate-300"> · </span>
                    <span className="text-slate-500">CEO, Black Inc.</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className="flex justify-center items-center"
                data-aos="fade-right"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10"
                    aria-hidden="true"
                  ></div>
                  <img
                    className="mx-auto md:max-w-none"
                    src={Customers01}
                    width="540"
                    height="405"
                    alt="Customer 01"
                  />
                </div>
              </div>
            </div>

            {/* 2nd Customer */}
            <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                  <Link
                    className="text-slate-800 hover:underline hover:decoration-blue-100"
                    to="/wall-of-love-single"
                  >
                    Leon Fibre S.r.l.
                  </Link>
                </h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                  Professional communication studio Leon didn't get the
                  personalized approach they wanted from colloboration tools -
                  until they met Tidy.
                </p>
                <div className="space-y-3">
                  <svg
                    className="fill-blue-600"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                  >
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                  <blockquote className="font-playfair-display text-slate-500 italic">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur e xcepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia.
                  </blockquote>
                </div>
                <div className="flex items-center mt-4">
                  <Link to="#0">
                    <img
                      className="rounded-full shrink-0 mr-3"
                      src={CustomerAvatar02}
                      width="32"
                      height="32"
                      alt="Customer Avatar 02"
                    />
                  </Link>
                  <div className="font-medium">
                    <Link
                      className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                      to="#0"
                    >
                      Marco Tancredi
                    </Link>
                    <span className="text-slate-300"> · </span>
                    <span className="text-slate-500">
                      CTO, Leon Fibre S.r.l.
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className="flex justify-center items-center"
                data-aos="fade-right"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10"
                    aria-hidden="true"
                  ></div>
                  <img
                    className="mx-auto md:max-w-none"
                    src={Customers02}
                    width="540"
                    height="405"
                    alt="Customer 02"
                  />
                </div>
              </div>
            </div>

            {/* 3rd Customer */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                  <Link
                    className="text-slate-800 hover:underline hover:decoration-blue-100"
                    to="/wall-of-love-single"
                  >
                    CD International
                  </Link>
                </h2>
                <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                  Award-winning design firm Black Inc. didn't get the
                  personalized approach they wanted from colloboration tools -
                  until they met Tidy.
                </p>
                <div className="space-y-3">
                  <svg
                    className="fill-blue-600"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                  >
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                  <blockquote className="font-playfair-display text-slate-500 italic">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur e xcepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia.
                  </blockquote>
                </div>
                <div className="flex items-center mt-4">
                  <Link to="#0">
                    <img
                      className="rounded-full shrink-0 mr-3"
                      src={CustomerAvatar03}
                      width="32"
                      height="32"
                      alt="Customer Avatar 03"
                    />
                  </Link>
                  <div className="font-medium">
                    <Link
                      className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                      to="#0"
                    >
                      Štefan Štefančík
                    </Link>
                    <span className="text-slate-300"> · </span>
                    <span className="text-slate-500">
                      Partner, CD International
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className="flex justify-center items-center"
                data-aos="fade-right"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10"
                    aria-hidden="true"
                  ></div>
                  <img
                    className="mx-auto md:max-w-none"
                    src={Customers03}
                    width="540"
                    height="405"
                    alt="Customer 03"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;

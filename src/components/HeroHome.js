import React from "react";
// import { useState } from "react";
// import HeroImage from '../images/anne-nygard-unsplash.jpg';
import { Link } from "gatsby";
// import Modal from "../utils/Modal";

function HeroHome() {
  // const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-slate-100">
      {/* <img
        className=" absolute w-full h-full object-cover"
        src={HeroImage}
        width="100%"
        alt="Rho Impact Services Hero"
      /> */}
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-28 pb-8">
          {/* Section header */}
          <div className="text-center pb-4">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-rblue-400"
              data-aos="zoom-y-out"
            >
              Climate Impact<br />Forecasting
            </h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="hidden">
                Powering the world's most reliable impact forecasts.
              </h2>
              <p
                className="text-xl text-gray-800 mb-0"
                data-aos="zoom-y-out"
                data-aos-delay="150"
                style={{ textAlign: "center", textAlignLast: "center" }}
              >
                Industry leaders are those that are doing more than reduce their own emissions,
                they are driving their customers and sectors towards net-zero.
                Rho Impact <b>quantifies the impact</b> of new climate technologies, existing
                products and services, and of investments so that investors and companies
                can make decisions that <b>accelerate the transition to a net-zero economy</b>.
              </p>
              {/* <p
                className="text-xl text-gray-800 mb-0"
                data-aos="zoom-y-out"
                data-aos-delay="150"
                style={{ textAlign: "center", textAlignLast: "center" }}
              >
                Rho Impact helps you demonstrate the impact of your products on
                customer sustainability goals, meet new ESG requirements of procurement
                organizations and investors, and respond confidently to the next round
                of questions standing between you and <b>new customers and investors</b>.
              </p> */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >

                <div className="max-w-sm md:max-w-4xl mx-auto grid gap-6 pt-6 md:gap-12 grid-cols-1 md:grid-cols-2">
                  <div>
                    <Link className="btn text-white bg-gray-700 hover:bg-gray-800 w-full group" to="/contact/?request=Demo">
                      Request a Demo
                    </Link>
                  </div>
                  <div>
                    <Link className="btn text-white bg-blue-500 hover:bg-blue-600 w-full" to="/impact-modeling/">
                      Explore Impact Modeling
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={require("../images/hero-image-01.png").default}
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div> */}

            {/* Modal */}
            {/* <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://player.vimeo.com/video/174002812"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;

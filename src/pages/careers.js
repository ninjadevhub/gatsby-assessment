import React, { useEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../components/NavBar";
import GenericJobApply from "../components/GenericJobApply";
import Footer from "../components/Footer";

import TeamImage01 from "../images/team-mosaic-01.jpg";
import TeamImage02 from "../images/team-mosaic-02.jpg";
import TeamImage03 from "../images/team-mosaic-03.jpg";
import TeamImage04 from "../images/team-mosaic-04.jpg";

const Careers = (props) => {
  const { nodes } = props.data.allFile;
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-30 md:pb-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2 mb-4">
                  Rho Impact is growing.{` `}
                  <span style={{ display: "block" }}>
                    Be a part of the change.
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  Rho Impact is a US-based, fully distributed company on a
                  mission to make the world better through our advisory services
                  and software products. We are always looking for driven people
                  to join our team.
                </p>
              </div>

              {/* Team images */}
              <div className="max-w-3xl mx-auto">
                <div className="pb-12 md:pb-20">
                  <div className="relative w-full h-0 pb-3/4">
                    <figure
                      className="absolute h-auto"
                      style={{
                        bottom: "9%",
                        width: "41.7%",
                        maxWidth: "320px",
                      }}
                      data-aos="fade-right"
                    >
                      <img
                        className="shadow-2xl"
                        src={TeamImage03}
                        width="320"
                        height="240"
                        alt="Team mosaic 03"
                      />
                    </figure>
                    <figure
                      className="absolute"
                      style={{
                        left: "14.8%",
                        top: "11.8%",
                        width: "70.3%",
                        maxWidth: "540px",
                      }}
                      data-aos="fade-down"
                      data-aos-delay="150"
                    >
                      <img
                        className="shadow-2xl"
                        src={TeamImage01}
                        width="540"
                        height="360"
                        alt="Team mosaic 01"
                      />
                    </figure>
                    <figure
                      className="absolute h-auto"
                      style={{
                        bottom: "0",
                        right: "6.2%",
                        width: "41.7%",
                        maxWidth: "320px",
                      }}
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      <img
                        className="shadow-2xl"
                        src={TeamImage02}
                        width="320"
                        height="240"
                        alt="Team mosaic 02"
                      />
                    </figure>
                    <figure
                      className="absolute h-auto"
                      style={{
                        top: "-5%",
                        right: "5%",
                        width: "23.4%",
                        maxWidth: "180px",
                      }}
                      data-aos="zoom-y-out"
                      data-aos-delay="450"
                    >
                      <img
                        className="shadow-2xl"
                        src={TeamImage04}
                        width="180"
                        height="180"
                        alt="Team mosaic 04"
                      />
                    </figure>
                    <svg
                      className="relative mx-auto h-auto rounded-full shadow-2xl"
                      style={{ width: "10.4%" }}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <radialGradient
                          cx="21.152%"
                          cy="86.063%"
                          fx="21.152%"
                          fy="86.063%"
                          r="79.941%"
                          id="header-logo"
                        >
                          <stop stopColor="#4FD1C5" offset="0%" />
                          <stop stopColor="#81E6D9" offset="25.871%" />
                          <stop stopColor="#338CF5" offset="100%" />
                        </radialGradient>
                      </defs>
                      <rect
                        width="32"
                        height="32"
                        rx="16"
                        fill="url(#header-logo)"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Job list */}
              <div className="max-w-3xl mx-auto">
                <h3 className="h4 mb-8">Current open positions</h3>
                <div className="-my-3">
                  {nodes.map((job, index) => (
                    <Link
                      to={`/careers/${job.childMarkdownRemark.frontmatter.slug}`}
                      className="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3"
                      key={index}
                    >
                      <div className="font-medium">
                        {job.childMarkdownRemark.frontmatter.title}
                      </div>
                      <svg
                        className="w-4 h-4 fill-current text-blue-500 shrink-0 ml-6"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <GenericJobApply />
        </section>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

const CareersPage = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query careersListQuery {
          allFile(filter: { relativeDirectory: { eq: "jobs" } }, sort: { name: ASC }) {
            nodes {
              childMarkdownRemark {
                frontmatter {
                  slug
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => <Careers data={data} {...props} />}
    />
  );
};

export default CareersPage;

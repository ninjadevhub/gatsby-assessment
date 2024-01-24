import React from 'react';
import { graphql, Link } from 'gatsby';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Helmet>
          <title>{frontmatter.title} | Rho Impact</title>
          <meta charset="UTF-8" />
          <meta name="description" content={frontmatter.blurb} />
          <meta name="keywords" content={frontmatter.tags} />
        </Helmet>

        {/*  Site header */}
        <NavBar />

        {/*  Page content */}
        <main className="grow">
          <section>
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="pt-24 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto lg:max-w-none">
                  <article>
                    <div className="mb-6">
                      <Link
                        to="/careers/"
                        className="inline-flex items-center text-base font-medium text-blue-500 hover:underline"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-blue-400 fill-current shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                        </svg>
                        <span>Back to the Careers Page</span>
                      </Link>
                    </div>
                    {/* Article header */}
                    <header className="max-w-3xl mb-8">
                      {/* Title */}
                      <h1 className="mb-4 text-blue-600 h1">
                        {frontmatter.title}
                      </h1>
                    </header>
                    {/* Article content */}
                    <div
                      className="lg:flex lg:justify-between"
                      data-sticky-container
                    >
                      {/* Main content */}
                      <div>
                        {/* Article meta */}
                        <div className="flex items-center mb-6">
                          <div>
                            <span className="text-gray-600">
                              {frontmatter.details.join('\u00A0\u00A0\u2022\u00A0\u00A0')}
                            </span>
                          </div>
                        </div>
                        <hr className="w-16 h-px pt-px mb-8 bg-gray-200 border-0" />
                        {/* Skills */}
                        {frontmatter.skills && (
                          <div className="flex items-center mb-6 -mt-4">
                            <div>
                              <span className="text-gray-500">
                                <b>Required Skills: </b>
                                {frontmatter.skills.join('\u00A0\u00A0\u2022\u00A0\u00A0')}
                              </span>
                            </div>
                          </div>
                        )}
                        {/* Article body */}
                        <div className="text-gray-800 text-md">
                          <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                        {frontmatter.aboutYou && (
                          <div className="mt-8 text-gray-800 text-md">
                            <p className="mb-6 text-xl text-blue-800">
                              About You:
                            </p>
                            <ul className="list-disc ">
                              {frontmatter.aboutYou.map((about, index) => (
                                <li key={index} className="mb-2 ml-6">
                                  {about}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="mb-4 typography-line">
                          {frontmatter.responsibilities && (
                            <div className="mt-8 text-gray-800 text-md">
                              <p className="mb-6 text-xl text-blue-800">
                                Responsibilities
                              </p>
                              <ul className="list-disc">
                                {frontmatter.responsibilities.map(
                                  (responsibility, index) => (
                                    <li key={index} className="mb-2 ml-6">
                                      {responsibility}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                        {frontmatter.requirements && (
                          <div className="mt-8 text-gray-800 text-md">
                            <p className="mb-6 text-xl text-blue-800">
                              Requirements
                            </p>
                            <ul className="list-disc">
                              {frontmatter.requirements.map(
                                (responsibility, index) => (
                                  <li key={index} className="mb-2 ml-6">
                                    {responsibility}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                        {frontmatter.benefits && (
                          <div className="mt-8 text-gray-800 text-md">
                            <p className="mb-6 text-xl text-blue-800">
                              Benefits
                            </p>
                            <ul className="list-disc">
                              {frontmatter.benefits.map((benefit, index) => (
                                <li key={index} className="mb-2 ml-6">
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                  <hr class="mt-6 mb-6" />
                  <h4 class="mb-4 mt-4 text-slate-900 h4">
                    We value your interest and we would love to hear from you!
                  </h4>
                  <div className="mt-2 text-gray-800 text-md">
                    Please send an email to{' '}
                    <span className="text-gray-600 underline">
                      jobs@rhoimpact.com
                    </span>{' '}
                    with a resume that includes the following items:
                    <ul className="mt-4 list-decimal">
                      <li className="mb-2 ml-6">
                        Your resume.
                      </li>
                      <li className="mb-2 ml-6">
                        Links to anything else you would like to share (e.g. your website, blog posts, GitHub, etc.) to paint a picture of you and your work.
                      </li>
                      <li className="mb-2 ml-6">
                        A separate document in which you share why you are interested in this role and Rho Impact, in particular.
                      </li>
                    </ul>
                    <div className="flex items-center justify-center w-full ">
                      <a
                        href={`mailto:jobs@rhoimpact.com?subject=Application for ${frontmatter.title}`}
                        className="px-8 py-4 mx-auto my-6 font-bold text-white bg-blue-500 rounded-full shadow-lg lg:mx-0 hover:underline"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        details
        date(formatString: "MMMM DD, YYYY")
        responsibilities
        requirements
        benefits
        aboutYou
        skills
      }
    }
  }
`;

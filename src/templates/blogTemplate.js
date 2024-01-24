import React, { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';

import AOS from 'aos';
import Sticky from 'sticky-js';
import { focusHandling } from 'cruip-js-toolkit';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SocialShare from '../utils/SocialShare';
import { Helmet } from 'react-helmet';

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html } = data.blogPage;
  const images = data.blogImages;
  const site = data.siteInfo;
  const [avatars, setAvatars] = useState([]);

  const location = useLocation();
  const url = typeof window !== 'undefined' ? window.location.origin : '';

  let thumbnail;
  if (frontmatter.banner) {
    thumbnail = images.edges.filter(
      (image) =>
        image.node.name ===
        frontmatter.banner.split('/')[2].replace(/\.[^/.]+$/, '')
    ).node;
  } else {
    thumbnail = images.edges.filter(
      (image) => image.node.name === 'rho_generic'
    )[0].node;
  }
  const imageSrc = thumbnail && thumbnail.childrenImageSharp[0].gatsbyImageData.images.sources[0].srcSet.split(' ')[0];
  const image = site.siteMetadata?.siteUrl + imageSrc;

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
    let tempAvatars = [];
    frontmatter.authors.forEach((author) =>
      tempAvatars.push(
        data.authImages.edges.filter(
          (image) => image.node.name.split('.')[0] === author.split(' ')[0]
        )[0].node
      )
    );
    setAvatars(tempAvatars);
  }, [data.authImages.edges, frontmatter.authors]);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Helmet>
          <title>{frontmatter.title} | Rho Impact</title>
          <meta charset="UTF-8" />
          <meta name="description" content={frontmatter.blurb} />
          <meta name="keywords" content={frontmatter.tags} />

          <meta
            property="og:url"
            content={site.siteMetadata?.siteUrl}
          />
          <meta property="og:title" content={frontmatter.title} />
          <meta
            property="og:description"
            content={frontmatter.blurb.replace(/^(.{70}[^\s]*).*/, '$1')}
          />
          <meta
            property="og:image"
            content={image}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@rhoimpact" />
          <meta name="twitter:creator" content="@rhoimpact" />

        </Helmet>

        {/*  Site header */}
        <NavBar />

        {/*  Page content */}
        <main className="grow">
          <section>
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto lg:max-w-none">
                  <article>
                    {/* Article header */}
                    <header className="max-w-3xl mx-auto mb-20">
                      {/* Title */}
                      <h1 className="mb-4 text-center h1">
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
                        <div className="flex items-center mb-8">
                          <div className="flex mr-3 shrink-0">
                            <span className="text-gray-600">By </span>
                          </div>
                          <div>
                            {avatars.length > 0 &&
                              avatars.map((avatar, index) => {
                                return (
                                  <span className="mr-6" key={index}>
                                    <a
                                      className="relative"
                                      href={frontmatter.authorLinks[index]}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <span
                                        className="absolute inset-0 mr-6 -m-px"
                                        aria-hidden="true"
                                      >
                                        <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                                      </span>
                                      <GatsbyImage
                                        className="relative mr-2 rounded-full"
                                        image={getImage(avatar)}
                                        width="32"
                                        height="32"
                                        alt={avatar.name}
                                      />
                                    </a>
                                    <a
                                      className="font-medium text-blue-600 hover:text-blue-700 "
                                      href={frontmatter.authorLinks[index]}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {frontmatter.authors[index]}
                                    </a>
                                  </span>
                                );
                              })}
                            <span className="text-gray-600">
                              {' '}
                              · {frontmatter.date}
                            </span>
                          </div>
                        </div>
                        <SocialShare
                          url={url}
                          title={frontmatter.title}
                          description={frontmatter.blurb}
                        />
                        <hr className="w-16 h-px pt-px mb-6 bg-gray-200 border-0" />

                        {/* Article body */}
                        <div className="text-gray-800 text-md">
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                            <div className="mt-6">
                              <Link
                                to="/esg-blog/"
                                className="inline-flex items-center text-base font-medium text-blue-600 hover:underline"
                              >
                                <svg
                                  className="w-3 h-3 mr-2 text-blue-400 fill-current shrink-0"
                                  viewBox="0 0 12 12"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                                </svg>
                                <span>Back to the blog</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Article footer */}
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    blogPage: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        blurb
        banner
        authors
        authorLinks
        videoLink
      }
    }
    siteInfo: site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    blogImages: allFile(filter: { relativeDirectory: { eq: "blog-assets" } }) {
      edges {
        node {
          id
          name
          childrenImageSharp {
            gatsbyImageData(layout: FIXED, width: 600)
          }
        }
      }
    }
    authImages: allFile(
      filter: { relativeDirectory: { eq: "blog-assets/authors" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
      }
    }
  }
`;

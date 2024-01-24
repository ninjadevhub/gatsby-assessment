import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from '@reach/router';

import AOS from 'aos';
import Sticky from 'sticky-js';
import { focusHandling } from 'cruip-js-toolkit';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pagination from '../utils/Pagination';

import NavBar from '../components/NavBar';
import NewsHero from '../components/NewsHero';
import Footer from '../components/Footer';
import CtaBlogDigest from '../components/CtaBlogDigest';

const PageSize = 6;

export default function BlogList({ data }) {
  const posts = data.blogInfo.edges;
  const images = data.blogImages;
  const avatars = data.authImages.edges;

  console.log(posts[0].node.frontmatter.banner.split('/')[2].replace(/\.[^/.]+$/, ''));

  const mainCover = getImage(
    images.edges.filter(
      (image) =>
        image.node.name ===
        posts[0].node.frontmatter.banner.split('/')[2].replace(/\.[^/.]+$/, '')
    )[0].node
  );
  const mainPost = posts[0]
  const blogList = posts.slice(1);

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const currentBlogList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return blogList
      .sort(function (a, b) {
        return b.id - a.id;
      })
      .slice(firstPageIndex, lastPageIndex);
  }, [currentPage, blogList]);


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
        <title>
          ESG Educational Blog &amp; Impact Reference Articles | Rho Impact
        </title>
        <meta charset="UTF-8" />
        <meta name="description" content="Your one stop for all things ESG" />
        <meta name="keywords" content="ESG Blog, ESG Education" />
      </Helmet>
      {/*  Site header */}
      <NavBar />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <NewsHero />
        {/* <BlogTags /> */}
        <>
          {/* Sticky article */}
          {mainPost && (
            <section>
              <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="py-8 md:py-16">
                  <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
                    {/* Image */}
                    <Link
                      className="relative block overflow-hidden group md:w-1/2"
                      to={`/esg-blog/${mainPost.node.frontmatter.slug}`}
                      data-aos="fade-down"
                    >
                      {mainPost.node.frontmatter.banner && (
                        <GatsbyImage
                          loading="eager"
                          className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                          image={mainCover}
                          alt={mainPost.node.frontmatter.title}
                        />
                      )}
                      <div className="absolute top-6 right-6">
                        <svg className="w-8 h-8" viewBox="0 0 32 32">
                          <circle
                            className="fill-slate-900"
                            fillOpacity=".48"
                            cx="16"
                            cy="16"
                            r="16"
                          />
                          <path
                            className="fill-blue-300"
                            d="M21.954 14.29A.5.5 0 0 0 21.5 14h-5.36l.845-3.38a.5.5 0 0 0-.864-.446l-6 7A.5.5 0 0 0 10.5 18h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"
                          />
                        </svg>
                      </div>
                    </Link>
                    {/* Content */}
                    <div className="md:w-1/2" data-aos="fade-up">
                      <header>
                        <h2 className="mb-3 h4 md:text-4xl lg:text-5xl font-playfair-display">
                          <Link
                            className="text-slate-800 hover:underline hover:decoration-blue-100"
                            to={`/esg-blog/${mainPost.node.frontmatter.slug}`}
                          >
                            {mainPost.node.frontmatter.title}
                          </Link>
                        </h2>
                      </header>
                      <p className="text-lg text-slate-500 grow">
                        {mainPost.node.frontmatter.blurb.replace(
                          /^(.{225}[^\s]*).*/,
                          '$1'
                        )}
                        ...{' '}
                        <Link
                          className="font-medium transition duration-150 ease-in-out text-slate-800 hover:text-blue-600"
                          to={`/esg-blog/${mainPost.node.frontmatter.slug}`}
                        >
                          Read More
                        </Link>
                      </p>
                      <footer className="flex items-center mt-4">
                        {posts[0].node.frontmatter.authors &&
                          posts[0].node.frontmatter.authors.map(
                            (author, index) => {
                              return (
                                <a
                                  href={
                                    posts[0].node.frontmatter.authorLinks[index]
                                  }
                                  key={index}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <GatsbyImage
                                    className="mr-3 rounded-full shrink-0"
                                    image={getImage(
                                      avatars.filter(
                                        (image) =>
                                          image.node.name.split('.')[0] ===
                                          author.split(' ')[0]
                                      )[0].node
                                    )}
                                    width="32"
                                    height="32"
                                    alt={author}
                                  />
                                </a>
                              );
                            }
                          )}
                        <div>
                          <a
                            className="font-medium transition duration-150 ease-in-out text-slate-800 hover:text-blue-600"
                            href={posts[0].node.frontmatter.authorLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {posts[0].node.frontmatter.author}
                          </a>
                          <span className="text-slate-300"> · </span>
                          <span className="text-slate-500">
                            {posts[0].node.frontmatter.date}
                          </span>
                        </div>
                      </footer>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          )}
          {/* All articles */}
          <section className="bg-slate-50">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="py-8 space-y-16 md:py-16">
                {/* Latest */}
                <div>
                  <h2 className="mb-8 text-center h3 font-playfair-display md:text-left">
                    All Posts
                  </h2>

                  {/* Articles container */}
                  <div className="grid items-start max-w-sm gap-12 mx-auto md:max-w-none md:grid-cols-3 md:gap-x-6 md:gap-y-8">
                    {/* Article List */}
                    {currentBlogList.map(({ node }, index) => {
                      let thumbnail = [];
                      const avatar = avatars.filter(
                        (image) =>
                          image.node.name.split('.')[0] ===
                          node.frontmatter.authors[0].split(' ')[0]
                      )[0].node;

                      if (node.frontmatter.banner) {
                        thumbnail = images.edges.filter(
                          (image) =>
                            image.node.name ===
                            node.frontmatter.banner
                              .split('/')[2]
                              .replace(/\.[^/.]+$/, '')
                        );
                      } else {
                        thumbnail = images.edges.filter(
                          (image) => image.node.name === 'rho_generic'
                        );
                      }

                      console.log(thumbnail);

                      return (
                        <article
                          className="flex flex-col h-full space-y-5"
                          data-aos="fade-up"
                          key={index}
                        >
                          {/* Image */}
                          <Link
                            className="block overflow-hidden group"
                            to={node.frontmatter.slug}
                          >
                            <GatsbyImage
                              className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                              image={getImage(thumbnail[0].node)}
                              alt={node.frontmatter.title}
                            />
                          </Link>
                          {/* Content */}
                          <div className="flex flex-col grow">
                            <header>
                              <h3 className="mb-3 h4 font-playfair-display">
                                <Link
                                  className="text-slate-800 hover:underline hover:decoration-blue-100"
                                  to={node.frontmatter.slug}
                                >
                                  {node.frontmatter.title}
                                </Link>
                              </h3>
                            </header>
                            {node.frontmatter.blurb && (
                              <p className="text-lg text-slate-500 grow">
                                {node.frontmatter.blurb.replace(
                                  /^(.{70}[^\s]*).*/,
                                  '$1'
                                )}
                                ...
                              </p>
                            )}
                            <footer className="flex items-center mt-4">
                              <a
                                href={posts[0].node.frontmatter.authorLinks[0]}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <GatsbyImage
                                  className="mr-3 rounded-full shrink-0"
                                  image={getImage(avatar)}
                                  width="32"
                                  height="32"
                                  alt={posts[0].node.frontmatter.authors[0]}
                                />
                              </a>

                              <div>
                                <a
                                  className="font-medium transition duration-150 ease-in-out text-slate-800 hover:text-blue-600"
                                  href={node.frontmatter.authorLinks[0]}
                                >
                                  {node.frontmatter.authors[0]}
                                </a>
                                <span className="text-slate-300"> · </span>
                                <span className="text-slate-500">
                                  {node.frontmatter.date}
                                </span>
                              </div>
                            </footer>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                  <div className="mt-20 mb-12">
                    <Pagination
                      className="pagination-bar"
                      currentPage={currentPage}
                      totalCount={posts.length}
                      pageSize={PageSize}
                      onPageChange={(page) => setCurrentPage(page)}
                    />
                  </div>
                </div>

                <CtaBlogDigest />

              </div>
            </div>
          </section>

        </>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export const blogListQuery = graphql`
  query blogListQuery {
    blogInfo: allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {fileAbsolutePath: {regex: "/esg-blog/"}}
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            banner
            blurb
            authors
            authorLinks
          }
        }
      }
    }
    blogImages: allFile(filter: {relativeDirectory: {eq: "blog-assets"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 1080, placeholder: BLURRED)
          }
        }
      }
    }
    authImages: allFile(filter: {relativeDirectory: {eq: "blog-assets/authors"}}) {
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

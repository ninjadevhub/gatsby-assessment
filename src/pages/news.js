import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import { graphql } from 'gatsby';

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import NavBar from "../components/NavBar";
import NewsHero from '../components/NewsHero';
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet";
import orgSchema from "../orgSchema.json";
// import data from "../newsList.json";

export default function News({ data }) {
  const news = data.newsInfo.edges;
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
      <Helmet>
        <title>
          News and Media Coverage | Rho Impact
        </title>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="esg blog, esg education" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/*  Site header */}
      <NavBar />

      {/*  Page content */}
      <main className="grow">
        <NewsHero
          titleText="News &amp; Media Coverage"
          subtitleText=""
          includeSubscribe={false}
        />
        <NewsList data={news} />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export const newsListQuery = graphql`
  query newsListQuery {
    newsInfo: allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {fileAbsolutePath: {regex: "/news/"}}
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            link
            blurb
            author
          }
        }
      }
    }
  }
`;

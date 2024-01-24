exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const careersTemplate = require.resolve(`./src/templates/careersTemplate.js`);
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);
  const blogsTemplate = require.resolve(`./src/templates/blogsTemplate.js`);
  const pressReleasesTemplate = require.resolve(`./src/templates/pressReleasesTemplate.js`);
  const pressReleaseTemplate = require.resolve(`./src/templates/pressReleaseTemplate.js`);

  // CREATE JOB PAGES UNDER /careers/{{slug}}}
  const jobs = await graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        limit: 1000
        filter: {fileAbsolutePath: {regex: "/jobs/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/careers/${node.frontmatter.slug}/`,
        component: careersTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });
  });

  // CREATE BLOG PAGES UNDER /esg-blog/{{slug}}}
  // CREATE BLOG LIST PAGE UNDER /esg-blog/
  const posts = await graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        limit: 1000
        filter: {fileAbsolutePath: {regex: "/esg-blog/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }) => {
      createPage({
        path: `/esg-blog/${node.frontmatter.slug}/`,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });

    createPage({
      path: `/esg-blog/`,
      component: blogsTemplate,
    });
  });

  // CREATE PRESS RELEASES PAGES UNDER /press-release/{{slug}}}
  // CREATE PRESS RELEASES LIST PAGE UNDER /press-release/
  const press_releases = await graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {fileAbsolutePath: {regex: "/press-release/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }) => {
      createPage({
        path: `/press-release/${node.frontmatter.slug}/`,
        component: pressReleaseTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });

    createPage({
      path: `/press-release/`,
      component: pressReleasesTemplate,
    });
  });

  return Promise.all([jobs, posts, press_releases]);
};

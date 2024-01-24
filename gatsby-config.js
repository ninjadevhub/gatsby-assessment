require("dotenv").config({
  path: `.env`,
});

const siteUrl = process.env.URL || `https://rhoimpact.com`;

module.exports = {
  siteMetadata: {
    title: `Rho Impact`,
    description: `Powering the world's most reliable impact forecasts.`,
    siteUrl: siteUrl,
    author: `@rho_impact`,
  },
  trailingSlash: "always",
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
          require(`postcss-reporter`)(), // Debugs sass errors much more easily
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
        name: "Rho Impact",
        short_name: "Rho Impact",
        start_url: "/",
        background_color: "#2B2C32",
        theme_color: "#48a0e3",
        display: "standalone",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CDCN12CPJM", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
  headers: [
    {
      source: "/*",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors 'self' https://*.rhoimpact.com/"
        },
        {
          key: "X-Frame-Options",
          value: "ALLOW-FROM https://app.rhoimpact.com/"
        },
      ],
    }  // Reported by Harris A <hariss.sec@gmailcom> on 2023-08-09
  ],
  // {
  //   resolve: `gatsby-plugin-clarity`,
  //   options: {
  //     // String value for your clarity project ID
  //     clarity_project_id: "dp8c3chz6u",
  //     // Boolean value for enabling clarity while developing
  //     // true will enable clarity tracking code on both development and production environments
  //     // false will enable clarity tracking code on production environment only
  //     enable_on_dev_env: true
  //   },
  // }
};

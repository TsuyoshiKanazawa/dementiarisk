/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    defaultTitle: `ERISA 認知症リスク検査`,
    defaultDescription: `モダン開発を得意とするJack of All Tradesの公式サイトです。`,

  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`, 
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: `E4IlIqsobIKK67NGUFD8qfb5O0xDVFlse6cX`,
        serviceId: `erisaproduct`,
        apis: [
          {
            endpoint: `introduce`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: `E4IlIqsobIKK67NGUFD8qfb5O0xDVFlse6cX`,
        serviceId: `erisaproduct`,
        apis: [
          {
            endpoint: `region`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-8NW68GETB2"
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoColor.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}

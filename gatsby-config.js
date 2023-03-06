/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GSoC 2023 Qualification Task`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `training-modules`,
        path: `${__dirname}/`,
      },
    },
  ],
}

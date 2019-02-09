module.exports = {
  siteMetadata: {
    title: `Wenxuan Xue`,
    description: `Wenxuan is an international-based theater maker and teaching artist.`,
    author: `@hanyangtay`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Wenxuan Xue`,
        short_name: `Wenxuan`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e1e8f0`,
        display: `minimal-ui`,
        icon: `src/images/wenxuan-icon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },

  ],
}

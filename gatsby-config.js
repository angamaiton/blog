module.exports = {
  siteMetadata: {
    title: `Kjartan Angamaiton's Blog`,
    author: `Kjartan Angamaiton`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
  ],
};

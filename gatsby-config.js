module.exports = {
  siteMetadata: {
    title: 'gatsby site',
    description: 'learning how to use gatsby',
    author: 'rasheed shina opeyemi',
    data: { name: 'john', age: 25 },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};

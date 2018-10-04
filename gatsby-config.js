module.exports = {
  siteMetadata: {
    title: 'Chip Carnes | Software Developer',
    author: 'Chip Carnes',
    description:
      'An introduction for Chip Carnes, at least in this portion of the multiverse',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: '', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `GEONESS Développement`,
    siteUrl: `https://geoness.net/`,
    description: `Spécialiste en expertise environnementale, à votre service par ses moyens et son expérience pour garantir la concrétisation de vos projets.`,
    author: `Benoit CALIN`,
    // fb_image: `https://admin.metroboulododo.fr/wp-content/uploads/2019/09/og-image.png`,
  },
  plugins: [
    // Adding possiblity to do SCSS
    `gatsby-plugin-sass`,
    // Dealing with images with gatsby-images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}

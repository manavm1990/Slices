module.exports = {
  siteMetadata: {
    title: "Slick's Slices",
    description: "Slick's Slices",
    author: "@gatsbyjs",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-eslint",

    // TODO: Reactivate when ready
    // {
    //   resolve: "gatsby-source-sanity",
    //   options: {
    //     projectId: "z6r3yy7j",
    //     dataset: "<yourDatasetName>",
    //     // To enable preview of drafts, copy .env-example into .env,
    //     // and add a token with read permissions
    //     token: process.env.SANITY_TOKEN,
    //     watchMode: true,
    //     overlayDrafts: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

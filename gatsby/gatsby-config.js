module.exports = {
  siteMetadata: {
    title: "Slick's Slices",
    description: "Slick's Slices",
    author: "@gocodefinity",
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
  ],
}

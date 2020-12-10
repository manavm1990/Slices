// Used to dynamically create pages
const path = require("path")

const createPizzasPages = async ({ actions, graphql }) => {
  const {
    data: {
      allSanityPizza: { nodes: pizzas },
    },
  } =
    // Developer's Note: This COULD be done on page level...but then restarting too much! 🐢
    await graphql(`
      query {
        allSanityPizza {
          nodes {
            name
            slug {
              current
            }
          }
        }
      }
    `)
  pizzas.forEach(({ name, slug: { current } }) => {
    actions.createPage({
      component: path.resolve("./src/templates/Pizza.jsx"),
      // Use this in the GraphQL page query as argument
      context: { current },
      path: `pizzas/${current}`,
    })
  })
  return pizzas
}

exports.createPages = params => {
  createPizzasPages(params)
}

// Absolute imports
exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

// Used to dynamically create pages
const path = require("path")

const createPizzasPages = async ({ actions, graphql }) => {
  const {
    data: {
      allSanityPizza: { nodes: pizzas },
    },
  } = await graphql(`
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
      path: `pizzas/${current}`,
      component: path.resolve("./src/templates/Pizza.jsx"),
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

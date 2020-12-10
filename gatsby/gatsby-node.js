// Used to dynamically create pages
const path = require("path")

// Absolute imports
exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

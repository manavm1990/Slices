const React = require("react")
const Layout = require("components/Layout").default

const wrapper = ({ element }) => <Layout>{element}</Layout>

exports.wrapPageElement = wrapper

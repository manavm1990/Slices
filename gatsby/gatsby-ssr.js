// This happens after pages generated (as opposed to loaded)
const React = require("react")
const Layout = require("components/Layout").default

const wrapper = ({ element, props }) => <Layout {...props}>{element}</Layout>

exports.wrapPageElement = wrapper

import PropTypes from "prop-types"
import React from "react"
import Nav from "components/Nav"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

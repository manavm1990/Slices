import PropTypes from "prop-types"
import React from "react"
import Nav from "components/Nav"
import GlobalStyle from "styles/GlobalStyles"
import Footer from "./Footer"
import "normalize.css"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

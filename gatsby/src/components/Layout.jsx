import PropTypes from "prop-types"
import React from "react"
import GlobalStyle from "./GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

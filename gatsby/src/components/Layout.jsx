import PropTypes from "prop-types"
import React from "react"
import "normalize.css"
import GlobalStyles from "./GlobalStyles"
import SiteBorderStyles from "./SiteBorderStyles"
import ContentStyles from "./ContentStyles"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <SiteBorderStyles>
      <ContentStyles>
        <Header />
        {children}
        <Footer />
      </ContentStyles>
    </SiteBorderStyles>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

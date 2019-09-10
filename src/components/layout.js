import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="whole-app">
        <div className="lines">
          <div className="container">
            <div className="line-grey" id="body-lines" />
            <div className="line-grey" id="body-lines" />
            <div className="line-grey" id="body-lines" />
            <div className="line-grey" id="body-lines" />
            <div className="line-grey" id="body-lines" />
          </div>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

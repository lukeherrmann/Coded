import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../components/styles.sass"

const Header = () => (
  <div className="headerContainer">
    <div
      style={{
        margin: ``,
        padding: `1rem 4rem`,
      }}
    >
      <h1 className="headerTitle">Coded</h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

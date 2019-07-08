import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./styles.sass"

const Header = () => (
  <div className="headerContainer">
    <h1 className="headerTitle">Coded</h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

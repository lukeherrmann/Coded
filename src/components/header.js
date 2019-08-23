import React from "react"
import { Link } from "gatsby"

import codedLogo from "../images/codedLogo.png"

const Header = () => (
  <div className="header-container">
    <div className="container">
      <div className="row middle-sm">
        <div className="col-xs-6 col-sm-9">
          <Link to="/">
            <img src={codedLogo} />
          </Link>
        </div>
        <div className="col-xs-3 col-sm-2">
          <Link className="link" to="/courses/">
            <p className="header-item">Learn About Our Courses</p>
          </Link>
        </div>
        <div className="col-xs-3 col-sm-1">
          <Link className="link" to="/aboutus/">
            <p className="header-item">About Us</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header

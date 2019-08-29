import React from "react"
import { Link } from "gatsby"

import codedLogo from "../images/codedLogo.png"
import HeaderDropdown from "./headerdropdown"

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="container">
          <div className="row middle-sm">
            <div className="col-xs-8 col-sm-5">
              <Link to="/">
                <img src={codedLogo} />
              </Link>
            </div>
            <div className="header-item col-md-offset-3 col-md-3">
              <Link className="link" to="/courses/">
                <p>Learn About Our Courses</p>
              </Link>
            </div>
            <div className="header-item col-md-1">
              <Link className="link" to="/aboutus/">
                <p>About Us</p>
              </Link>
            </div>
            <div className="col-xs-4 col-sm-offset-5 col-sm-2">
              <div className="show-dropdown">
                <HeaderDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

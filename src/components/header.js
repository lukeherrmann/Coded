import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div className="header-container">
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-9">
          <div className="headerTitle">
            <Link className="link" to="/">
              Coded
            </Link>
          </div>
        </div>
        <div className="col-xs-3 col-sm-2">
          <Link className="link" to="/courses/">
            Learn About Our Courses
          </Link>
        </div>
        <div className="col-xs-3 col-sm-1">
          <div className="header-item">
            <Link className="link" to="/aboutus/">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header

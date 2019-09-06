import React from "react"
import { Link } from "gatsby"
import menuIcon from "../images/icons8-menu-24.png"
import codedLogo from "../images/codedLogo.png"

class Header extends React.Component {
  state = {
    displayMenu: false,
  }

  showDropdown = () => {
    this.setState({ displayMenu: !this.state.displayMenu })
  }

  render() {
    return (
      <div className="header-container">
        <div className="container">
          <div className="row middle-sm">
            <div className="col-xxs-8 col-xs-8 col-sm-5">
              <Link to="/">
                <img src={codedLogo} alt="header-logo" />
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
            <div className="col-xxs-offset-2 col-xxs-1 col-xs-offset-3 col-xs-1 col-sm-offset-6 col-sm-1 show-dropdown">
              <img
                onClick={this.showDropdown}
                src={menuIcon}
                alt="menu-icon"
                class="menu-icon"
              />
            </div>
          </div>
          <div
            className={`row show-dropdown ${
              this.state.displayMenu ? "show" : "hide"
            }`}
          >
            <div className="col-xxs-12 padding-35-35 show-dropdown">
              <Link to="/courses/">
                <h1 className="header-lg-blue show-dropdown">Our Courses</h1>
              </Link>
              <Link to="/aboutus/">
                <h1 className="header-lg-blue show-dropdown">About Us</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

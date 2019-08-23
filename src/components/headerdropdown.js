import React from "react"
import menuIcon from "../images/icons8-menu-24.png"

class HeaderDropdown extends React.Component {
  state = {
    displayMenu: false,
  }

  showDropdownMenu = (event) => {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu)
    })
  }

  render() {
    return (
      <div className={`dropdown-header ${this.state.displayMenu ? 'active' : ''}`}>
        <div className="dropdown-button" onClick={this.showDropdownMenu}>
          <img src={menuIcon} alt="menu-icon" />
        </div>
        <ul>
          <li>Courses</li>
          <li>About Us</li>
        </ul>
      </div>
    )
  }
}

export default HeaderDropdown

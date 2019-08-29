import React from "react"
import menuIcon from "../images/icons8-menu-24.png"

class HeaderDropdown extends React.Component {
  state = {
    displayMenu: false,
  }

  showDropdown = event => {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdown)
    })
  }

  hideDropdown = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdown)
    })
  }

  render() {
    return (
      <div className={`${this.state.displayMenu ? "active" : ""}`}>
        <img onClick={this.showDropdown} src={menuIcon} alt="menu-icon" />
        <ul
          className={`${
            this.state.displayMenu ? "active-title" : "hide"
          } p-black`}
        >
          <li>Courses</li>
          <li>About Us</li>
        </ul>
      </div>
    )
  }
}

export default HeaderDropdown

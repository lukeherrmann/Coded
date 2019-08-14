import React from "react"

class CourseDropdown extends React.Component {
  state = {
    displayInfo: false,
  }

  showDropdownMenu = event => {
    event.preventDefault()
    this.setState({ displayInfo: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = () => {
    this.setState({ displayInfo: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu)
    })
  }

  render() {
    return (
      <div className="dropdown-course">
        <div className="dropdown-button-course" onClick={this.showDropdownMenu}>
          Day One
        </div>
        {this.state.displayInfo ? (
          <p className="p-black">
            Learning programming through pseudocode. This session will focus on
            practicing some of the concepts we learned in Day 1. Additionally,
            students will begin to learn how a webpage takes shape.
          </p>
        ) : null}
      </div>
    )
  }
}

export default CourseDropdown

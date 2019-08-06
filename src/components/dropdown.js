import React from "react"

class Dropdown extends React.Component {
  state = {}

  handleClick = e => {}

  render() {
    return (
      <div className="padding-15-15">
        <ul>
          <li onClick={this.handleClick} className="dropdown-item">
            <span>Day One</span>
            <div className="dropdown-content">
              <p>
                Introduction to programming. Understanding HTML and CSS, we
                familiarize our campers with the terms they will need for our
                camp.
              </p>
            </div>
          </li>
          <li className="dropdown-item">Day Two</li>
          <li className="dropdown-item">Day Three</li>
          <li className="dropdown-item">Day Four</li>
        </ul>
      </div>
    )
  }
}

export default Dropdown

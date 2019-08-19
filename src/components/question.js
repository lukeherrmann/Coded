import React from "react"

class Question extends React.Component {
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
      <>
        <li key={this.props.index} className="dropdown-item" onClick={this.showDropdownMenu}>
          <p className="p-black">{this.props.question}</p>
          <p>+</p>
        </li>
        {this.state.displayInfo ? (
                <p className="p-black">{this.props.answer}</p>
              ) : null}
      </>
    )
  }
}

export default Question

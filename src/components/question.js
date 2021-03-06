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
        <div className="dropdown-title" >
          <p className={`${this.state.displayInfo ? 'active-title' : ''} p-black`}>{this.props.question}</p>
          <p className={`${this.state.displayInfo ? 'rotate-in' : 'rotate-out'} p-black`}>+</p>
        </div>
        <p className={`${this.state.displayInfo ? 'dropdown-content' : 'none'} p-black`}>{this.props.answer}</p>
      </li>
    </>
    )
  }
}

export default Question

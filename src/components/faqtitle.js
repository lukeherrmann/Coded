import React from "react"

class FaqTitle extends React.Component {
  state = { displayTitle: false }

  showTitle = (title, id) => {
    this.props.getSection(title)
    this.setState({ displayTitle: true }, () => {
      document.getElementById(id).addEventListener("click", () => this.hideTitle(id))
    })
  }

  hideTitle = (id) => {
    this.setState({ displayTitle: false }, () => {
      document.getElementById(id).removeEventListener("click", () => this.hideTitle(id))
      debugger
    })
  }

  render() {
    return (
      <>
        <h1
          key={this.props.index}
          id={this.props.index}
          onClick={() => this.showTitle(this.props.title, this.props.index)}
          className={`${
            this.state.displayTitle ? "header-med-black" : "p-black"
          } `}
        >
          {this.props.title}
        </h1>
      </>
    )
  }
}

export default FaqTitle

import React from "react"

class SecondHoverDropdown extends React.Component {
  state = { displayHover: false, tag: "<h1>" }

  handleClick = () => {
    this.setState({ displayHover: !this.state.displayHover })
  }

  render() {
    return (
      <>
        <div className="hover-title">
          <div className="hover-dot-click" onClick={this.handleClick} />
          <p
            className={`${
              this.state.displayHover ? "hover-font-move" : ""
            } hover-font-mobile`}
          >
            Text Styles
          </p>
        </div>
        <div className={`${this.state.displayHover ? "show" : "hide"}`}>
          <div className="hover-background padding-35-35-all">
            <p className="padding-10-10 hover-title-font">{this.state.tag}</p>
            <p className="padding-10-10">
              Can you spot {this.state.tag}? What do those mean? In coding you
              can make text bigger or smaller by using an h and then a number.
              h1 are the largest, and h5 is really small!
            </p>
            <p className="padding-10-10">Can you spot other text styles?</p>
          </div>
        </div>
      </>
    )
  }
}

export default SecondHoverDropdown

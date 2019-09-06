import React from "react"

class ThirdHoverDropdown extends React.Component {
  state = { displayHover: false }

  handleClick = () => {
    this.setState({ displayHover: !this.state.displayHover})
  }

  render() {
    return (
      <>
        <div className="hover-title">
          <div className="hover-dot-click" onClick={this.handleClick} />
          <p className={`${this.state.displayHover ? "hover-font-move" : ""} hover-font-mobile`}>Grid System</p>
        </div>
        <div
          className={`${this.state.displayHover ? "show" : "hide"}`}
        >
          <div className="hover-background padding-35-35-all">
            <p className="padding-10-10">Desktop Computer</p>
            <p className="padding-10-10">
              Grids help websites adapt to different screen sizes. Checkout the
              horizontal lines. See how they change for different screens.
              asdfasdfasdfasdfasdfasdfasdf
            </p>
            <p className="padding-10-10">Phone</p>
            <p className="padding-10-10">
              Mobile devices are often constrained by display size and require a
              different approach to how content is laid out on screen.
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default ThirdHoverDropdown

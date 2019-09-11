import React from "react"

import webGrid from "../images/webGrid.png"
import mobileGrid from "../images/mobileGrid.png"

class FirstHoverDropdown extends React.Component {
  state = { displayHover: false }

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
            Grid System
          </p>
        </div>
        <div className={`${this.state.displayHover ? "show" : "hide"}`}>
          <div className="hover-background padding-35-35-all">
            <div className="row">
              <div className="col-xxs-11 col-xs-offset-1 col-sm-offset-2">
                <p className="padding-20-20">Desktop Computer</p>
              </div>
            </div>
            <div className="row web-grid-mobile padding-20-20">
              <div className="col-xxs-12 col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8">
                <img src={webGrid} className="grid" alt="web-grid" />
              </div>
            </div>
            <div className="row">
              <div className="col-xxs-12 col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8">
                <p className="padding-20-20">
                  Grids help websites adapt to different screen sizes. Checkout
                  the horizontal lines. See how they change for different
                  screens.
                </p>
              </div>
            </div>
            <div className="row middle-xxs">
              <div className="col-xxs-3 col-xs-offset-1 col-xs-2 col-sm-offset-2">
                <img src={mobileGrid} alt="mobile-grid" />
              </div>
              <div className="col-xxs-offset-1 col-xxs-7 col-xs-6 col-sm-5">
                <p className="padding-10-10">Phone</p>
                <p className="padding-10-10">
                  Mobile devices are often constrained by display size and
                  require a different approach to how content is laid out on
                  screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default FirstHoverDropdown

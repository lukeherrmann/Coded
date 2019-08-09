import React from "react"
import webIcon from "../images/webGrey.png"
import appIcon from "../images/appGrey.png"
import vrIcon from "../images/vrGrey.png"

class IconRadio extends React.Component {
  state = { selectedOption: "" }

  handleChange = changeEvent => {
    this.setState({ selectedOption: changeEvent.target.value })
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="col-sm-1">
            <label>
              <div className="center-items">
                <div className="padding-bottom-5">
                  <img src={webIcon} />
                </div>
                <p className="p-black">Web</p>
                <div className="padding-15-15">
                  <input
                    type="radio"
                    name="campType"
                    value="web"
                    checked={this.state.selectedOption === "web"}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </label>
          </div>
          <div className="col-sm-offset-1 col-sm-1">
            <label>
              <div className="center-items">
                <div className="padding-bottom-5">
                  <img src={appIcon} />
                </div>
                <p className="p-black">App</p>
                <div className="padding-15-15">
                  <input
                    type="radio"
                    name="campType"
                    value="app"
                    checked={this.state.selectedOption === "app"}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </label>
          </div>
          <div className="col-sm-offset-1 col-sm-1">
            <label>
              <div className="center-items">
                <div className="padding-bottom-5">
                  <img src={vrIcon} />
                </div>
                <p className="p-black">VR</p>
                <div className="padding-15-15">
                  <input
                    type="radio"
                    name="campType"
                    value="vr"
                    checked={this.state.selectedOption === "vr"}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
      </form>
    )
  }
}

export default IconRadio

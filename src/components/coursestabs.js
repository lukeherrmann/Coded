import React from "react"

import webGrey from "../images/webGrey.png"
import appGrey from "../images/appGrey.png"
import vrGrey from "../images/vrGrey.png"

import CourseTab from "./coursetab"

class CoursesTabs extends React.Component {
  state = {
    activeTab: "",
    coursesTabs: [
      { tabTitle: "Web", tabImg: webGrey },
      { tabTitle: "App", tabImg: appGrey },
      { tabTitle: "VR", tabImg: vrGrey },
    ],
  }

  componentDidMount() {
    this.setState({ activeTab: this.state.coursesTabs[0] })
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
    this.props.handleChange(tab)
  }

  render() {
    return (
      <div>
        <div className="row center-xxs">
          {this.state.coursesTabs.map(tab => {
            return (
              <div className="col-xxs-4">
                <CourseTab
                  activeTab={this.state.activeTab}
                  key={tab.tabTitle}
                  tab={tab.tabTitle}
                  img={tab.tabImg}
                  onClick={this.onClickTabItem}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CoursesTabs

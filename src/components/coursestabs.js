import React from "react"

import webGrey from "../images/webGrey.png"
import web from "../images/webGreen.png"
import appGrey from "../images/appGrey.png"
import app from "../images/appGreen.png"
import vrGrey from "../images/vrGrey.png"
import vr from "../images/vrGreen.png"

import CourseTab from "./coursetab"

class CoursesTabs extends React.Component {
  state = {
    activeTab: "",
    coursesTabs: [
      { tabTitle: "Web", tabImg: webGrey, tabIcon: web },
      { tabTitle: "App", tabImg: appGrey, tabIcon: app },
      { tabTitle: "VR", tabImg: vrGrey, tabIcon: vr },
    ],
  }

  componentDidMount() {
    this.setState({ activeTab: this.state.coursesTabs[0].tabTitle })
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
                  imgIcon={tab.tabIcon}
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

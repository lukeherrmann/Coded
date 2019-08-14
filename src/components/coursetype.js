import React from "react"

import webIcon from "../images/web.png"


class CourseType extends React.Component {
  state= { data: {} }

  componentDidMount(){
    this.setState({ data: this.props.data})
  }

  render() {
    return (
      <div className="padding-35-35">
        <div className="padding-20-20">
          <div className="row">
            <div className="col-sm">
              <div className="row-center">
                <img src={webIcon} alt="web-icon" />
                <div className="padding-top-20">
                  <h1 className="header-lg-black">Web</h1>
                </div>
              </div>
            </div>
          </div>
          <p className="p-black">
            In our we camp, we provide high quality coding experiences forout
            campers. Many of these are powered ny Lenovo ThinkPads that students
            can continue to work throughout the camp. We fully cover designing
            web an web based apps from start to finish.
          </p>
        </div>
        <h4 className="header-sm-black">August 2018</h4>
      </div>
    )
  }
}

export default CourseType

import React from "react"
import CourseDropdown from "./coursedropdown"

class WeeksTitle extends React.Component {
  render() {
    return (
      <>
        <p className="p-black">Week</p>
        <h1 className="header-xl-black-courses">{this.props.week_number}</h1>
      </>
    )
  }
}

export default WeeksTitle

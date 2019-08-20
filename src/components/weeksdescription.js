import React from "react"
import CourseDropdown from "./coursedropdown"

class WeeksDescription extends React.Component {
  render() {
    return (
      <>
        <div className="padding-top-30" />
        <p className="p-black-bold">{this.props.week.data.week_description.text}</p>
        <CourseDropdown days={this.props.week.data.days} />
      </>
    )
  }
}

export default WeeksDescription

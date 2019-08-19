import React from "react"
import CourseDropdown from "./coursedropdown"

class WeeksDescription extends React.Component {
  render() {
    return (
      <>
        <p className="p-black">{this.props.week.data.week_description.text}</p>
        <CourseDropdown days={this.props.week.data.days} />
      </>
    )
  }
}

export default WeeksDescription

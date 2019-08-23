import React from "react"

import Day from "./day"

class CourseDropdown extends React.Component {


  render() {
    return this.props.days.map((day, index) => {
      return (
      <ul>
        <Day day={day.day_title.text} description={day.day_description.text} index={index} />
      </ul>
      )
    })
  }
}

export default CourseDropdown

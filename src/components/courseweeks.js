import React from "react"
import WeeksTitle from "./weekstitle"
import WeeksDescription from "./weeksdescription"

class CourseWeeks extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map(courses => {
          if (courses.data.type_of_course === this.props.selectedOption)
            return courses.data.week_selector_group.map(weeks => {
              return weeks.week_selector.document.map((week, index) => {
                return (
                  <>
                    <div className="week-info-block col-sm-1">
                      <WeeksTitle
                        week_number={week.data.week_number}
                        index={index}
                      />
                    </div>
                    <div className="week-info-block col-sm-4 ">
                      <WeeksDescription week={week} index={index} />
                    </div>
                    <div className="week-info-block col-sm-1" />
                  </>
                )
              })
            })
        })}
      </div>
    )
  }
}

export default CourseWeeks

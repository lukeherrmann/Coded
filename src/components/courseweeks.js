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
                    <div className="col-xxs-12 col-xs-12 col-md-1 center-mobile">
                      <WeeksTitle
                        week_number={week.data.week_number}
                        index={index}
                      />
                    </div>
                    <div className="col-xxs-12 col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-4">
                      <WeeksDescription week={week} index={index} />
                    </div>
                    <div className="week-info-block col-xs-1 col-md-1" />
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

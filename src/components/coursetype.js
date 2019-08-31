import React from "react"

import webIcon from "../images/web.png"

class CourseType extends React.Component {
  render() {
    return this.props.data.map(courses => {
      if (courses.data.type_of_course === this.props.selectedOption)
        return (
          <div className="padding-35-35">
            <div className="padding-20-20">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row-center">
                    <img src={webIcon} alt="web-icon" />
                    <div className="padding-top-20">
                      <h1 className="header-lg-black">
                        {courses.data.type_of_course}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="padding-15-15">
                    <p className="p-black">{courses.data.course_desc.text}</p>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="header-sm-black">{courses.data.course_date.text}</h4>
          </div>
        )
    })
  }
}

export default CourseType
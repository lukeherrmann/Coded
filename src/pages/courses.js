import React from "react"
import { Link, graphql } from "gatsby"

import CourseType from "../components/coursetype"
import Layout from "../components/layout"
import CourseWeeks from "../components/courseweeks"
import "../styles/main.sass"
import webGrey from "../images/webGrey.png"
import appGrey from "../images/appGrey.png"
import vrGrey from "../images/vrGrey.png"
import Img from "../images/coursesimage.png"

class Courses extends React.Component {
  state = { selectedOption: "Web" }

  handleChange = changeEvent => {
    this.setState({ selectedOption: changeEvent.target.value })
  }

  render() {
    return (
      <Layout>
        <div className="courses">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-xxs-12 col-xs-offset-2 col-xs-8 col-md-offset-0 col-md-3">
                  <div className="row">
                    <div className="col-sm-12">
                      <p className="p-black">Select Your Course</p>
                      <div className="padding-20-20">
                        <div className="faq-underline" />
                      </div>
                    </div>
                  </div>
                  <form>
                    <div className="row around-xs">
                      <div className="col-xxs">
                        <label className="course-label">
                          <img src={webGrey} alt="web-icon-gray" />
                          <h3 className="header-sm-black padding-10-10">Web</h3>
                          <input
                            type="radio"
                            name="courseType"
                            value="Web"
                            checked={this.state.selectedOption === "Web"}
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                      <div className="col-xxs">
                        <label className="course-label">
                          <img src={appGrey} alt="app-icon-gray" />
                          <h3 className="header-sm-black padding-10-10">App</h3>
                          <input
                            type="radio"
                            name="courseType"
                            value="App"
                            checked={this.state.selectedOption === "App"}
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                      <div className="col-xxs">
                        <label className="course-label">
                          <img src={vrGrey} alt="vr-icon-gray" />
                          <h3 className="header-sm-black padding-10-10">VR</h3>
                          <input
                            type="radio"
                            name="courseType"
                            value="VR"
                            checked={this.state.selectedOption === "VR"}
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                    </div>
                  </form>

                  <CourseType
                    data={this.props.data.allPrismicCourses.nodes}
                    selectedOption={this.state.selectedOption}
                  />

                  <div className="padding-35-35">
                    <Link to="/signup/">
                      <div className="btn-blue-sm">
                        <div className="btn-text-white">
                          <h5>Sign Up</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                  <div className="col-sm-12">
                    <img src={Img} alt="header" className="courses-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-offset-1 col-xs-11 col-md-offset-0 col-md-12">
                <h1 className="header-lg-black">Camp Schedule</h1>
              </div>
            </div>
          </div>
          <div className="section mobile">
            <div className="container">
              <CourseWeeks
                data={this.props.data.allPrismicCourses.nodes}
                selectedOption={this.state.selectedOption}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Courses

export const query = graphql`
  query AllCourses {
    allPrismicCourses {
      nodes {
        data {
          type_of_course
          course_desc {
            text
          }
          course_date {
            text
          }
          week_selector_group {
            week_selector {
              document {
                data {
                  week_title {
                    text
                  }
                  week_number
                  week_description {
                    text
                  }
                  days {
                    day_title {
                      text
                    }
                    day_description {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

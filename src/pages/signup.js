import React from "react"
import { graphql } from "gatsby"
import Forms from "../components/forms"
import BusinessForms from "../components/businessforms"
import Layout from "../components/layout"

import webIcon from "../images/web.png"
import appIcon from "../images/app.png"
import vrIcon from "../images/vr.png"

import webGrey from "../images/webGrey.png"
import web from "../images/webGreen.png"
import appGrey from "../images/appGrey.png"
import app from "../images/appGreen.png"
import vrGrey from "../images/vrGrey.png"
import vr from "../images/vrGreen.png"

import "../styles/main.sass"

class SignUp extends React.Component {
  state = {
    parent: true,
    activeTab: "",
    coursesTabs: [
      { tabTitle: "Web", tabImg: webGrey, tabIcon: web },
      { tabTitle: "App", tabImg: appGrey, tabIcon: app },
      { tabTitle: "VR", tabImg: vrGrey, tabIcon: vr },
    ],
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
  }

  handleClick = () => {
    if (this.state.parent === true) this.setState({ parent: false })
    else if (this.state.parent === false) this.setState({ parent: true })
  }

  render() {
    const {
      data: {
        prismicSignup: {
          data: {
            course_1_title,
            course_1_desc,
            course_2_title,
            course_2_desc,
            course_3_title,
            course_3_desc,
          },
        },
      },
    } = this.props

    return (
      <Layout>
        <div className="sign-up">
          <div className="container">
            <div className="row">
              <div className="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-5">
                <div className="padding-50-50">
                  <h1 className="header-lg-black">
                    Sign Up - {this.state.parent ? "Parent" : "Educator"}
                  </h1>
                  <div className="padding-top-15">
                    <p onClick={this.handleClick} className="i-blue">
                      Not a {this.state.parent ? "Parent" : "Educator"}? Click
                      Here!
                    </p>
                  </div>
                </div>
                <p className="p-black padding-20-20">Select Camp of Interest</p>
                <div className={`${this.state.parent ? "show-form" : "hide"}`}>
                  <Forms
                    tab={this.state.activeTab}
                    onClick={this.onClickTabItem}
                  />
                </div>
                <div className={`${this.state.parent ? "hide" : "show-form"}`}>
                  <BusinessForms />
                </div>
              </div>
              <div className="col-xs-offset-2 col-xs-8 col-sm-offset-1 col-sm-4 radio-icons">
                <div className="padding-top-top">
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-xs-2 col-sm-1">
                          <div className="row-center">
                            <img src={webIcon} alt="web-icon" />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">
                                {course_1_title.text}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">{course_1_desc.text}</p>
                  </div>
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-xs-2 col-sm-1">
                          <div className="row-center">
                            <img src={appIcon} alt="app-icon" />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">
                                {course_2_title.text}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">{course_2_desc.text}</p>
                  </div>
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-xs-2 col-sm-1">
                          <div className="row-center">
                            <img src={vrIcon} alt="vr-icon" />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">
                                {course_3_title.text}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">{course_3_desc.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default SignUp

export const pageQuery = graphql`
  query Signup {
    prismicSignup {
      data {
        course_1_title {
          text
        }
        course_1_desc {
          text
        }
        course_2_title {
          text
        }
        course_2_desc {
          text
        }
        course_3_title {
          text
        }
        course_3_desc {
          text
        }
      }
    }
  }
`

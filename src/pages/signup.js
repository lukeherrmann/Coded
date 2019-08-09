import React from "react"
import { graphql } from "gatsby"
import IconRadio from "../components/iconradio"
import Forms from "../components/forms"
import BusinessForms from "../components/businessforms"
import Layout from "../components/layout"
import webIcon from "../images/web.png"
import appIcon from "../images/app.png"
import vrIcon from "../images/vr.png"
import "../styles/main.sass"

class ParentSignUp extends React.Component {
  state = { parent: true, pageHeader: "Parent" }

  handleClick = () => {
    if (this.state.parent === true)
      this.setState({ parent: false, pageHeader: "Business" })
    else if (this.state.parent === false)
      this.setState({ parent: true, pageHeader: "Parent" })
  }

  render() {
    const {
      data: {
        allPrismicAboutCourse: {
          nodes: [
            {
              data: { course_description, course_title },
            },
          ],
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
                    Sign Up - {this.state.pageHeader}
                  </h1>
                  <div className="padding-top-15">
                    <p onClick={this.handleClick} className="i-black">
                      Not a {this.state.pageHeader}? Click Here!
                    </p>
                  </div>
                </div>

                <div className="padding-20-20">
                  <p className="p-black"> Select Camps of Interest</p>
                </div>
                <div className="padding-20-20">
                  <IconRadio />
                </div>
                {this.state.parent ? <Forms /> : <BusinessForms />}
              </div>
              <div className=" col-xs-offset-2 col-xs-8 col-sm-offset-1 col-sm-4">
                <div className="padding-top-top">
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
                    </div>
                    <p className="p-black">{course_description.text}</p>
                  </div>
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-sm">
                          <div className="row-center">
                            <img src={appIcon} alt="app-icon" />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">App</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">{course_description.text}</p>
                  </div>
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-sm">
                          <div className="row-center">
                            <img src={vrIcon} alt="vr-icon" />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">VR</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">{course_description.text}</p>
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
export default ParentSignUp

export const pageQuery = graphql`
  query {
    allPrismicAboutCourse {
      nodes {
        data {
          course_description {
            text
          }
          course_title {
            text
          }
        }
      }
    }
  }
`

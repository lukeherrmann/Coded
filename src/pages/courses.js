import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/main.sass"
import webIcon from "../images/web.png"
import webGrey from "../images/webGrey.png"
import appGrey from "../images/appGrey.png"
import vrGrey from "../images/vrGrey.png"
import Img from "../images/coursesimage.png"

const Courses = () => (
  <Layout>
    <div className="courses">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="padding-20-20">
                <p className="p-black">Select Your Course</p>
              </div>
              <div className="row between-sm">
                <div className="col-sm-1">
                  <img src={webGrey} />
                  <h3 className="header-sm-black">Web</h3>
                </div>
                <div className="col-sm-1">
                  <img src={appGrey} />
                  <h3 className="header-sm-black">App</h3>
                </div>
                <div className="col-sm-1">
                  <img src={vrGrey} />
                  <h3 className="header-sm-black">VR</h3>
                </div>
              </div>
              <div className="padding-35-35">
                <div className="padding-20-20">
                  <div className="row">
                    <div className="col-sm">
                      <div className="row-center">
                        <img src={webIcon} />
                        <div className="padding-top-20">
                          <h1 className="header-lg-black">Web</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="p-black">
                  In our we camp, we provide high quality coding experiences
                  forout campers. Many of these are powered ny Lenovo ThinkPads
                  that students can continue to work throughout the camp. We
                  fully cover designing web an web based apps from start to
                  finish.
                </p>
              </div>
              <h4 className="header-sm-black">August 2018</h4>
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
            <div className="col-sm-offset-3 col-sm-5">
              <img src={Img} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h1 className="header-lg-black">Camp Schedule</h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-1">
              <h1 className="header-xl-black-courses">1</h1>
              <p className="p-black">Week</p>
            </div>
            <div className="col-sm-4">
              <p className="p-black">
                Introduction to programming. Understanding HTML and CSS, we
                familiarize our campers with the terms they will need for our
                camp.
              </p>
              <div className="padding-15-15">
                <ul>
                  <li className="dropdown-item">
                    <p>Day Two</p>
                    <p>+</p>
                  </li>
                  <li className="dropdown-item">
                    <p>Day Two</p>
                    <p>+</p>
                  </li>
                  <li className="dropdown-item">
                    <p>Day Two</p>
                    <p>+</p>
                  </li>
                  <li className="dropdown-item">
                    <p>Day Two</p>
                    <p>+</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-1">
              <h1 className="header-xl-black-courses">2</h1>
              <p className="p-black">Week</p>
            </div>
            <div className="col-sm-4">
              <p className="p-black">
                Introduction to programming. Understanding HTML and CSS, we
                familiarize our campers with the terms they will need for our
                camp.
              </p>
              <div className="padding-15-15">
                <ul>
                  <li className="dropdown-item">
                    <span>
                      <p>Day Two</p>
                      <p>+</p>
                    </span>
                    <div className="dropdown-content">
                      <p>
                        Introduction to programming. Understanding HTML and CSS,
                        we familiarize our campers with the terms they will need
                        for our camp.
                      </p>
                    </div>
                  </li>
                  <li className="dropdown-item">
                    <p>Day Two</p>
                    <p>+</p>
                  </li>
                  <li className="dropdown-item">
                    <p>Day Two</p>
                    <p>+</p>
                  </li>
                  <li className="dropdown-item">
                    <p>Day Two</p>
                    <p>+</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="padding-50-50">
            <div className="row">
              <div className="col-sm-1">
                <h1 className="header-xl-black-courses">3</h1>
                <p className="p-black">Week</p>
              </div>
              <div className="col-sm-4">
                <p className="p-black">
                  Introduction to programming. Understanding HTML and CSS, we
                  familiarize our campers with the terms they will need for our
                  camp.
                </p>
                <div className="padding-15-15">
                  <ul>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-1">
                <h1 className="header-xl-black-courses">4</h1>
                <p className="p-black">Week</p>
              </div>
              <div className="col-sm-4">
                <p className="p-black">
                  Introduction to programming. Understanding HTML and CSS, we
                  familiarize our campers with the terms they will need for our
                  camp.
                </p>
                <div className="padding-15-15">
                  <ul>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                    <li className="dropdown-item">
                      <p>Day Two</p>
                      <p>+</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Courses

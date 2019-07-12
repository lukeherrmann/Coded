import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/main.sass"

const IndexPage = () => (
  <Layout>
    <div className="body-container">
      <div className="new-campers">
        <div className="container">
          <div className="camper-text-container">
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="camper-sm-text">
                  <h3>NOW ACCEPTING</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="camper-lg-text">
                  <h1>New Campers</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="camper-sm-text">
                  <p>Creative Techology Camp</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="camper-sm-text">
                  <p>Classes in apps, web, and VR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="enroll-btn">
                <div className="enroll-text">Enroll</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-body">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <div className="body-title">Camp Options</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-2">
              <div className="camp-option-text">Web</div>
              <div className="camp-option-paragraph">
                <p>
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </p>
              </div>
              <div className="learn-more-link">
                <Link to="/courses/">Learn More</Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-2">
              <div className="camp-option-text">App</div>
              <div className="camp-option-paragraph">
                <p>
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </p>
              </div>
              <div className="learn-more-link">
                <Link to="/courses/">Learn More</Link>
              </div>
            </div>
            <div className="col-xs-8 col-sm-2">
              <div className="camp-option-text">VR</div>
              <div className="camp-option-paragraph">
                <p>
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </p>
              </div>
              <div className="learn-more-link">
                <Link to="/courses/">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blue-square-1"></div>
        <div className="container">
          <div className="row end-xs">
            <div className="col-sm-3">
              <div className="white-square">
                <div className="row center-xs">
                  <div className="col-xs-6">
                    <div className="body-blue-text">
                      <h4>Benefit</h4>
                    </div>
                    <div className="body-title-wrap">
                      <h1>Future Facing</h1>
                    </div>
                    <div className="camp-option-paragraph">
                      <p>
                        We provide a fun learning enviornmnent for our students
                        while creating experiences mthat are engaging and
                        provide meaningful value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-vision">
            <div className="row">
              <div className="col-xs-6">
                <div className="body-title">
                  <h2>Our Vision</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="our-vision-quote">
                  <h2>
                    "Happiness is not something you postpone for the future; it
                    is something you design for the present."
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="camp-option-paragraph">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2">
                <div className="camp-option-paragraph">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-8 col-sm-2">
                <div className="camp-option-paragraph">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div className="row start-xs">
            <div className="col-sm">
              <div className="white-square"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="testimonials">
            <div className="row">
              <div className="col">
                <div className="body-title">
                  <h2>Testimonials</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-8">
                <div className="testimonial-quote">
                  <h2>
                    "Happiness is not something you postpone for the future; it
                    is something you design for the present."
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="camp-option-paragraph">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2">
                <div className="camp-option-paragraph">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-8 col-sm-2">
                <div className="camp-option-paragraph">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="find-camp">
            <div className="row center-xs">
              <div className="col">
                <div className="body-title">
                  <div className="find-camp-title">
                    <h2>Find A Camp</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col">
                <div className="camp-option-paragraph">
                  <p>Are you a parent or a business?</p>
                </div>
              </div>
            </div>
            <div className="row around-xs">
              <div className="col-xs-2">
                <div className="parent-or-business">I'm a parent</div>
              </div>
              <div className="col-xs-2">
                <div className="parent-or-business">I have a business</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

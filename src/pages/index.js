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
                <div className="camper-sm-text">NOW ACCEPTING</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="camper-lg-text">New Campers</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="camper-sm-text">Creative Techology Camp</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="camper-sm-text">
                  Classes in apps, web, and VR
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
                We provide a fun learning enviornmnent for our students while
                creating experiences mthat are engaging and provide meaningful
                value.
              </div>
              <div className="learn-more-link">
                <Link to="/courses/">Learn More</Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-2">
              <div className="camp-option-text">App</div>
              <div className="camp-option-paragraph">
                We provide a fun learning enviornmnent for our students while
                creating experiences mthat are engaging and provide meaningful
                value. We provide a fun learning enviornmnent for our students
                while creating experiences mthat are engaging and provide
                meaningful value.
              </div>
              <div className="learn-more-link">
                <Link to="/courses/">Learn More</Link>
              </div>
            </div>
            <div className="col-xs-8 col-sm-2">
              <div className="camp-option-text">VR</div>
              <div className="camp-option-paragraph">
                We provide a fun learning enviornmnent for our students while
                creating experiences mthat are engaging and provide meaningful
                value.
              </div>
              <div className="learn-more-link">
                <Link to="/courses/">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="blue-square-1"></div>
          <div className="row end-xs">
            <div className="col-sm-3">
              <div className="white-square">
                <div className="row center-xs">
                  <div className="col-xs-6">
                    <div className="body-blue-text">Benefit</div>
                    <div className="body-title-wrap">Future Facing</div>
                    <div className="camp-option-paragraph">
                      We provide a fun learning enviornmnent for our students
                      while creating experiences mthat are engaging and provide
                      meaningful value.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-vision">
            <div className="row">
              <div className="col-xs-6">
                <div className="body-title">Our Vision</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="our-vision-quote">
                  "Happiness is not something you postpone for the future; it is
                  something you design for the present."
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="camp-option-paragraph">
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </div>
              </div>
              <div className="col-xs-12 col-sm-2">
                <div className="camp-option-paragraph">
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </div>
              </div>
              <div className="col-xs-8 col-sm-2">
                <div className="camp-option-paragraph">
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

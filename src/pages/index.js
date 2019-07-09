import React from "react"

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
        <div>Hello</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

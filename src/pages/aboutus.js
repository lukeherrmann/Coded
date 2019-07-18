import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/main.sass"
import home1 from "../images/home_1.png"
import home2 from "../images/home_2.png"
import home3 from "../images/home_3.png"

const AboutUs = () => (
  <Layout>
    <img src={home1} />
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <div className="line-gray" />
        </div>
        <div className="col-xs-3">
          <div className="line-gray" />
        </div>
        <div className="col-xs-3">
          <div className="line-gray" />
        </div>
        <div className="col-xs-3">
          <div className="line-gray" />
        </div>
        <div className="row end-xs">
          <div className="col-xs-12">
            <div className="line-gray" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <h1 className="header-xl-black">About Us</h1>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-sm-9">
            <div className="blue-square-left-about" />
            <img src={home2} className="filler-photo" />
          </div>
          <div className="col-sm-3">
            <div className="padding-50-50">
              <h1 className="header-lg-black-about">Vision</h1>
            </div>
            <p className="p-black">
              In our we camp, we provide high quality coding experiences forout
              campers. Many of these are powered ny Lenovo ThinkPads that
              students can continue to work throughout the camp. We fully cover
              designing web an web based apps from start to finish.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-sm-3">
            <div className="padding-50-50">
              <h1 className="header-lg-black-about">Story</h1>
            </div>
            <p className="p-black">
              In our we camp, we provide high quality coding experiences forout
              campers. Many of these are powered ny Lenovo ThinkPads that
              students can continue to work throughout the camp. We fully cover
              designing web an web based apps from start to finish.
            </p>
          </div>
          <div className="col-sm-9">
            <div className="row end-sm">
              <div className="blue-square-right-about" />
              <img src={home2} className="filler-photo-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutUs

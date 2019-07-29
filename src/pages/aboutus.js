import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/main.sass"
import headerImage from "../images/headerimage.png"
import aboutUs1 from "../images/aboutus1.png"
import aboutUs2 from "../images/aboutus2.png"

const AboutUs = () => (
  <Layout>
    <img src={headerImage} className="aboutus-image-header" />
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
            <img src={aboutUs1} className="filler-photo" />
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
            <div className="row">
              <div className="col-sm-offset-1 col-sm-11">
                <img src={aboutUs2} className="filler-photo-2" />
              </div>
              <div className="col-sm-offset-8">
                <div className="blue-square-right-about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutUs

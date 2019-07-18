import React from "react"
import { Link } from "gatsby"
import FooterForm from "./footerform"

import logoWhite from "../images/codedWhite.png" 

const Footer = () => (
  <div className="footer-container">
    <div className="section-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-2">
            <div className="header-sm-white-footer">
              <img src={logoWhite} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-offset-2 col-sm-2">
            <h5 className="header-sm-white-footer">CAMPS</h5>
            <ul>
              <li className="list-item-sm-white">VR</li>
              <li className="list-item-sm-white">Web Design</li>
              <li className="list-item-sm-white">App Design</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-offset-1 col-sm-2">
            <h5 className="header-sm-white-footer">RESOURCES</h5>
            <ul>
              <li className="list-item-sm-white">Teaching Materials</li>
              <li className="list-item-sm-white">Interactive Websites</li>
              <li className="list-item-sm-white">Swift Playgrounds</li>
              <li className="list-item-sm-white">Intro to iOS</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-offset-1 col-sm-2">
            <h5 className="header-sm-white-footer">COMPANY</h5>
            <ul>
              <li className="list-item-sm-white">FAQ</li>
              <li className="list-item-sm-white">About</li>
            </ul>
          </div>
        </div>
        <div className="section-footer">
          <div className="row">
            <div className="col-sm-6">
            </div>
            <div className="col-sm-6">
              <FooterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer

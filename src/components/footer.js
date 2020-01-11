import React from "react"
import { Link } from "gatsby"

import logoWhite from "../images/codedWhite.png"
import LinkedIn from "../images/linkedin32.png"
import Insta from "../images/insta.png"

const Footer = () => (
  <div className="footer-container">
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xxs-offset-2 col-xxs-10 col-md-offset-0 col-md-4">
            <Link to="/">
              <img src={logoWhite} alt="logo-white" />
            </Link>
          </div>
          <div className="col-xxs-offset-2 col-xxs-10 col-md-offset-2 col-md-3">
            <h5 className="header-sm-white-footer">CAMPS</h5>
            <ul className="footer-list">
              <Link to="/courses">
                <li className="list-item-sm-white">Web Design</li>
              </Link>
              <Link to="/courses">
                <li className="list-item-sm-white">App Design</li>
              </Link>
              <Link to="/courses">
                <li className="list-item-sm-white">VR</li>
              </Link>
            </ul>
          </div>
          <div className="col-xxs-offset-2 col-xxs-10 col-md-offset-0 col-md-3">
            <h5 className="header-sm-white-footer">COMPANY</h5>
            <ul className="footer-list">
              <Link to="/faq/">
                <li className="list-item-sm-white">FAQ</li>
              </Link>
              <Link to="/aboutus/">
                <li className="list-item-sm-white">About</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="section-footer">
          <div className="row bottom-sm hide-mobile">
            <div className="col-xs-4 col-sm-4">
              <div className="row">
                <div className="col-xs-2">
                  <a href="https://www.linkedin.com/company/coded_camp/about/" target="_blank">
                    <img src={LinkedIn} alt="linkedin-icon" />
                  </a>
                </div>
                <div className="col-xs-2">
                  <a href="https://www.instagram.com/codedslc/" target="_blank">
                    <img src={Insta} alt="instagram-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxs-12 col-sm-offset-2 col-sm-6">
              <form
                name="footerSubscribe"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="signup-forms"
              >
                <input type="hidden" name="form-name" value="footerSubscribe" />
                <input type="hidden" name="bot-field" />
                <div className="row bottom-xs">
                  <div className="col-xxs-12 col-sm-8">
                    <input
                      className="footer-form"
                      name="email"
                      placeholder="Your Email"
                      type="text"
                    />
                  </div>
                  <div className="footer-button col-xxs-12 col-sm-4">
                    <button type="submit" className="btn-med-white">
                      <div className="btn-text-blue-sm">Subscribe</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <form
            name="footerSubscribe"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="signup-forms"
          >
            <input type="hidden" name="form-name" value="footerSubscribe" />
            <input type="hidden" name="bot-field" />
            <div className="row show-mobile padding-20-20">
              <div className="col-xxs-offset-1 col-xxs-10 col-xs-offset-2 col-xs-8">
                <input
                  className="footer-form"
                  name="email"
                  placeholder="Your Email"
                  type="text"
                />
              </div>
            </div>
            <div className="row show-mobile padding-20-20">
              <div className="col-xxs-offset-2 col-xxs-8 footer-button">
                <button type="submit" className="btn-med-white">
                  <div className="btn-text-blue-sm">Subscribe</div>
                </button>
              </div>
            </div>
          </form>
          <div className="row show-mobile padding-35-35">
            <div className="col-xxs logos">
              <a href="https://www.linkedin.com/company/coded_camp/about/" target="_blank">
                <img src={LinkedIn} alt="linkedin-icon"/>
              </a>
            </div>
            <div className="col-xxs logos">
              <a href="https://www.instagram.com/codedslc/" target="_blank">
                <img src={Insta} alt="instagram-icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer

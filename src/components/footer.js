import React from "react"
import { Link } from "gatsby"

import logoWhite from "../images/codedWhite.png"
import FB from "../images/fb.png"
import Insta from "../images/insta.png"
import Twitter from "../images/twitter.png"

const Footer = () => (
  <div className="footer-container">
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xxs-offset-2 col-xxs-10 col-md-offset-0 col-md-2">
            <Link to="/">
              <img src={logoWhite} alt="logo-white" />
            </Link>
          </div>
          <div className="col-xxs-offset-2 col-xxs-10 col-md-offset-4 col-md-2">
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
          <div className="col-xxs-offset-2 col-xxs-10 col-md-offset-1 col-md-2">
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
              <div className="row between-sm logos">
                <div className="col-xs">
                  <img src={FB} alt="facebook-icon" />
                </div>
                <div className="col-xs">
                  <img src={Twitter} alt="twitter-icon" />
                </div>
                <div className="col-xs">
                  <img src={Insta} alt="instagram-icon" />
                </div>
              </div>
            </div>
            <div className="col-xxs-12 col-sm-offset-2 col-sm-6">
              <form
                id="subscribe-footer"
                name="subscribe-footer"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="signup-forms"
              >
                <input type="hidden" name="form-name" value="contact-footer" />
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
                    <button
                      type="submit"
                      form="subcribe-footer"
                      className="btn-med-white"
                    >
                      <div className="btn-text-blue-sm">Subscribe</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <form
            id="subscribe-footer"
            name="subscribe-footer"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="signup-forms"
          >
            <input type="hidden" name="form-name" value="contact-footer" />
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
                <button
                  type="submit"
                  form="subcribe-footer"
                  className="btn-med-white"
                >
                  <div className="btn-text-blue-sm">Subscribe</div>
                </button>
              </div>
            </div>
          </form>
          <div className="row center-xxs show-mobile padding-35-35">
            <div className="col-xxs-offset-2 col-xxs-10">
              <div className="row around-xxs logos">
                <div className="col-xxs">
                  <img src={FB} alt="facebook-icon" />
                </div>
                <div className="col-xxs">
                  <img src={Twitter} alt="twitter-icon" />
                </div>
                <div className="col-xxs">
                  <img src={Insta} alt="instagram-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer

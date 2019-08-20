import React from "react"
import { Link } from "gatsby"

import logoWhite from "../images/codedWhite.png"
import FB from "../images/fb.png"
import Insta from "../images/insta.png"
import Twitter from "../images/twitter.png"

class Footer extends React.Component {
  state = { email: "" }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { email } = this.state
    return (
      <div className="footer-container">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="header-sm-white-footer">
                  <Link to="/">
                    <img src={logoWhite} alt="logo-white" />
                  </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-offset-2 col-sm-2">
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
              <div className="col-xs-12 col-sm-offset-1 col-sm-2">
                <h5 className="header-sm-white-footer">RESOURCES</h5>
                <ul className="footer-list">
                  <li className="list-item-sm-white">Teaching Materials</li>
                  <li className="list-item-sm-white">Interactive Websites</li>
                  <li className="list-item-sm-white">Swift Playgrounds</li>
                  <li className="list-item-sm-white">Intro to iOS</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-offset-1 col-sm-2">
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
              <div className="row bottom-sm">
                <div className="col-xxs-12 col-sm-6">
                  <div className="row between-sm">
                    <div className="logos">
                      <div className="col-sm-4">
                        <img src={FB} alt="facebook-icon" />
                      </div>
                      <div className="col-sm-4">
                        <img src={Twitter} alt="twitter-icon" />
                      </div>
                      <div className="col-sm-4">
                        <img src={Insta} alt="instagram-icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxs-12 col-sm-6">
                  <form onSubmit={this.handleSubmit}>
                    <div className="row bottom-xs">
                      <div className="col-xxs-12 col-sm-8">
                        <input
                          className="footer-form"
                          name="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="footer-button col-xxs-12 col-sm-4">
                        <div className="btn-med-white">
                          <div className="btn-text-blue-sm">Subscribe</div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

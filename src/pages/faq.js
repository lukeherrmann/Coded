import React from "react"
import Layout from "../components/layout"

class Faq extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faq">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-sm-offset-3 col-sm-9">
                  <h1 className="header-lg-black">FAQ</h1>
                </div>
              </div>
              <div className="padding-50-50">
                <div className="row">
                  <div className="col-sm-offset-3 col-sm-1">
                    <h1 className="header-md-gray">What</h1>
                  </div>
                  <div className="col-sm-1">
                    <h1 className="header-md-gray">When</h1>
                  </div>
                  <div className="col-sm-1">
                    <h1 className="header-md-gray">Where</h1>
                  </div>
                  <div className="col-sm-1">
                    <h1 className="header-md-gray">How</h1>
                  </div>
                  <div className="row">
                    <div className="col-offset-sm-3 col-sm-4">
                      <div className="faq-underline" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row between-xs">
                <div className="col-sm-offset-3 col-sm-6">
                  <div className="padding-15-15">
                    <ul>
                      <li className="dropdown-item">
                        <p>What should my camper bring?</p>
                        <p>+</p>
                      </li>
                      <li className="dropdown-item">
                        <p>Does my camper need a computer?</p>
                        <p>+</p>
                      </li>
                      <li className="dropdown-item">
                        <p>What is for lunch?</p>
                        <p>+</p>
                      </li>
                      <li className="dropdown-item">
                        <p>What should my child know before hand?</p>
                        <p>+</p>
                      </li>
                      <li className="dropdown-item">
                        <p>What can I do to prep my camper?</p>
                        <p>+</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Faq

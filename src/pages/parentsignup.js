import React from "react"
import IconRadio from "../components/iconradio"
import Forms from "../components/forms"
import BusinessForms from "../components/businessforms"
import Layout from "../components/layout"
import webIcon from "../images/web.png"
import appIcon from "../images/app.png"
import vrIcon from "../images/vr.png"
import "../styles/main.sass"

class ParentSignUp extends React.Component {
  state = { parent: "" }
  componentDidMount() {
    if (this.props.location.state.form === "parents")
      this.setState({ parent: true })
    else if (this.props.location.state.form === "business")
      this.setState({ parent: false })
    else this.setState({ parent: true })
  }

  render() {
    return (
      <Layout>
        <div className="sign-up">
          <div className="container">
            <div className="row">
              <div className="col-sm-offset-1 col-sm-5">
                <div className="padding-50-50">
                  <h1 className="header-lg-black">Sign Up</h1>
                </div>
                <div className="padding-20-20">
                  <p className="p-black"> Select Camps of Interest</p>
                </div>
                <div className="padding-20-20">
                  <IconRadio />
                </div>
                {this.state.parent ? <Forms /> : <BusinessForms />}
              </div>
              <div className="col-sm-offset-1 col-sm-4">
                <div className="padding-top-top">
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-sm">
                          <div className="row-center">
                            <img src={webIcon} />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">Web</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">
                      In our we camp, we provide high quality coding experiences
                      forout campers. Many of these are powered ny Lenovo
                      ThinkPads that students can continue to work throughout
                      the camp. We fully cover designing web an web based apps
                      from start to finish.
                    </p>
                  </div>
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-sm">
                          <div className="row-center">
                            <img src={appIcon} />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">App</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">
                      In our we camp, we provide high quality coding experiences
                      forout campers. Many of these are powered ny Lenovo
                      ThinkPads that students can continue to work throughout
                      the camp. We fully cover designing web an web based apps
                      from start to finish.
                    </p>
                  </div>
                  <div className="padding-35-35">
                    <div className="padding-20-20">
                      <div className="row">
                        <div className="col-sm">
                          <div className="row-center">
                            <img src={vrIcon} />
                            <div className="padding-top-20">
                              <h1 className="header-lg-black">VR</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="p-black">
                      In our we camp, we provide high quality coding experiences
                      forout campers. Many of these are powered ny Lenovo
                      ThinkPads that students can continue to work throughout
                      the camp. We fully cover designing web an web based apps
                      from start to finish.
                    </p>
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

export default ParentSignUp

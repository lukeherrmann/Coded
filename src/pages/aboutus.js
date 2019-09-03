import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import "../styles/main.sass"
import headerImage from "../images/headerimage.png"
import aboutUs1 from "../images/aboutus1.png"
import aboutUs2 from "../images/aboutus2.png"

class AboutUs extends React.Component {
  render() {
    const {
      data: {
        prismicAboutus: {
          data: {
            main_title,
            subtitle_1,
            description_1,
            subtitle_2,
            description_2,
          },
        },
      },
    } = this.props
    return (
      <Layout>
        <img
          src={headerImage}
          alt="header"
          className="aboutus-image-header"
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <h1 className="header-xl-black">{main_title.text}</h1>
            </div>
          </div>
        </div>
        <div className="section mobile">
          <div className="container">
            <div className="row middle-xs">
              <div className="col-sm-8">
                <div className="blue-square-left-about" />
                <img
                  src={aboutUs1}
                  alt="body-1"
                  className="filler-photo"
                />
              </div>
              <div className="col-xxs-12 col-md-offset-1 col-md-3">
                <div className="padding-50-50">
                  <h1 className="header-lg-black-about">{subtitle_1.text}</h1>
                </div>
                <p className="p-black">{description_1.text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mobile">
        <div className="row">
              <div className="col-xxs-12">
              <img
                  src={aboutUs1}
                  alt="body-mobile"
                  className="filler-photo-mobile"
                />
              </div>
            </div>
        </div>
        <div className="section mobile">
          <div className="container">
            <div className="row middle-xs">
              <div className="col-xxs-12 col-md-3">
                <h1 className="header-lg-black-about padding-50-50">
                  {subtitle_2.text}
                </h1>
                <p className="p-black">{description_2.text}</p>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-sm-offset-1 col-sm-11">
                    <img
                      src={aboutUs2}
                      alt="body-2"
                      className="filler-photo-2"
                    />
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
  }
}

export default AboutUs

export const pageQuery = graphql`
  query AboutUs {
    prismicAboutus {
      data {
        main_title {
          text
        }
        subtitle_1 {
          text
        }
        description_1 {
          text
        }
        subtitle_2 {
          text
        }
        description_2 {
          text
        }
      }
    }
  }
`

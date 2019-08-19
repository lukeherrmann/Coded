import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import "../styles/main.sass"
import home1 from "../images/home_1.png"
import home2 from "../images/home_2.png"
import home3 from "../images/home_3.png"
import Web from "../images/web.png"
import App from "../images/app.png"
import VR from "../images/vr.png"
import Vision from "../images/vision.png"
import Testimonials from "../images/testimonials.png"
import Microsoft from "../images/microsoft.png"
import Jazz from "../images/jazz.png"
import Utah from "../images/Utah.png"
import Fuze from "../images/fuze.png"
import Stars from "../images/Stars.png"
import Bees from "../images/bees.png"
import firstStar from "../images/firstStar.png"

class Index extends React.Component {
  render() {
    const {
      data: {
        prismicHomepage: {
          data: {
            course_1,
            course_description_1,
            course_title_2,
            course_description_2,
            course_title_3,
            course_description_3,
            mini_title_pic_right,
            pic_title_right,
            pic_right_desc,
            section_2_title,
            main_quote_1,
            sec_2_subquote_1,
            sec_2_subquote_2,
            sec_2_subquote_3,
            mini_title_pic_left,
            pic_title_left,
            pic_left_desc,
            section_3_title,
            main_testimonial,
            testimonial_1,
            testimonial_2,
            testimonial_3,
          },
        },
      },
    } = this.props
    return (
      <Layout>
        <div className="gradient-sq-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-3">
                <div className="line-white" />
              </div>
              <div className="col-xs-3">
                <div className="line-white" />
              </div>
              <div className="col-xs-3">
                <div className="line-white" />
              </div>
              <div className="col-xs-3">
                <div className="line-white" />
              </div>
              <div className="row end-xs">
                <div className="col-xs-12">
                  <div className="line-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="camper-text-container">
              <div className="row">
                <div className="col-xs-12 col-sm-2">
                  <h3 className="header-med-white">NOW ACCEPTING</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <h1 className="header-xl-white">New Campers</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <p className="header-med-white">Creative Techology Camp</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <p className="header-med-white">
                    Classes in apps, web, and VR
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="btn-sm-white">
                  <Link to="/signup/">
                    <h2 className="btn-text-blue">Enroll</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-1">
          <img src={home1} alt="header-image-home" />
        </div>
        <div className="body-main">
          <div className="section">
            <div className="camp-options">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-3">
                    <div className="padding-20-20">
                      <h1 className="header-lg-black">Camp Options</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxs-offset-2 col-xxs-6 col-sm-2">
                    <div className="padding-15-15">
                      <img src={Web} alt="web-icon" />
                    </div>
                    <div className="padding-15-15">
                      <h3 className="header-med-black">{course_1.text}</h3>
                    </div>
                    <p className="p-black">{course_description_1.text}</p>
                    <div className="link-blue">
                      <Link to="/courses/">Learn More</Link>
                    </div>
                  </div>
                  <div className="col-xxs-offset-2 col-xxs-6 col-sm-offset-1 col-sm-2">
                    <div className="padding-15-15">
                      <img src={App} alt="app-icon" />
                    </div>
                    <div className="padding-15-15">
                      <h3 className="header-med-black">
                        {course_title_2.text}
                      </h3>
                    </div>
                    <p className="p-black">{course_description_2.text}</p>
                    <div className="link-blue">
                      <Link to="/courses/">Learn More</Link>
                    </div>
                  </div>
                  <div className="col-xxs-offset-2 col-xxs-6 col-sm-offset-1 col-sm-2">
                    <div className="padding-15-15">
                      <img src={VR} alt="vr-icon" />
                    </div>
                    <div className="padding-15-15">
                      <h3 className="header-med-black">
                        {course_title_3.text}
                      </h3>
                    </div>
                    <p className="p-black">{course_description_3.text}</p>
                    <div className="link-blue">
                      <Link to="/courses/">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="photo-section-1">
            <div className="blue-square-1" />
            <div className="gray-sq-right" />
            <div className="container">
              <div className="row middle-sm">
                <div className="col-xs-12 col-sm-10">
                  <img src={home2} alt="home-body-image-1" className="img-2" />
                </div>
                <div className="col-xs-12 col-sm-2">
                  <h6 className="body-blue-text">
                    {mini_title_pic_right.text}
                  </h6>
                  <div className="padding-20-20">
                    <h1 className="header-lg-black-wrap">
                      {pic_title_right.text}
                    </h1>
                  </div>
                  <p className="p-black">{pic_right_desc.text}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="our-vision">
                <div className="row middle-sm">
                  <div className="col-xs-1">
                    <img src={Vision} alt="vision-icon" />
                  </div>
                  <div className="col-xs-2">
                    <h2 className="header-lg-black">{section_2_title.text}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-8">
                    <div className="padding-50-50">
                      <h2 className="header-med-black">{main_quote_1.text}</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-2">
                    <p className="p-black">{sec_2_subquote_1.text}</p>
                  </div>
                  <div className="col-xs-12 col-sm-offset-1 col-sm-2">
                    <p className="p-black">{sec_2_subquote_2.text}</p>
                  </div>
                  <div className="col-xs-8 col-sm-offset-1 col-sm-2">
                    <p className="p-black">{sec_2_subquote_3.text}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="padding-50-50">
                      <Link to="/aboutus/">
                        <div className="btn-blue-sm">
                          <h5 className="btn-text-white">Our Story</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="photo-section-2">
            <div className="blue-square-2" />
            <div className="gray-sq-left" />
            <div className="container">
              <div className="row middle-xs">
                <div className="col-xs-12 col-sm-2">
                  <h6 className="body-blue-text">{mini_title_pic_left.text}</h6>

                  <div className="padding-20-20">
                    <h1 className="header-lg-black-wrap">
                      {pic_title_left.text}
                    </h1>
                  </div>
                  <p className="p-black">{pic_left_desc.text}</p>
                </div>
                <div className="col-xs-12 col-sm-offset-1 col-sm-9">
                  <img src={home3} alt="home-body-image-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <div className="testimonials">
                <div className="row middle-sm">
                  <div className="col-sm-1">
                    <img src={Testimonials} alt="testimonial-icon" />
                  </div>
                  <div className="col-sm-2">
                    <div className="header-lg-black">
                      <h2>{section_3_title.text}</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxs-8 col-md-7">
                    <div className="header-med-black">
                      <div className="padding-50-50">
                        <h2>"{main_testimonial.text}"</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-3">
                    <div className="testimonial-quotes">
                      <p className="p-black">"{testimonial_1.text}"</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3">
                    <div className="">
                      <p className="p-black">"{testimonial_2.text}"</p>
                    </div>
                  </div>
                  <div className="col-xs-12  col-md-3">
                    <div className="">
                      <p className="p-black">"{testimonial_3.text}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="row center-xs">
                <div className="padding-20-20">
                  <h2 className="header-lg-black">Find A Camp</h2>
                </div>
              </div>
              <div className="row center-xs">
                <div className="p-black">
                  <p>Are you a parent or a business?</p>
                </div>
              </div>
              <div className="padding-50-50">
                <div className="row between-sm">
                  <div className="col-xs-12 col-md-5">
                    <Link to="/signup" state={{ form: "parents" }}>
                      <div className="box-shadow">
                        <div className="box-shadow-text">
                          <div className="padding-15-15">
                            <p className="p-black">I'm a</p>
                          </div>
                          <h2 className="header-lg-black">Parent</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-md-5">
                    <Link to="/signup" state={{ form: "business" }}>
                      <div className="box-shadow">
                        <div className="box-shadow-text">
                          <div className="padding-15-15">
                            <p className="p-black">I have a</p>
                          </div>
                          <h2 className="header-lg-black">Business</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gray-partner-container">
          <div className="container">
            <div className="row center-xs">
              <div className="padding-20-20">
                <h2 className="header-lg-gray">Our Partners</h2>
              </div>
            </div>
            <div className="row between-xs">
              <div className="col-md-1">
                <img className="partner-img" src={Microsoft} alt="microsoft" />
              </div>
              <div className="col-md-1">
                <img className="partner-img" src={Jazz} alt="jazz" />
              </div>
              <div className="col-md-1">
                <img className="partner-img" src={Utah} alt="utah" />
              </div>
              <div className="col-md-1">
                <img className="partner-img" src={Fuze} alt="fuze" />
              </div>
              <div className="col-md-1">
                <img className="partner-img" src={Stars} alt="stars" />
              </div>
              <div className="col-md-1">
                <img className="partner-img" src={Bees} alt="bees" />
              </div>
              <div className="col-md-1">
                <img className="partner-img" src={firstStar} alt="firststar" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query HomePage {
    prismicHomepage {
      data {
        course_1 {
          text
        }
        course_description_1 {
          text
        }
        course_title_2 {
          text
        }
        course_description_2 {
          text
        }
        course_title_3 {
          text
        }
        course_description_3 {
          text
        }
        mini_title_pic_right {
          text
        }
        pic_title_right {
          text
        }
        pic_right_desc {
          text
        }
        section_2_title {
          text
        }
        main_quote_1 {
          text
        }
        sec_2_subquote_1 {
          text
        }
        sec_2_subquote_2 {
          text
        }
        sec_2_subquote_3 {
          text
        }
        mini_title_pic_left {
          text
        }
        pic_title_left {
          text
        }
        pic_left_desc {
          text
        }
        section_3_title {
          text
        }
        main_testimonial {
          text
        }
        testimonial_1 {
          text
        }
        testimonial_2 {
          text
        }
        testimonial_3 {
          text
        }
      }
    }
  }
`

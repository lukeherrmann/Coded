import React from "react"
import { Link, graphql } from "gatsby"

import FirstHoverDropdown from "../components/firsthoverdropdown"
import SecondHoverDropdown from "../components/secondhoverdropdown"
import ThirdHoverDropdown from "../components/thirdhoverdropdown"
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
import Utah from "../images/utah.png"
import Fuze from "../images/fuze.png"
import Stars from "../images/Stars.png"
import Bees from "../images/bees.png"
import firstStar from "../images/firstStar.png"
import webGrid from "../images/webGrid.png"
import mobileGrid from "../images/mobileGrid.png"


class Index extends React.Component {
  state = { img: "", tag: "<h1>" }



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
              <div className="col-xxs-3 col-xs-3">
                <div className="line-white" />
              </div>
              <div className="col-xxs-3 col-xs-3">
                <div className="line-white" />
              </div>
              <div className="col-xxs-3 col-xs-3">
                <div className="line-white" />
              </div>
              <div className="col-xxs-3 col-xs-3">
                <div className="line-white" />
              </div>
              <div className="row end-xs">
                <div className="col-xxs-12 col-xs-12">
                  <div className="line-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="camper-text-container">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <h3 className="header-med-white">NOW ACCEPTING</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xxs-6 col-md-4">
                  <h1 className="header-xl-white">New Campers</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p className="header-med-white">Creative Techology Camp</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p className="header-med-white">
                    Classes in apps, web, and VR
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <Link to="/signup/">
                  <div className="btn-sm-white">
                    <h2 className="btn-text-blue">Enroll</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img src={home1} className="photo-1" alt="header-home" />

        <div className="container show-mobile-lg">
          <div className="row">
            <div className="col-xxs-12">
              <img src={home1} className="photo-1-mobile" alt="header-home" />
            </div>
          </div>
        </div>

        <div className="body-main">
          <div className="section mobile">
            <div className="camp-options">
              <div className="container">
                <div className="row">
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-12">
                    <h1 className="header-lg-black padding-20-20">
                      Camp Options
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-2">
                    <div className="body-text-spacing">
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
                  </div>
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-2">
                    <div className="body-text-spacing">
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
                  </div>
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-2">
                    <div className="body-text-spacing">
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
                  <div className="col-md-offset-1 col-md-3 mobile-padding-50-50 hide-mobile">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="hover-title show-hover">
                          <div className="hover-dot" />
                          <p className="hover-font">Grid System</p>
                        </div>
                        <div className="hide-hover">
                          <div className="hover-background padding-35-35-all">
                            <h4 className="padding-10-10 hover-title-font">
                              Desktop Computer
                            </h4>
                            <img
                              src={webGrid}
                              className="grid"
                              alt="web-grid"
                            />
                            <p className="padding-10-10">
                              Grids help websites adapt to different screen
                              sizes. Checkout the horizontal lines. See how they
                              change for different screens.
                            </p>
                            <div className="row middle-xxs">
                              <div className="col-xxs-4">
                                <img
                                  src={mobileGrid}
                                  className="grid"
                                  alt="mobile-grid"
                                />
                              </div>
                              <div className="col-xxs-8">
                                <p className="padding-10-10 hover-title-font">
                                  Phone
                                </p>
                                <p className="padding-10-10">
                                  Mobile devices are often constrained by
                                  display size and require a different approach
                                  to how content is laid out on screen.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row show-mobile mobile-padding-50-50">
                  <div className="col-xs-12">
                    <FirstHoverDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="photo-section-1">
            <div className="blue-square-1" />
            <div className="gray-sq-right" />
            <div className="container">
              <div className="row">
                <div className="col-xs-3"></div>
              </div>
              <div className="row middle-xs">
                <div className="col-xs-12 col-sm-9 col-lg-10">
                  <img src={home2} alt="home-body-1" className="img-2" />
                </div>
                <div className="col-xs-offset-1 col-xs-8 col-sm-offset-0 col-sm-3 col-lg-2 mobile-padding-50-50">
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

          <div className="section mobile">
            <div className="container">
              <div className="row show-mobile mobile-padding-50-50">
                <div className="col-xs-12">
                  <SecondHoverDropdown />
                </div>
              </div>
              <div className="our-vision">
                <div className="row middle-xs">
                  <div className="col-xs-offset-1 col-xs-2 col-md-offset-0 col-md-1 ">
                    <img src={Vision} alt="vision-icon" />
                  </div>
                  <div className="col-xs-4 col-sm-4">
                    <h2 className="header-lg-black">{section_2_title.text}</h2>
                  </div>
                </div>
                <div className="row middle-xs">
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-7">
                    <div className="padding-50-50">
                      <h2 className="header-med-black">{main_quote_1.text}</h2>
                    </div>
                  </div>
                  <div className="col-md-offset-2 col-md-3 hide-mobile">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="hover-title show-hover">
                          <div className="hover-dot" />
                          <p className="hover-font">Text Styles</p>
                        </div>
                        <div className="hide-hover">
                          <div className="hover-background padding-35-35-all">
                            <p className="padding-10-10 hover-title-font">{this.state.tag}</p>
                            <p className="padding-10-10">
                              Can you spot {this.state.tag}? What do those mean?
                              In coding you can make text bigger or smaller by
                              using an h and then a number. h1 are the largest,
                              and h5 is really small!
                            </p>
                            <p className="padding-10-10">
                              Can you spot other text styles?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row top-xs">
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-2">
                    <p className="body-text-spacing p-black">
                      {sec_2_subquote_1.text}
                    </p>
                  </div>
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-2">
                    <p className="body-text-spacing p-black">
                      {sec_2_subquote_2.text}
                    </p>
                  </div>
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-2">
                    <p className="body-text-spacing p-black">
                      {sec_2_subquote_3.text}
                    </p>
                  </div>
                </div>

                <div className="padding-50-50">
                  <div className="row">
                    <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-12">
                      <div className="btn-center">
                        <Link to="/aboutus/">
                          <div>
                            <h5 className="btn-text-white">Our Story</h5>
                          </div>
                        </Link>
                      </div>
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
                  <h1 className="header-lg-black-wrap padding-20-20">
                    {pic_title_left.text}
                  </h1>
                  <p className="p-black">{pic_left_desc.text}</p>
                </div>
                <div className="col-xs-12 col-sm-offset-1 col-sm-9">
                  <img src={home3} alt="home-body-2" className="img-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="photo-section-2-mobile">
            <div className="gray-sq-right" />
            <div className="container">
              <div className="row middle-xs">
                <div className="col-xs-12 col-sm-9 col-lg-10">
                  <img src={home3} alt="home-body-1" className="img-2" />
                </div>
                <div className="col-xs-offset-1 col-xs-8 col-sm-offset-0 col-sm-3 col-lg-2 padding-50-50">
                  <h6 className="body-blue-text">{mini_title_pic_left.text}</h6>
                  <div className="padding-20-20">
                    <h1 className="header-lg-black-wrap">
                      {pic_title_left.text}
                    </h1>
                  </div>
                  <p className="p-black">{pic_left_desc.text}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <div className="testimonials">
                <div className="row middle-sm">
                  <div className="col-xs-offset-1 col-xs-1 col-md-offset-0 col-md-1">
                    <img src={Testimonials} alt="testimonial-icon" />
                  </div>
                  <div className="col-xs-offset-1 col-xs-9 col-md-offset-0">
                    <div className="header-lg-black">
                      <h2>{section_3_title.text}</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-7">
                    <div className="padding-50-50">
                      <h2 className="header-med-black">
                        "{main_testimonial.text}"
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-offset-2 col-md-3 hide-mobile">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="hover-title show-hover">
                          <div className="hover-dot" />
                          <p className="hover-font">Hover State</p>
                        </div>
                        <div className="hide-hover">
                          <div className="hover-background padding-35-35-all">
                            <p className="padding-10-10 hover-title-font">{this.state.tag}</p>
                            <p className="padding-10-10">
                              Can you spot {this.state.tag}? What do those mean?
                              In coding you can make text bigger or smaller by
                              using an h and then a number. h1 are the largest,
                              and h5 is really small!
                            </p>
                            <p className="padding-10-10">
                              Can you spot other text styles?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-3">
                    <div className="body-text-spacing">
                      <p className="p-black">"{testimonial_1.text}"</p>
                    </div>
                  </div>
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-3">
                    <div className="body-text-spacing">
                      <p className="p-black">"{testimonial_2.text}"</p>
                    </div>
                  </div>
                  <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-3">
                    <div className="body-text-spacing">
                      <p className="p-black">"{testimonial_3.text}"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row show-mobile mobile-padding-50-50">
                <div className="col-xs-12">
                  <ThirdHoverDropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="section mobile">
            <div className="container">
              <div className="row">
                <div className="col-xxs-12 center-items">
                  <h2 className="header-lg-black padding-20-20">Find A Camp</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xxs-12 center-items">
                  <p className="p-black">Are you a Parent or a Business?</p>
                </div>
              </div>
              <div className="padding-50-50">
                <div className="row between-sm">
                  <div className="col-xxs-12 col-md-5 boxes">
                    <Link
                      className="link"
                      to="/signup"
                      state={{ form: "Parent" }}
                    >
                      <div className="box-shadow">
                        <div className="box-shadow-text">
                          <p className="p-box padding-15-15">I'm a</p>
                          <h2 className="header-lg-black">Parent</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xxs-12 col-md-5 boxes">
                    <Link
                      className="link"
                      to="/signup"
                      state={{ form: "Business" }}
                    >
                      <div className="box-shadow">
                        <div className="box-shadow-text">
                          <p className="p-box padding-15-15">I have a</p>
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
          <div className="container padding-50-50">
            <div className="row center-xxs">
              <h2 className="header-lg-gray padding-20-20">Our Partners</h2>
            </div>
            <div className="row middle-xxs padding-20-20 icons">
              <div className="col-xxs">
                <img className="partner-img" src={Microsoft} alt="microsoft" />
              </div>
              <div className="col-xxs">
                <img className="partner-img" src={Jazz} alt="jazz" />
              </div>
              <div className="col-xxs">
                <img className="partner-img" src={Utah} alt="utah" />
              </div>
              <div className="col-xxs">
                <img className="partner-img" src={Fuze} alt="fuze" />
              </div>
              <div className="col-xxs">
                <img className="partner-img" src={Stars} alt="stars" />
              </div>
              <div className="col-xxs">
                <img className="partner-img" src={Bees} alt="bees" />
              </div>
              <div className="col-xxs">
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

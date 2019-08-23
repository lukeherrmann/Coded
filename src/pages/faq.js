import React from "react"
import FaqSections from "../components/faqsections"
import { graphql } from "gatsby"
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
            </div>
            <div className="padding-50-50">
              <div className="container">
                <div className="row">
                  <div className="col-sm-offset-3">
                    <FaqSections
                      data={this.props.data.allPrismicFaqSection.nodes}
                    />
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

export const query = graphql`
  query AllFAQ {
    allPrismicFaqSection {
      nodes {
        data {
          section_title {
            text
          }
          questions_group {
            question {
              text
            }
            answer {
              text
            }
          }
        }
      }
    }
  }
`

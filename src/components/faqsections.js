import React from "react"
import FaqQuestions from "../components/faqquestions"
import FaqTitle from "./faqtitle"

class FaqSections extends React.Component {
  state = { selectedSection: "" }

  componentDidMount(){
    const sec = this.props.data[0]
    const secTitle = sec.data.section_title.text
    this.setState({ selectedSection: secTitle})
  }

  setSection = (section) => {
    this.setState({ selectedSection: section })
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row bottom-xs">
            {this.props.data.map((section, index) => {
              return (
                <div className="col-sm-1">
                  <FaqTitle
                    title={section.data.section_title.text}
                    index={index}
                    getSection={this.setSection}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="row">

        </div>
        <div className="padding-35-35">
          <FaqQuestions sections={this.props.data} selectedSection={this.state.selectedSection} />
        </div>
      </>
    )
  }
}

export default FaqSections

import React from "react"
import FaqQuestions from "../components/faqquestions"
import FaqTitle from "./faqtitle"

class FaqSections extends React.Component {
  state = { activeTab: "" }

  componentDidMount() {
    const sec = this.props.data[0]
    const secTitle = sec.data.section_title.text
    this.setState({ activeTab: secTitle })
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
    debugger
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row bottom-xxs tabs">
            {this.props.data.map((section, index) => {
              const label = section.data.section_title.text
              return (
                <div className="col-xxs-3 col-sm-2 col-md-1">
                  <FaqTitle
                    activeTab={this.state.activeTab}
                    key={label}
                    label={label}
                    onClick={this.onClickTabItem}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="padding-35-35">
          <FaqQuestions
            sections={this.props.data}
            selectedSection={this.state.activeTab}
          />
        </div>
      </>
    )
  }
}

export default FaqSections

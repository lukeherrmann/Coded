import React from "react"
import FaqQuestions from "../components/faqquestions"

class FaqSections extends React.Component {
  state = { data: {}, selectedSection: "" }

  handleChange = changeEvent => {
    this.setState({ selectedSection: changeEvent.target.value })
  }

  render() {
    return (
      <>
        <div className="container">
          <form>
            <div className="row">
              {this.props.data.map(section => {
                return (
                  <div className="col-sm-1">
                    <label>
                      <h1>{section.data.section_title.text}</h1>
                      <input
                        type="radio"
                        name="section"
                        value={section.data.section_title.text}
                        checked={
                          this.state.selectedSection ===
                          section.data.section_title.text
                        }
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                )
              })}
            </div>
          </form>
        </div>
        <FaqQuestions
          sections={this.props.data}
          selectedSection={this.state.selectedSection}
        />
      </>
    )
  }
}

export default FaqSections

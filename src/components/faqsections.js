import React from "react"
import FaqQuestions from "../components/faqquestions"

class FaqSections extends React.Component {
  state = { displayInfo: false, selectedSection: "" }

  handleClick = section => {
    this.setState({ selectedSection: section, })
  }

  showDropdownMenu = event => {
    event.preventDefault()
    debugger
    this.setState({ displayInfo: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = () => {
    this.setState({ displayInfo: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu)
    })
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
                    <h1
                      onClick={(this.showDropdownMenu, () => this.handleClick(section.data.section_title.text))}
                      className={`${this.state.displayInfo ? 'p-black' : 'header-med-black'} `}
                    >
                      {section.data.section_title.text}
                    </h1>
                  </div>
                )
              })}
            </div>
          </form>
        </div>
        <div className="padding-35-35">
          <FaqQuestions
            sections={this.props.data}
            selectedSection={this.state.selectedSection}
          />
        </div>
      </>
    )
  }
}

export default FaqSections

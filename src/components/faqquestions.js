import React from "react"
import Question from "../components/question"

class FaqQuestions extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {this.props.sections.map(section => {
              if (
                section.data.section_title.text === this.props.selectedSection
              )
                return section.data.questions_group.map((questions, index) => {
                  return (
                    <ul>
                      <Question
                        index={index}
                        question={questions.question.text}
                        answer={questions.answer.text}
                      />
                    </ul>
                  )
                })
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default FaqQuestions

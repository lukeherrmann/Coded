import React from "react"

class WeeksTitle extends React.Component {
  render() {
    return (
      <>
      <div className="padding-top-30" />
        <p className="p-black">Week</p>
        <h1 className="header-xl-black-courses">{this.props.week_number}</h1>
      </>
    )
  }
}

export default WeeksTitle

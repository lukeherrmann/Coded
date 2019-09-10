import React from "react"

class CourseTab extends React.Component {
  onClick = () => {
    const { tab, onClick } = this.props
    onClick(tab)
  }

  render() {
    const {
      onClick,
      props: { activeTab, tab, img },
    } = this

    let className = "tab-item"

    if (activeTab === tab) {
      className += " tab-item-active"
    }

    return (
      <div className={className} onClick={onClick}>
        <img src={img} className="tab-img" alt="course-icon" />
        <h3 className="padding-20-20">{tab}</h3>
      </div>
    )
  }
}

export default CourseTab

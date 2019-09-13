import React from "react"

class CourseTab extends React.Component {
  state= { icon: this.props.img}

  onClick = () => {
    const { tab, onClick } = this.props
    onClick(tab)
  }

  render() {
    const {
      onClick,
      props: { activeTab, tab, img, imgIcon },
    } = this

    let className = "tab-item"
    let icon = img
  

    if (activeTab === tab) {
      className += " tab-item-active"
       icon = imgIcon
    }
    
    return (
      <div className={className} onClick={onClick}>
        <img src={icon} className="tab-img" alt="course-icon" />
        <h3 className="padding-20-20">{tab}</h3>
      </div>
    )
  }
}

export default CourseTab

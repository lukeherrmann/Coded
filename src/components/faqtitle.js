import React from "react"

class FaqTitle extends React.Component {
  state = { displayTitle: false }

  componentDidMount(){
    const data = this.props
  }

  onClick = () => {
    const { label, onClick} = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label
      },
    } = this

    let className = 'p-black'

    if (activeTab === label) {
      className += ' tab-list-active'
    }
    return (
      <>
        <h1
          className={className}
          onClick={onClick}
        >
          {label}
        </h1>
      </>
    )
  }
}

export default FaqTitle

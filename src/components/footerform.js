import React from "react"

class FooterForm extends React.Component {
  state = { email: "" }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { email } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="footer-form"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={this.handleChange}
        />
        <div className="btn-med-white">
          <div className="btn-text-blue-sm">Subscribe</div>
        </div>
      </form>
    )
  }
}

export default FooterForm

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
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={this.handleChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    )
  }
}

export default FooterForm

import React from "react"

class Forms extends React.Component {
  state = {
    business: "",
    numberOfCampers: "",
    name: "",
    number: "",
    email: "",
    location: "",
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleRadio = event => {
    this.setState({ selectedOption: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <form className="signup-forms" onSubmit={this.handleSubmit}>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="business"
              placeholder="Business"
              value={this.state.business}
              onChange={this.handleChange}
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="numberOfCampers"
              placeholder="Approximate Amount Of Campers"
              value={this.state.numberOfCampers}
              onChange={this.handleChange}
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="number"
              placeholder="Phone Number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="location"
              placeholder="Location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="padding-35-35">
            <div className="btn-blue-sm">
              <div className="btn-text-white">
                <h5>Sign Up</h5>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Forms

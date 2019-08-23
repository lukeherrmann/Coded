import React from "react"

class Forms extends React.Component {
  state = {
    name: "",
    number: "",
    email: "",
    location: "",
    selectedOption: "",
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
          <div className="padding-20-20">
            <div className="row">
              <div className="col-xs-6">
                <label className="forms-radio">
                  <input
                    type="radio"
                    name="programLength"
                    value="month"
                    checked={this.state.selectedOption === "month"}
                    onChange={this.handleRadio}
                  />
                  <p className="p-black padding-left">Month Program - $999.00</p>
                </label>
              </div>
              <div className="col-xs-6">
                <label className="forms-radio">
                  <input
                    type="radio"
                    name="programLength"
                    value="week"
                    checked={this.state.selectedOption === "week"}
                    onChange={this.handleRadio}
                  />
                  <p className="p-black padding-left">Week Program - $299.00</p>
                </label>
              </div>
            </div>
          </div>
          <div className="padding-35-35">
            <p className="i-black">
              Payment is not taken here. This is just for contact.
            </p>
          </div>
          <div className="padding-20-20">
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

import React from "react"

class Forms extends React.Component {
  render() {
    return (
      <div>
        <form
          id="parent-signup"
          name="parent-signup"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="signup-forms"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="parent-contact" />
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="name"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="number"
              placeholder="Phone Number"
              type="text"
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="email"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="padding-20-20">
            <input
              className="form-underline"
              name="location"
              placeholder="Location"
              type="text"
            />
          </div>
          <div className="padding-20-20">
            <div className="row">
              <div className="col-xs-6">
                <label className="forms-radio">
                  <input type="radio" name="programLength" value="month" />
                  <p className="p-black padding-left">
                    Month Program - $999.00
                  </p>
                </label>
              </div>
              <div className="col-xs-6">
                <label className="forms-radio">
                  <input type="radio" name="programLength" value="week" />
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
            <button type="submit" form="parent-signup" className="btn-blue-sm">
              <div className="btn-text-white">
                <h5>Sign Up</h5>
              </div>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Forms

import React from "react"

const Forms = () => (
  <div>
    <form
      id="parent-signup"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="signup-forms"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
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
              <p className="p-black padding-left">Month Program - $999.00</p>
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

      <p className="i-black padding-35-35">
        Payment is not taken here. This is just for contact.
      </p>
      <button type="submit" form="parent-signup" className="btn-blue-sm">
        <div className="btn-text-white">
          <h5>Sign Up</h5>
        </div>
      </button>
    </form>
  </div>
)

export default Forms

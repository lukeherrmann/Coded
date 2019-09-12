import React from "react"
import webIcon from "../images/webGrey.png"
import appIcon from "../images/appGrey.png"
import vrIcon from "../images/vrGrey.png"

const Forms = () => (
  <div>
    <form
      id="signup-parent"
      name="signup-parent"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="signup-forms"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div className="row padding-20-20">
        <div className="col-xxs-offset-2 col-xxs-2 col-md-offset-2">
          <label>
            <div className="center-items">
              <div className="padding-bottom-5">
                <img src={webIcon} alt="web-icon" />
              </div>
              <p className="p-black">Web</p>
              <div className="padding-15-15">
                <input type="radio" name="campType" value="web" />
              </div>
            </div>
          </label>
        </div>
        <div className="col-xxs-offset-1 col-xxs-2">
          <label>
            <div className="center-items">
              <div className="padding-bottom-5">
                <img src={appIcon} alt="app-icon" />
              </div>
              <p className="p-black">App</p>
              <div className="padding-15-15">
                <input type="radio" name="campType" value="app" />
              </div>
            </div>
          </label>
        </div>
        <div className="col-xxs-offset-1 col-xxs-2">
          <label>
            <div className="center-items">
              <div className="padding-bottom-5">
                <img src={vrIcon} alt="vr-icon" />
              </div>
              <p className="p-black">VR</p>
              <div className="padding-15-15">
                <input type="radio" name="campType" value="vr" />
              </div>
            </div>
          </label>
        </div>
      </div>
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
      <button type="submit" form="signup-parent" className="btn-blue-sm">
        <div className="btn-text-white">
          <h5>Sign Up</h5>
        </div>
      </button>
    </form>
  </div>
)

export default Forms

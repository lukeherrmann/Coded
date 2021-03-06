import React from "react"
import webIcon from "../images/webGrey.png"
import appIcon from "../images/appGrey.png"
import vrIcon from "../images/vrGrey.png"

const BusinessForms = () => (
  <div>
    <form
      name="business"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="signup-forms"
    >
      <input type="hidden" name="form-name" value="business" />
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
                <input type="radio" name="campTypeBusiness" value="web" />
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
                <input type="radio" name="campTypeBusiness" value="app" />
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
                <input type="radio" name="campTypeBusiness" value="vr" />
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="padding-20-20">
        <input
          className="form-underline"
          name="businessName"
          placeholder="Business"
          type="text"
        />
      </div>
      <div className="padding-20-20">
        <input
          className="form-underline"
          name="Campers"
          placeholder="Approximate Amount Of Campers"
          type="text"
        />
      </div>
      <div className="padding-20-20">
        <input
          className="form-underline"
          name="fullname"
          placeholder="Name"
          type="text"
        />
      </div>
      <div className="padding-20-20">
        <input
          className="form-underline"
          name="businessNumber"
          placeholder="Phone Number"
          type="text"
        />
      </div>
      <div className="padding-20-20">
        <input
          className="form-underline"
          name="businessEmail"
          placeholder="Email"
          type="text"
        />
      </div>
      <div className="padding-20-20">
        <input
          className="form-underline"
          name="businessLocation"
          placeholder="Location"
          type="text"
        />
      </div>
      <div className="padding-35-35">
        <button type="submit" className="btn-blue-sm">
          <div className="btn-text-white">
            <h5>Sign Up</h5>
          </div>
        </button>
      </div>
    </form>
  </div>
)

export default BusinessForms

import React from "react"

import { Link } from "gatsby"
import "./styles.sass"

const Footer = () => (
  <>
    <div className="footerCont">
      <h3 className="footerFont">This is the footer!</h3>
      <br />
      <Link className="footerFont" to="/">Home</Link>
      <br />
      <Link className="footerFont" to="/aboutus/">About Us</Link>
      <br />
      <Link className="footerFont" to="/signup/">Sign Up</Link>
      <br />
      <Link className="footerFont" to="/courses/">Courses</Link>
    </div>
  </>
)

export default Footer

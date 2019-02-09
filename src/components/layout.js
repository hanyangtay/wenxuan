import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

import email from "../images/email.png"
import linkedin from "../images/linkedin.png"

const Layout = ({ children }) => (

  <div>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>

      <footer style={{
          textAlign: `center`,
          fontWeight: 200,
          fontSize: 12,
          margin: `50px`,
        }}>

        <a href="mailto:wxue@wesleyan.edu" target="_blank" rel="noopener noreferrer">
          <img src={email} width="24" height="24" alt="email"  className="footerLink" />
        </a>

        &nbsp; &nbsp; &nbsp; &nbsp;

        <a href="https://www.linkedin.com/in/unique-wenxuan-xue/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin}  height="20" style={{
          position: `relative`,
          bottom: `2px`,}} alt="linkedin" className="footerLink" />
        </a>
        <br />
        Copyright {new Date().getFullYear()} Wenxuan Xue. All Rights Reserved.
      </footer>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

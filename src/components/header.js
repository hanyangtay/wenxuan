import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
      fontFamily: `Nunito Sans, sans-serif`,
    }}
  >
    <div
      id="header"
    >

      <div>


        <h1 style={{
            fontWeight: 400,
            textTransform: `uppercase`,
            margin: 0,
          }}
        >
          <Link
            to="/"
            id="logoLink"
          >
            Wenxuan <span style={{color: `#a7b8cc`}}>Xue</span>
          </Link>
        </h1>
        <span style={{
          fontWeight: 300,
          color: `#000000`}}> 
          Theater Maker
        </span>
      </div>

      <div style={{
          textAlign: `right`,
        }}>

        <Link
          to="/"
          className="navLink"
          activeClassName="navLinkActive"
        >
          About
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link
          to="/projects"
          className="navLink"
          activeClassName="navLinkActive"
        >
          Projects
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link
          to="/contact"
          className="navLink"
          activeClassName="navLinkActive"
        >
          Contact
        </Link>
      </div>

    </div>
  </header>
)


export default Header

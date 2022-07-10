import React from "react";
import Link from 'next/link'

function Navbar() {
  return <header className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <a className="navbar-brand" href="index.html">
        <span>Food Bank</span>
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""> </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ms-auto">
          <li className="nav-item active">
            <Link  href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link  href="#info_section"><a className="nav-link">Contact Us</a></Link>
          </li>
          <li className="nav-item">
            <Link  href="/login"><a className="nav-link">Login</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
}

export default Navbar;

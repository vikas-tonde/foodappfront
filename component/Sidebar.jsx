import React from 'react'
import PropTypes from 'prop-types'

function Sidebar(props) {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark position-fixed ">
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-5 d-none d-sm-inline">Menu</span>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" >
            <i aria-hidden className="fas fa-home"></i> &nbsp; Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i aria-hidden className="fas fa-hand-holding-medical"></i> &nbsp; Your
            donates
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i aria-hidden className="fas fa-sign-out-alt"></i> &nbsp; Logout
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown pb-4">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none"
          id="dropdownUser1"
        >
          <i aria-hidden className="fas fa-user"></i> &nbsp;
          <span className="d-none d-sm-inline mx-1">loser</span>
        </a>
      </div>
    </div>
  </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar

import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import cookieCutter from 'cookie-cutter';

function AdminSidebar(props) {
  const [dashboard, setDashboard] = useState("unactive");
  const [history, setHistory] = useState("unactive");
  const [donation, setDonation] = useState("unactive");
  const [users, setUsers] = useState("unactive");
  const router = useRouter();
  useEffect(()=>{
    { router.pathname.split("/").at(-1) === "dashboard" ? setDashboard("active") : setDashboard("unactive") }
    { router.pathname.split("/").at(-1) === "history" ? setHistory("active") : setHistory("unactive")  }
    { router.pathname.split("/").at(-1) === "users" ? setUsers("active") : setUsers("unactive")  }
    { router.pathname.split("/").at(-1) === "donations" ? setDonation("active") : setDonation("unactive")  }
  },[]);

  const handleLogout = () =>{
    cookieCutter.set("jwt","",{expires:new Date(new Date().toLocaleDateString())})
    cookieCutter.set("name","",{expires:new Date(new Date().toLocaleDateString())})
  }
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
         
          <a href="dashboard" className={"nav-link  text-white " + dashboard} >
            <i aria-hidden className="fas fa-home"></i> &nbsp; Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="users" className={"nav-link text-white "  + users}>
            <i aria-hidden className="fas fa-hand-holding-medical"></i> &nbsp; Users
          </a>
        </li>
        <li className="nav-item">
          <a href="donations" className={"nav-link text-white " + donation}>
            <i aria-hidden className="fas fa-sign-out-alt"></i> &nbsp; Donations
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white" onClick={handleLogout}>
            <i aria-hidden className="fas fa-sign-out-alt"></i> &nbsp; Logout
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown pb-4">
        <a
          
          className="d-flex align-items-center text-white text-decoration-none"
          id="dropdownUser1"
        >
          <i aria-hidden className="fas fa-user"></i> &nbsp;
          <span className="d-none d-sm-inline mx-1">
            {props.name }
            
          </span>
        </a>
      </div>
    </div>
  </div>
  )
}

AdminSidebar.propTypes = {}

export default AdminSidebar

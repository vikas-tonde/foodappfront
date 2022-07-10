import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <section className="info_section " id='info_section'  >
    <div className="info_container ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="info_contact ">
              <div className="row">
                <div className="col-md-4">
                  <a href="#" className="link-box">
                    <i className="fa fa-map-marker" ></i>
                    <span>
                      Location
                    </span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#" className="link-box">
                    <i className="fa fa-phone" ></i>
                    <span>
                      Call +91 1234567890
                    </span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#" className="link-box">
                    <i className="fa fa-envelope" ></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info_logo">
          <a className="navbar-brand" href="index.html">
            <span>
              FOOD BANK
            </span>
          </a>
        </div>
        <div className="social-box">
          <a href="">
            <i className="fa fa-facebook" ></i>
          </a>
          <a href="">
            <i className="fa fa-twitter" ></i>
          </a>
          <a href="">
            <i className="fa fa-instagram" ></i>
          </a>
          <a href="">
            <i className="fa fa-youtube" ></i>
          </a>
        </div>
      </div>
    </div>
    <footer class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href=""> Food Bank</a>
      </p>
    </div>
  </footer>
  </section>
  )
}

Footer.propTypes = {}

export default Footer
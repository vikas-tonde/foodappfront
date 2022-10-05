import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
function Testimonial(props) {
  useEffect(()=>{
    $('.carousel-control-prev').click(function() {
      $('#customCarousel2').carousel('prev');
    });
    
    $('.carousel-control-next').click(function() {
      $('#customCarousel2').carousel('next');
    });
    $(document).ready(function() {
      $('#customCarousel2').carousel({
        interval: 1200
      })
    });
  },[])
  return (
    <section className="client_section p-5 ">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
        <p>
          Even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
        </p>
      </div>
    </div>
    <div className="container px-0">
      <div id="customCarousel2" className="carousel  slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      {/* <img src="images/client.jpg" alt=""> */}
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>
                            Clary Kenton
                          </h5>
                          <h6>
                            Customer
                          </h6>
                        </div>
                        <i className="fa fa-quote-left" ></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum
                        dolore eu fugia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      {/* <img src="images/client.jpg" alt=""> */}
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>
                            Clary Kenton
                          </h5>
                          <h6>
                            Customer
                          </h6>
                        </div>
                        <i className="fa fa-quote-left" ></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum
                        dolore eu fugia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      {/* <img src="imagess/client.jpg" alt=""> */}
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>
                            Clary Kenton
                          </h5>
                          <h6>
                            Customer
                          </h6>
                        </div>
                        <i className="fa fa-quote-left" ></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum
                        dolore eu fugia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
            <i className="fa fa-angle-left" ></i>
            <span className="sr-only">P</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
            <i className="fa fa-angle-right" ></i>
            <span className="sr-only">N</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

Testimonial.propTypes = {}

export default Testimonial

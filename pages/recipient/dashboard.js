import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
function dashboard(props) {
  return (
<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark position-fixed ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
        <i className="fas fa-home"></i> &nbsp;
          Dashboard
        </a>
      </li>
      <li className="nav-item" >
        <a href="#" className="nav-link text-white">
        <i className="fas fa-utensils"></i> &nbsp;
          Your Orders
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white">
        <i className="fas fa-comment-dots"></i> &nbsp;
          Feedback
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white">
        <i className="fas fa-sign-out-alt"></i> &nbsp;
          Logout
        </a>
      </li>
      
    </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" aria-expanded="false">
                    <i className="fas fa-user"></i> &nbsp;
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col py-3 food">
            
        <section className="product_section layout_padding2-top layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Available Foods
        </h2>
        <p>
          
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <Image src="/images/p1.png" alt=""  width="230px" height="200px" />
            </div>
            <div className="detail-box">
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Orange
              </a>
              <div className="price_box">
                <h6 className="price_heading">
                  <button className="btn btn-success">Accept</button>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <Image src="/images/p2.png" alt=""  width="230px" height="200px"/>
            </div>
            <div className="detail-box">
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Durian
              </a>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <Image src="/images/p3.png" alt=""  width="230px" height="200px"/>
            </div>
            <div className="detail-box">
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Kiwi
              </a>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <Image src="/images/p4.png" alt=""  width="230px" height="200px"/>
            </div>
            <div className="detail-box">
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Mango
              </a>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <Image src="/images/p5.png" alt=""  width="230px" height="200px"/>
            </div>
            <div className="detail-box">
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Banana
              </a>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <Image src="/images/p6.png" alt=""  width="230px" height="200px"/>
            </div>
            <div className="detail-box">
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Apple
              </a>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View All
        </a>
      </div> /
    </div>
  </section>
        </div>
    </div>
</div>
  );
}

dashboard.propTypes = {};

export default dashboard;

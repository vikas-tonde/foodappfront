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
                <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
        <i class="fas fa-home"></i> &nbsp;
          Dashboard
        </a>
      </li>
      <li class="nav-item" >
        <a href="#" class="nav-link text-white">
        <i class="fas fa-utensils"></i> &nbsp;
          Your Orders
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white">
        <i class="fas fa-comment-dots"></i> &nbsp;
          Feedback
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white">
        <i class="fas fa-sign-out-alt"></i> &nbsp;
          Logout
        </a>
      </li>
      
    </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" aria-expanded="false">
                    <i class="fas fa-user"></i> &nbsp;
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col py-3 food">
            
        <section class="product_section layout_padding2-top layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Available Foods
        </h2>
        <p>
          which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
        </p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <Image src="/images/p1.png" alt=""  width="230px" height="200px" />
            </div>
            <div class="detail-box">
              <span class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Orange
              </a>
              <div class="price_box">
                <h6 class="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <Image src="/images/p2.png" alt=""  width="230px" height="200px"/>
            </div>
            <div class="detail-box">
              <span class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Durian
              </a>
              <div class="price_box">
                <h6 class="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <Image src="/images/p3.png" alt=""  width="230px" height="200px"/>
            </div>
            <div class="detail-box">
              <span class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Kiwi
              </a>
              <div class="price_box">
                <h6 class="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <Image src="/images/p4.png" alt=""  width="230px" height="200px"/>
            </div>
            <div class="detail-box">
              <span class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Mango
              </a>
              <div class="price_box">
                <h6 class="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <Image src="/images/p5.png" alt=""  width="230px" height="200px"/>
            </div>
            <div class="detail-box">
              <span class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Banana
              </a>
              <div class="price_box">
                <h6 class="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <Image src="/images/p6.png" alt=""  width="230px" height="200px"/>
            </div>
            <div class="detail-box">
              <span class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <a href="">
                Apple
              </a>
              <div class="price_box">
                <h6 class="price_heading">
                  <span>$</span> 10.00
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
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

import React, {useEffect} from 'react'
import Image from 'next/image'
function Slider() {
  return (
    <section className="slider_section ">
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <div className="detail-box">
                  <h1>
                    POWERING COMMUNITIES <br />
                    FOR ZERO HUNGER
                  </h1>
                  <p>
                    Hunger Relief Now, Resillience Tomorrow </p>
                  <div className="btn-box">
                    <a href="#about_section" className="btn-1">
                      Read More
                    </a>
                    <a href="#info_section" className="btn-2">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7">
                <div className="img-box">
                  <Image src="/images/slider-img1.png" width="900px" height="696px" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Slider
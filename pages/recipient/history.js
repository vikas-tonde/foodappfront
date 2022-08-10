import React from 'react'
import PropTypes from 'prop-types'

function history(props) {
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
      <Sidebar />
      <div className="col py-3 second row">
        <section className="blog_section layout_padding2-top layout_padding-bottom">
          <div className="container">
            <div className="heading_container">
              <h2>Donation History</h2>
            </div>
            <div className="row mt-5">
              <div className="container">
                <div className="search">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="search-1">
                        From
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <div className="search-2">
                          To <input type="date" /> <button>Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <Image
                      src="/images/b1.jpg"
                      width="350px"
                      height="250px"
                      alt=""
                    />
                    <h4 className="blog_date">
                      29 <br />
                      June
                    </h4>
                  </div>
                  <div className="detail-box">
                    <h5>Look even slightly believable. If you are</h5>
                    <p>
                      alteration in some form, by injected humour, or
                      randomised words which don't look even slightly
                      believable.
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <Image
                      src="/images/b2.jpg"
                      width="350px"
                      height="250px"
                      alt=""
                    />
                    <h4 className="blog_date">
                      28 <br />
                      June
                    </h4>
                  </div>
                  <div className="detail-box">
                    <h5>Anything embarrassing hidden in the middle</h5>
                    <p>
                      alteration in some form, by injected humour, or
                      randomised words which don't look even slightly
                      believable.
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

history.propTypes = {}

export default history

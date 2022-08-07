import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../../component/Sidebar";
import Image from "next/image";
function history(props) {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col py-3 second row">
          <h1>History</h1>
          <div class="wrapper-grey padded">
            <div class="container">
              <div className="d-flex flex-row bd-highlight mb-3 flex-wrap">
                <div class="col-xs-12 col-sm-4 ">
                  <div
                    class="card solution_card"
                    // style={{
                    //   background:
                    //     "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1')",
                    // }}
                  >
                    <div class="hover_color_bubble"></div>
                    <div class="card-category">City</div>
                    <div class="card-description">
                      <h2>home</h2>
                      <p>Lovely house</p>
                    </div>
                    
                    <a class="card-link" href="#"></a>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div
                    class="card"
                    // style={{
                    //   background:
                    //     "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1')",
                    // }}
                  >
                    <div class="card-category">City</div>
                    <div class="card-description">
                      <h2>home</h2>
                      <p>Lovely house</p>
                    </div>
                    
                    <a class="card-link" href="#"></a>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div
                    class="card"
                    // style={{
                    //   background:
                    //     "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1')",
                    // }}
                  >
                    <div class="card-category">City</div>
                    <div class="card-description">
                      <h2>Home</h2>
                      <p>Lovely house</p>
                    </div>
                    
                    <a class="card-link" href="#"></a>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div
                    class="card"
                    // style={{
                    //   background:
                    //     "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1')",
                    // }}
                  >
                    <div class="card-category">City</div>
                    <div class="card-description">
                      <h2>Home</h2>
                      <p>Lovely house</p>
                    </div>
                    
                    <a class="card-link" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

history.propTypes = {};

export default history;

import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Sidebar from "../../component/Sidebar";
function dashboard(props) {
  return (
<div>
<div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col py-3 second row">
        <div className="row mt-5">
                <div className="container">
                  <div className="search">
                  <div className="heading_container">
                <h2>Available Food</h2>
              </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="search-1">
                          <input type="text" placeholder="location" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <div className="search-2">
                           <input type="text" placeholder="name" /> <button>Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        <div id="wrap">
	<div id="columns" class="columns_4">
  <figure>
  <img src="https://i.imgur.com/ruU04I6.jpg" />
	<figcaption>Green Checkered Shirt</figcaption>
    <span class="price">$44</span>
    <a class="button" href="#">Book Now</a>
	</figure>
	
	<figure>
	<img src="https://i.imgur.com/sPxEkEI.jpg" />
	<figcaption>Green and Black Flowers</figcaption>
    <span class="price">$44</span>
    <a class="button" href="#">Book Now</a>
	</figure>
	
  <figure>
	<img src="https://i.imgur.com/S3Umfmb.jpg" />
	<figcaption>Black Dots</figcaption>
    <span class="price">$44</span>
    <a class="button" href="#">Book Now</a>
	</figure>
  
	<figure>
	<img src="https://i.imgur.com/x1IZjjy.jpg" />
	<figcaption>Red Flowy</figcaption>
    <span class="price">$44</span>
    <a class="button" href="#">Book Now</a>
	</figure>
	
   <figure>
	 <img src="https://i.imgur.com/Jv8IWKQ.jpg" />
	<figcaption>Yellow Button-Up</figcaption>
    <span class="price">$44</span>
    <a class="button" href="#">Book Now</a>
	</figure>
	
   <figure>
	 <img src="https://i.imgur.com/MpLejRu.jpg" />
	<figcaption>Put a Bird On It</figcaption>
     <span class="price">$44</span>
     <a class="button" href="#">Book Now</a>
	</figure>
  
	<figure>
	<img src="https://i.imgur.com/SZmPJ7W.jpg" />
	<figcaption>Polka Dots</figcaption>
    <span class="price">$44</span>
    <a class="button" href="#">Book Now</a>
	</figure>	
  
   <figure>
	<img src="https://i.imgur.com/OiEMgMx.jpg" />
	<figcaption>Blue Spots</figcaption>
     <span class="price">$44</span>
     <a class="button" href="#">Book Now</a>
	</figure>
  
    <figure>
	<img src="https://i.imgur.com/HolvggB.jpg" />
    <figcaption>Pink Dots</figcaption>
      <span class="price">$44</span>
      <a class="button" href="#">Book Now</a>
	</figure>	
</div>
          </div>
          </div>
          </div>

</div>
</div>
  );
}

dashboard.propTypes = {};

export default dashboard;

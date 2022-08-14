import React from 'react'
import PropTypes from 'prop-types'
import backend from '../../config';
import Image from 'next/image';


function donationDetail(props) {
    console.log(props.data);
  return (
    <div className = "card-wrapper">
  <div className = "card">
  
    <div className = "product-imgs">
      <div className = "img-display">
        <div className = "img-showcase">
          <Image width="550px" height="300px" src = "/images/food.png" alt = "shoe image" />
          
        </div>
      </div>
      <div className = "img-select">
        <div className = "img-item">
          <a href = "#" data-id = "1">
            <Image width="250px" height="300px" src = "/images/client.jpg" alt = "shoe image" />
          </a>
        </div>
        <div className = "img-item">
          <a href = "#" data-id = "2">
            <Image width="250px" height="300px" src = "/images/client.jpg" alt = "shoe image" />
          </a>
        </div>
        <div className = "img-item">
          <a href = "#" data-id = "3">
            <Image width="250px" height="300px" src = "/images/client.jpg" alt = "shoe image" />
          </a>
        </div>
        <div className = "img-item">
          <a href = "#" data-id = "4">
            <Image width="250px" height="300px" src = "/images/client.jpg" alt = "shoe image" />
          </a>
        </div>
      </div>
    </div>
   
    <div className = "product-content">
      <h2 className = "product-title">nike shoes</h2>
      <a href = "#" className = "product-link">visit nike store</a>
      <div className = "product-rating">
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star-half-alt"></i>
        <span>4.7(21)</span>
      </div>

      <div className = "product-detail">
        <h2>about this item: </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
        <ul>
          <li>Color: <span>Black</span></li>
          <li>Available: <span>in stock</span></li>
          <li>Category: <span>Shoes</span></li>
          <li>Shipping Area: <span>All over the world</span></li>
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
      </div>

      <div className = "purchase-info">
        <button type = "button" className = "btn">
          Add to Cart <i className = "fas fa-shopping-cart"></i>
        </button>
        <button type = "button" className = "btn">Compare</button>
      </div>
    </div>
  </div>
</div>
  )
}

donationDetail.propTypes = {}

export async function getServerSideProps(context)
{
    const response = await fetch(`${backend}/recipient/search?id=${context.query.slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': context.req.cookies['jwt'],
      }
    }
    );
    var data = await response.json();
    return {props:data}
}


export default donationDetail

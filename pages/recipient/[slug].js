import React from 'react'
import PropTypes from 'prop-types'
import backend from '../../config';
import Image from 'next/image';
import GoogleMapReact from 'google-map-react';
import Sidebar from '../../component/Sidebar';


const Marker = ({ text }) => <div className='text-danger h1 font-weight-bold'><i className="fas fa-map-marker-alt"></i></div>;

// function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };
// }


function Donation(props) {
    console.log(props.data);
    const defaultProps = {
      center: {
        lat: props.data.data.location.latitude,
        lng: props.data.data.location.longitude
      },
      zoom: 12
    };


  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
      <Sidebar name={props.name}/>
      <div className="col py-3 second row">
   <div className='container'>
    <div className='row mt-5'>
      
      <div className='col-md-6'>
        <div><img src={
                          "/" + props.data.data["images"][0].split("\\").slice(3).join("/")
                        } width="100%" height="100%" /></div>
      </div>
      <div className='col-md-6'>
      <div className="_product-detail-content">
               
               <div className="_p-price-box">
                  <div className="p-list">
                     <span> Date : 
                     {new Date(props.data.data.dateAdded).toDateString()}
                     </span>     
                  </div>
                  <div className="_p-add-cart">
                     <div className="_p-qty">
                        <span>City : </span>
                        <span>{props.data.data.city}</span>
                     </div>
                  </div>
                  <div className="p-list">
                     <span> Address : {props.data.data.address}  </span>  
                    
                     <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD2Sg1CVIvIlMoyNsXuIQCtLmQ-O4po1Ps" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
         lat= {props.data.data.location.latitude}
         lng={props.data.data.location.longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
                      
                  </div>
                  <div className="_p-features">
                     <span> Food Items : </span>
                     
                     <table className="table table-bordered mt-3">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                
                    {props.data.data.items.map((item, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.expiry}</td>
                          
                        </tr>
                      );
                    })}
                  </tbody>
                </table>                    
                  </div>
                     <div className="_p-qty-and-cart">
                        <div className="_p-add-cart text-center">
                           <button className="btn-theme btn buy-btn" tabIndex="0">
                           <i className="fa fa-shopping-cart"></i> Accept
                           </button>   
                        </div>
                     </div>
                  </div>
                  </div>
                  </div>
               </div>
            </div>
      </div>
    </div>
   
   </div>
  )
}

Donation.propTypes = {}

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
    return {props: { "data": data, "name": context.req.cookies["name"] }}
}

export default Donation

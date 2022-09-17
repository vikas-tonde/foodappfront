import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Sidebar from "../../component/Sidebar";
import { register, handleSubmit, useForm } from "react-hook-form";
import { addDonation } from "../../routes.js";
import backend from "../../config.js";
import cookieCutter from 'cookie-cutter';



function Dashboard(props) {
  const [items, setItems] = useState([]);
  const [lat, setlat] = useState(0);
  const [lng, setlng] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const handleError = (errors) => {};
  const handleAddress = (errors) => {};

  const registerOptions = {
    title: {
      required: "Title is required",
      pattern: {
        value: /^[A-Za-z ]{2,}$/i,
        message: "Invalid Item Title. Title should contain only letters.",
      },
    },
    quantity: {
      required: "Quantity is required",
      pattern: {
        value: /^[0-9]{1,}$/i,
        message: "Invalid Item Quantity. Quantity should be greater than 0.",
      },
    },
    expiry: {
      required: "Expiry is required",
      pattern: {
        value: /^[0-9]{1,}$/i,
        message: "Invalid Item Expiry. Expiry should be greater than 0.",
      },
    },
    address: {
      required: "Address is required",
      pattern: {
        value: /^[0-9A-Za-z ]{1,}$/i,
        message: "Invalid Address.",
      },
    },
    city: {
      required: "city is required",
      pattern: {
        value: /^[0-9A-Za-z ]{1,}$/i,
        message: "Invalid city.",
      },
    },
    images: {
      required: "Image is required"
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setlat(position.coords.latitude);
        setlng(position.coords.longitude);
      });
    }
  }, []);

  const handleItems = (data) => {
    setItems((state) => [
      ...state,
      { name: data.title, expiry: data.expiry, quantity: data.quantity },
    ]);
  };

  const handleDonation = async (data) => {
    const allData = new FormData();
    allData.append("image", data.images[0], "b1.png" );
    items.forEach((item, i) => {
      allData.append(`items[${i}][name]`, item.name);
      allData.append(`items[${i}][quantity]`, item.quantity);
      allData.append(`items[${i}][expiry]`, item.expiry);
    });
    allData.append("location[longitude]", lng);
    allData.append("location[latitude]", lat);
    allData.append("address", data.address);
    allData.append("city", data.city);
    const response = await fetch(`${backend}${addDonation}`, {
      method: "POST",
      body: allData,
      headers: {
        Authorization:
        cookieCutter.get("jwt")
      },
    });
    console.log(response);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar name={props.name} />
        <div className="col py-3 donor row">
          <div className="col-12 px-5">
            <div className="mb-3 heading">
              <div className="row justify-content-center">
                <div className="col-6 mt-5">
                  <h2>Food Donation Form</h2>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(handleItems, handleError)}>
              <div className="mb-3 details">
                <label htmlFor="itemtitle" className="form-label">
                  Item
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  {...register("title", registerOptions.title)}
                />
                <small className="text-danger">
                  {errors?.title && errors.title.message}
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  {...register("quantity", registerOptions.quantity)}
                />
                <small className="text-danger">
                  {errors?.quantity && errors.quantity.message}
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="expiry" className="form-label">
                  Expiry (in hrs)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="expiry"
                  name="expiry"
                  {...register("expiry", registerOptions.expiry)}
                />
                <small className="text-danger">
                  {errors?.expiry && errors.expiry.message}
                </small>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary btn-block" type="submit">
                  <i aria-hidden className="fas fa-plus"></i> &nbsp; ADD
                </button>
              </div>
              </form>
              <form onSubmit={handleSubmit(handleDonation, handleAddress)}>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  placeholder="Enter Address here"
                  id="address"
                  name="address"
                  {...register("address", registerOptions.address)}
                ></textarea>
                <small className="text-danger">
                  {errors?.address && errors.address.message}
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  city
                </label>
                <select
                  className="form-control"
                  placeholder="Enter city here"
                  id="city"
                  name="city"
                  {...register("city", registerOptions.city)}
                >
                  { props.data.data.map((i,index)=>{
                    return(
                      <option key={index} value={i}>{i}</option>
                    )
                  }) }
                </select>
                <small className="text-danger">
                  {errors?.city && errors.city.message}
                </small>
              </div>
              <div className="row mt-5  mx-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Date Added</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.expiry}</td>
                          <td>
                            <button type="button" className="btn btn-danger">
                              <i aria-hidden className="far fa-trash-alt"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="input-group mt-3 mx-3">
                <input
                  type="file"
                  className="form-control"
                  name="images"
                  id="images"
                  {...register("images", registerOptions.images)}
                />
              </div>
              <small className="text-danger">
                  {errors?.images && errors.images.message}
                </small>
              <div className="container d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-primary mt-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {};

export async function getServerSideProps(context)
{
    const response = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
      method: 'POST',
      body: JSON.stringify({
        "country":"India",
        "state":"Maharashtra"
    }),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    var data = await response.json();
    return { props: { "data": data, "name": context.req.cookies["name"]|| null } }
}

export default Dashboard;

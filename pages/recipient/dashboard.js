import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Sidebar from "../../component/Sidebar";
import backend from "../../config";
import { useForm } from "react-hook-form";
import { availableDonation } from "../../routes";
import cookieCutter from 'cookie-cutter';
function dashboard(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } =  useForm({ mode: "onChange" });
  const [donation, setDonation] = useState(props.data);
  const handleError = (errors) => {};
  const registerOptions = {
    // location: {
    //   required: "From is required",
    // },
    // item: {
    //   required: "From is required",
    // }
  };
  const handleDonation = async (data) => {
    console.log(data.dateFilter);
    const response = await fetch(`${backend}${availableDonation}`, {
      method: "POST",
      body: JSON.stringify({
        "city": data.location,
        "dateFilter": data.dateFilter
      }),
      headers: {
        'Content-Type': "application/json",
        Authorization: cookieCutter.get("jwt"),
      },
    });
    let responseData = await response.json()
    
    setDonation(responseData['data']);
  };
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
                  <form onSubmit={handleSubmit(handleDonation, handleError)}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="search-1">
                            <input
                              type="text"
                              id="location"
                              name="location"
                              placeholder="location"
                              {...register("location", registerOptions.location)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div>
                            <div className="search-2">
                              Date
                              <input
                                type="date"
                                id="dateFilter"
                                name="dateFilter"
                                {...register("dateFilter", registerOptions.dateFilter)}
                                max={new Date().toISOString().split("T")[0]}
                              />
                              <button>Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div id="wrap">
              <div id="columns" className="columns_4">
                {donation.map((i, index) => {
                  return (
                    <figure>
                      <Image
                        src={
                          "/" + i["images"][0].split("\\").slice(3).join("/")
                        }
                        width="350px"
                        height="250px"
                        alt=""
                      />
                      <figcaption>
                        <h5>
                          {i.items
                            .map((e, i) => {
                              return e.name;
                            })
                            .join(", ")}
                        </h5>
                      </figcaption>
                      <h6 className="location">
                      <i class="fas fa-map-marker-alt"></i> &nbsp;
                      {i.city}
                      </h6>
                      <span className="price">
                        {new Date(i.dateAdded).toDateString()}
                      </span>
                      <a className="button" href={i._id}>
                        Read More
                      </a>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

dashboard.propTypes = {};

export async function getServerSideProps(context) {
  const response = await fetch(`${backend}/recipient/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: context.req.cookies["jwt"],
    },
  });
  var data = await response.json();
  return { props: data };
}

export default dashboard;

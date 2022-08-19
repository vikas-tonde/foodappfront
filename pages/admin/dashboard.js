import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Sidebar from "../../component/Sidebar";
import backend from "../../config";
import { useForm } from "react-hook-form";
import { availableDonation } from "../../routes";
import cookieCutter from "cookie-cutter";
function dashboard(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
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
        city: data.location,
        dateFilter: data.dateFilter,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: cookieCutter.get("jwt"),
      },
    });
    let responseData = await response.json();

    setDonation(responseData["data"]);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          {/* <Sidebar /> */}
          <div className="col py-3  row">
            <div className="row mt-5">
              <div className="container">
                <div className="search">
                  <div className="heading_container">
                    <h2>Donation</h2>
                  </div>
                  <div className="row">
                    <form onSubmit={handleSubmit(handleDonation, handleError)}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="search-1">
                            <input
                              type="text"
                              id="donor"
                              name="donor"
                              placeholder="donor"
                              {...register("donor", registerOptions.donor)}
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
                                {...register(
                                  "dateFilter",
                                  registerOptions.dateFilter
                                )}
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
            {/* {donation ? (
                  donation.map((i, index) => {
                    return ( */}

            <div class="container">
              <div class="table-responsive">
                <table class="table table-bordered   table-striped">
                  <thead class="table__head">
                    <tr class="winner__table">
                      <th>Sr.No</th>
                      <th>
                        <i class="fa fa-user" aria-hidden="true"></i> &nbsp;
                        Name of donor
                      </th>
                      <th>
                        <i class="fa fa-user" aria-hidden="true"></i> &nbsp;
                        Name of recipient
                      </th>
                      <th>
                        <i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;
                        Date of donation
                      </th>
                      <th>
                        {" "}
                        <i class="fas fa-map-marker-alt"></i> &nbsp; Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="winner__table">
                      <td>1</td>
                      <td>Tom</td>
                      <td>Kolkatta</td>
                      <td>26 Sept,2020</td>
                      <td>xxxxxx5288</td>
                    </tr>

                    <tr class="winner__table">
                      <td>2</td>
                      <td>Virat Bisht</td>
                      <td>Kolkatta</td>
                      <td>27 Sept,2020</td>
                      <td>xxxxxx9688</td>
                    </tr>

                    <tr class="winner__table">
                      <td>3</td>
                      <td>Jack</td>
                      <td>Kolkatta</td>
                      <td>28 Sept,2020</td>
                      <td>xxxxxx9197</td>
                    </tr>

                    <tr class="winner__table">
                      <td>4</td>
                      <td>Garry</td>
                      <td>Ranchi</td>
                      <td>29 Sept,2020</td>
                      <td>xxxxxx0987</td>
                    </tr>

                    <tr class="winner__table">
                      <td>5</td>
                      <td>Uttam Tripura</td>
                      <td>South Tripura</td>
                      <td>1 Oct,2020</td>
                      <td>xxxxxx0976</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* );
                  })
                ) : (
                  <div>No</div>
                )} */}
            <div className="heading_container mt-5">
              <h2>All Users List</h2>
            </div>
            <form onSubmit={handleSubmit(handleDonation, handleError)}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="search-1">
                            <input
                              type="text"
                              id="user"
                              name="user"
                              placeholder="user"
                              {...register("user", registerOptions.user)}
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
                                {...register(
                                  "dateFilter",
                                  registerOptions.dateFilter
                                )}
                                max={new Date().toISOString().split("T")[0]}
                              />
                              <button>Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
            <div class="container">
              <div class="table-responsive">
                <table class="table table-bordered   table-striped">
                  <thead class="table__head">
                    <tr class="winner__table">
                      <th>Sr.No</th>
                      <th>
                        <i class="fa fa-user" aria-hidden="true"></i> &nbsp;
                        Name of donor
                      </th>
                      <th>
                        <i class="fa fa-user" aria-hidden="true"></i> &nbsp;
                        Name of recipient
                      </th>
                      <th>
                        <i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;
                        Date of donation
                      </th>
                      <th>
                        {" "}
                        <i class="fas fa-map-marker-alt"></i> &nbsp; Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="winner__table">
                      <td>1</td>
                      <td>Tom</td>
                      <td>Kolkatta</td>
                      <td>26 Sept,2020</td>
                      <td>xxxxxx5288</td>
                    </tr>

                    <tr class="winner__table">
                      <td>2</td>
                      <td>Virat Bisht</td>
                      <td>Kolkatta</td>
                      <td>27 Sept,2020</td>
                      <td>xxxxxx9688</td>
                    </tr>

                    <tr class="winner__table">
                      <td>3</td>
                      <td>Jack</td>
                      <td>Kolkatta</td>
                      <td>28 Sept,2020</td>
                      <td>xxxxxx9197</td>
                    </tr>

                    <tr class="winner__table">
                      <td>4</td>
                      <td>Garry</td>
                      <td>Ranchi</td>
                      <td>29 Sept,2020</td>
                      <td>xxxxxx0987</td>
                    </tr>

                    <tr class="winner__table">
                      <td>5</td>
                      <td>Uttam Tripura</td>
                      <td>South Tripura</td>
                      <td>1 Oct,2020</td>
                      <td>xxxxxx0976</td>
                    </tr>
                  </tbody>
                </table>
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

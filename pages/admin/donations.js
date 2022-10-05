import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import AdminSidebar from "../../component/AdminSidebar";
import backend from "../../config";
import { useForm } from "react-hook-form";
import { availableDonation } from "../../routes";
import cookieCutter from "cookie-cutter";
function Donations(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [donation, setDonation] = useState(props.donations.data);
  const [user, setUser] = useState(props.users.data);
  const handleError = (errors) => { };
  const registerOptions = {

  };
  const handleDonation = async (data) => {
    let body = {}
    if (data.dateFilter !== '') {
      body['dateFilter'] = data.dateFilter;
      console.log('here');
    }
    // if (data.donor !== '') {
    //   body['user'] = data.user;
    // }
    const response = await fetch(`${backend}/admin/donations`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: cookieCutter.get("jwt"),
      },
    });
    let responseData = await response.json();
    setDonation(responseData.data);

  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <AdminSidebar name={props.name} />

          <div className="col py-3 second row">
            <div className="row mt-5">
              <div className="container">
                <div className="search">
                  <div className="heading_container">
                    <h2>Donation</h2>
                  </div>
                  <div className="row">
                    <form onSubmit={handleSubmit(handleDonation, handleError)}>
                      <div className="row">
                        {/* <div className="col-md-4">
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
                        <div className="col-md-4">
                          <div className="search-1">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="email"
                              {...register("email", registerOptions.email)}
                            />
                          </div> 
                        </div>*/}
                        <div className="col-md-8">
                          <div>
                            <div className="search-2">
                              <p>Date </p>
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
                              <button type="submit">Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>


            <div className="container">
              <div className="table-responsive">
                <table className="table table-bordered   table-striped">
                  <thead className="table__head">
                    <tr className="winner__table">
                      <th>Sr.No</th>
                      <th>
                        <i className="fa fa-user" aria-hidden="true"></i> &nbsp;
                        Name of donor
                      </th>
                      <th>
                        <i className="fa fa-user" aria-hidden="true"></i> &nbsp;
                        Name of recipient
                      </th>
                      <th>
                        <i className="fa fa-calendar" aria-hidden="true"></i> &nbsp;
                        Date of donation
                      </th>
                      <th>
                        {" "}
                        <i className="fas fa-map-marker-alt"></i> &nbsp; Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      donation.map((i, index) => {
                        return (
                          <tr key={index} className="winner__table">
                            <td>{index + 1}</td>
                            <td>{i.donor}</td>
                            <td>{i.recipient}</td>
                            <td>{new Date(i.donation.dateAdded).toISOString().split('T')[0]}</td>
                            <td>{i.donation.address}</td>
                          </tr>
                        )
                      })
                    }
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

Donations.propTypes = {};
export async function getServerSideProps(context) {
  const response = await fetch(`${backend}/admin/donations`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: context.req.cookies["jwt"],
    },
  });
  const res = await fetch(`${backend}/admin/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: context.req.cookies["jwt"],
    },
  });
  let users = await res.json();
  let donations = await response.json();
  return { props: { donations: donations, users: users,"name": context.req.cookies["name"] || null } };
}

export default Donations;

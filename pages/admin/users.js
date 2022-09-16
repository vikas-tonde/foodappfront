import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import AdminSidebar from "../../component/AdminSidebar";
import backend from "../../config";
import { useForm } from "react-hook-form";
import { availableDonation } from "../../routes";
import cookieCutter from "cookie-cutter";
function Users(props) {
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
  const handleUser = async (data) => {
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
          <AdminSidebar />

          <div className="col py-3 second row">
            <div className="heading_container mt-5">
              <h2>All Users List</h2>
            </div>
            <form onSubmit={handleSubmit(handleUser, handleError)}>
              <div className="row">
                <div className="col-md-4">
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
                </div>
                <div className="col-md-4">
                  <div>
                    <div className="search-2">
                     
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
            <div className="container mt-5">
              <div className="table-responsive">
                <table className="table table-bordered   table-striped">
                  <thead className="table__head">
                    <tr className="winner__table">
                      <th>Sr.No</th>
                      <th>
                        <i className="fa fa-user" aria-hidden="true"></i> &nbsp;
                        Name of User
                      </th>
                      <th>
                        <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;
                        Email
                      </th>
                      <th>
                        <i className="fa fa-address-card" aria-hidden="true"></i> &nbsp;
                        Adhaar Number
                      </th>
                      <th>
                        {" "}
                        <i className="fas fa-map-marker-alt"></i> &nbsp; Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      user.map((i, index) => {
                        return (
                          <tr key={index} className="winner__table">
                            <td>{index + 1}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.adhaarNumber}</td>
                            <td>{i.address}</td>
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

Users.propTypes = {};
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
  let users=await res.json();
  let donations = await response.json();
  return { props:{donations: donations, users:users }};
}

export default Users;

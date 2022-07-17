import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
function dashboard(props) {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark position-fixed ">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  <i className="fas fa-home"></i> &nbsp; Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="fas fa-hand-holding-medical"></i> &nbsp; Your
                  donates
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <i className="fas fa-sign-out-alt"></i> &nbsp; Logout
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none"
                id="dropdownUser1"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i> &nbsp;
                <span className="d-none d-sm-inline mx-1">loser</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col py-3 donor">
          <form className="form row">
            <div className="col-8">

            <div className="mb-3">
              <div className="row justify-content-center">
                <div className="col-6">
                  <h2>Food Donation Form</h2>
                </div>
                <div className="col-6">
                  {/* <Image
                    src="/images/foodbank.webp"
                    height="200px"
                    width="200px"
                  /> */}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Item
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Expiry (in hrs)
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary btn-block">
                <i className="fas fa-plus"></i> &nbsp; ADD
              </button>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                placeholder="Enter Address here"
                id="floatingTextarea2"
                ></textarea>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Bootstrap 4 CDN and Starter Template</td>
                    <td>Cristina</td>
                    <td>2.846</td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Bootstrap Grid 4 Tutorial and Examples</td>
                    <td>Cristina</td>
                    <td>3.417</td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Bootstrap Flexbox Tutorial and Examples</td>
                    <td>Cristina</td>
                    <td>1.234</td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="input-group mt-3 mx-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="inputGroupFileAddon04"
              >
                Button
              </button>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
                </div>
                <div className="col-4">
                    {/* <Image
                    src="/images/slider-img1.png"
                    height="1000px"
                    width="1000px"
                  /> */}
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

dashboard.propTypes = {};

export default dashboard;

import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../component/Sidebar";
import Image from "next/image";
import { register, handleSubmit, useForm } from "react-hook-form";
import backend from "../../config";
import { historyDonation, receiveDonation } from "../../routes";
import cookieCutter from 'cookie-cutter';

function History(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [donation, setDonation] = useState(props.data.data);
  const handleError = (errors) => { };
  const registerOptions = {
    to: {
      required: "From is required",
    },
    from: {
      required: "To is required",
    }
  };


  const handleHistory = async (data) => {
    console.log(data.to);
    const response = await fetch(`${backend}${receiveDonation}`, {
      method: "POST",
      body: JSON.stringify({
        "to": data.to,
        "from": data.from
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
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar name={props.name} />
        <div className="col py-3 second row">
          <section className="blog_section layout_padding2-top layout_padding-bottom">
            <div className="container">
              <div className="heading_container">
                <h2>Recipient&rsquo;s History</h2>
              </div>
              <div className="row mt-5">
                <div className="container">
                  <div className="search">
                    <form onSubmit={handleSubmit(handleHistory, handleError)}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="search-1">
                            From
                            <input
                              type="date"
                              id="from"
                              name="from"
                              {...register("from", registerOptions.from)}
                              max={new Date().toISOString().split("T")[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div>
                            <div className="search-2">
                              To<input
                                type="date"
                                id="to"
                                name="to"
                                {...register("to", registerOptions.to)}
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
              <div className="row">
                {!donation && <p className="text-danger">You have not accepted any donation yet</p>}
                {donation && donation.map((i, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div className="box">
                        <div className="img-box">
                          <Image
                            src={"/" + i["images"][0].split("\\").slice(3).join("/")}
                            width="350px"
                            height="250px"
                            alt=""
                          />
                          <h4 className="blog_date">
                            {new Date(i.dateAdded).toISOString().split("T")[0]}
                          </h4>
                        </div>
                        <div className="detail-box">

                          <h5> {i.items.map((e) => {
                            return (e.name)
                          }).join(", ")}
                          </h5>
                          <p>
                            Location
                            {i["address"]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

History.propTypes = {};

export async function getServerSideProps(context) {
  const response = await fetch(`${backend}${receiveDonation}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': context.req.cookies['jwt'],
    }
  }
  );
  var data = await response.json();
  return { props: { "data": data, "name": context.req.cookies["name"] } }
}


export default History;

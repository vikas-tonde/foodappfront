import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { register, handleSubmit, useForm } from 'react-hook-form';
import { Router } from 'next/router';

function Register(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const [lat, setlat] = useState(0)
    const [lng, setlng] = useState(0)
    const [error, setError] = useState(0)
    var userRole;
    const handleRegistration = async (data) => {
        if (data.role === "2") {
            userRole = "donor"
        } else
            userRole = "recipient"

        const response = await fetch("/api/register", {
            method: 'POST',
            body: JSON.stringify({
                'name': data.name,
                'adhaarNumber': data.adharcard,
                'role': userRole,
                'location': {
                    "latitude": lat,
                    "longitude": lng
                },
                'address': data.address,
                'email': data.email,
                'password': data.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
        if (response.status === 200)
            router.push('/login')
        else
            setError(1)
    };
    const handleError = (errors) => { };
    const registerOptions = {
        name: {
            required: "name is required",
            pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Invalid name. only character values allowed."
            }
        },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
        },
        password: {
            required: "Password is required",
            pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message: "Password must contain uppercase, lowercase & number"
            },
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        },
        confirmpass: {
            required: "Confirm Password is required",

        },
        adharcard: {
            required: "Adharcard is required",
            pattern: {
                value: /[0-9]{12}/,
                message: "Invalid Adharcard"
            }
        },
        address: {
            required: "Address is required",
            pattern: {
                value: /[a-zA-Z0-9 ]/,
                message: "Invalid Address"
            }
        }
    };
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setlat(position.coords.latitude);
                setlng(position.coords.longitude);
            });
        }
    }, [])
    return (
        <section className="vh-100">
            <div className="container py-5 h-100 register">
                <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                    <div className="row d-flex align-items-center justify-content-center h-100">
                       
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div className="px-5 ms-xl-4">
                                <i aria-hidden className="fa fa-solid fa-user-tie fa-2x me-3 pt-5 mt-xl-4" ></i>

                                <span className="h1 fw-bold mb-0">REGISTER</span>
                            </div>
                            {error == 1 ? <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <i className="fas fa-times"></i> &nbsp;
                                Registration Failed. User Already Exists.
                        </div> : <></>}
                            <div className="form-floating mb-3 mt-4">
                                <input type="text" id="fullname" className="form-control form-control-lg" {...register('name', registerOptions.name)} />
                                <small className="text-danger">
                                    {errors?.name && errors.name.message}
                                </small>
                                <label htmlFor="fullname">Name</label>
                            </div>

                            <div className="form-floating mb-3 mt-4">
                                <input type="password" id="password" className="form-control form-control-lg" {...register('password', registerOptions.password)} />
                                <small className="text-danger">
                                    {errors?.password && errors.password.message}
                                </small>
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>

                            <div className="form-floating mb-3 mt-4">
                                <input type="password" id="cpassword" className="form-control form-control-lg" {...register('confirmpass', registerOptions.confirmpass)} />
                                <small className="text-danger">
                                    {errors?.confirmpass && errors.confirmpass.message}
                                </small>
                                <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                            </div>

                            <div className="form-floating mb-3 mt-4">
                                <input type="email" id="email" className="form-control form-control-lg" {...register('email', registerOptions.email)} />
                                <small className="text-danger">
                                    {errors?.email && errors.email.message}
                                </small>
                                <label className="form-label" htmlFor="email">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" id="adharcard" className="form-control form-control-lg"  {...register('adharcard', registerOptions.adharcard)} />
                                <small className="text-danger">
                                    {errors?.adharcard && errors.adharcard.message}
                                </small>
                                <label className="form-label" htmlFor="adharcard">Adharcard</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" id="address" className="form-control form-control-lg" {...register('address', registerOptions.address)} />
                                <small className="text-danger">
                                    {errors?.address && errors.address.message}
                                </small>
                                <label className="form-label" htmlFor="address">Address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <select className="form-select " {...register('role', registerOptions.role)}>
                                    <option defaultValue={'select one'}>Select One Role</option>
                                    <option value="1">Reciepent</option>
                                    <option value="2">Donor</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
                        </div>
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <Image src="/images/slider-img2.png" className="img-fluid" alt="Phone image" width="1000px" height="700px" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

Register.propTypes = {}

export default Register

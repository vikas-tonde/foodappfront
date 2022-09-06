import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { register, handleSubmit, useForm } from 'react-hook-form';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router'

function Login(props) {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const handleError = (errors) => { };
  const [role, setRole] = useState('');
  const router = useRouter();
  const handleLogin = async (data) => {
    const response = await fetch("/api/login", {
      method: 'POST',
      body: JSON.stringify({
        'email': data.email,
        'password': data.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    const responseData = await response.json();
    cookieCutter.set('jwt', responseData['jwt'], { expires: new Date(Date.now() + 86400) })
    cookieCutter.set('name', responseData['name'], { expires: new Date(Date.now() + 86400) })


    if (responseData['role'] === 'donor')
      router.push('/donor/dashboard')
    else if (responseData['role'] === 'recipient')
      router.push('/recipient/dashboard')
    else if (responseData['role'] === 'admin')
      router.push('/admin/dashboard')
  }

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };
  return (
    <section className="vh-100 login">
      <div className="container py-5 h-100">
        <form onSubmit={handleSubmit(handleLogin, handleError)}>

          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <Image src="/images/slider-img2.png" className="img-fluid" alt="Phone image" width="1000px" height="700px" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

              <div className="px-5 ms-xl-4">
                <i aria-hidden className="fa fa-solid fa-user-tie fa-2x me-3 pt-5 mt-xl-4"></i>

                <span className="h1 fw-bold mb-0">Log In</span>
              </div>
              <div className="form-floating mb-3 mt-4">

                <input type="email" id="email" name="email" className="form-control form-control-lg" {...register('email', registerOptions.email)} />
                <small className="text-danger">
                  {errors?.email && errors.email.message}
                </small>

                <label className="form-label" htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" id="password" name='password' className="form-control form-control-lg"
                  {...register('password', registerOptions.password)}
                />
                <small className="text-danger">
                  {errors?.password && errors.password.message}
                </small>
                <label className="form-label" htmlFor="password">Password</label>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="remember" />
                  <label className="form-check-label" htmlFor="remember"> Remember me </label>
                </div>
                <Link href="/forgot"><a className='fw-bold'>Forgot password?</a></Link>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
              <p className="small fw-bold mt-3 mb-0">Don't have an account?
                <Link href="/register"><a className="link-danger">Register</a></Link></p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

Login.propTypes = {}

export default Login

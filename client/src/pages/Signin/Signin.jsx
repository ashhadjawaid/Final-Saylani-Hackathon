import React, { useState } from 'react'
import './sign.css'

import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useFormik } from 'formik';
import { validations } from '../../Validations';

const Signin = () => {
  return (
    <div className='signin-container'>
      <div className="logo-container">
        <h1>Attendence App</h1>
      </div>
      <div className="signin-box-container">
        <SigninBox />
      </div>
    </div>
  )
}

const initialValues = {
  email: '',
  password: ''
}


const SigninBox = (e) => {

  const [showPassword, setShowPassword] = useState(false)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: validations,
    onSubmit: async (values, action) => {
      console.log("value", values)



      action.resetForm();
    }

  });

  return (
    <div className='signin-box'>
      <div className="signin-form">
        <h1 style={{ textAlign: 'center', marginBottom: "20px" }}>Attendence App</h1>
        <p>Welcome back let's get you started</p>
        <form onSubmit={handleSubmit}>

          Email Address
          <label className='label'>
            <input
              type='text'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Enter Email'
              className='input'
            />


          </label>
          {errors.email && touched.email ? (
            <div className='error'>{errors.email}</div>
          ) : null}

          Password
          <label className='label'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Enter Password'
              className='input' />
            {
              showPassword ? (
                <PiEyeLight
                  onClick={() => setShowPassword(!showPassword)}
                  className='password-icon'
                />
              ) :
                <PiEyeSlashLight
                  onClick={() => setShowPassword(!showPassword)}
                  className='password-icon'
                />
            }
          </label>
          {errors.password && touched.password ? (
            <div className='error'>{errors.password}</div>
          ) : null}

          <p className='forgot-password' >Forgot Password?</p>
          <button type='submit' className='button' id='sign-up'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Signin
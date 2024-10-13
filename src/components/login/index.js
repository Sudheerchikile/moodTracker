import React from 'react'
import './index.css'
import Navbar from '../Navbar'

const Login = () => (
  <div className="login-bg">
    <Navbar />

    <div className="login-con">
      <h1 className="login-heading">Daily Mood Tracker</h1>
      <div className="all-input-con">
        <div className="input-con">
          <label>USERNAME</label>
          <input className="inputs-con" />
        </div>
        <div className="input-con">
          <label>PASSWORD</label>
          <input className="inputs-con" type="password" />
        </div>

        <div className="checkbox-con">
          <input type="checkbox" />
          <p className="checkk">show Password</p>
        </div>
      </div>
      <button className="batton">Login</button>
    </div>
  </div>
)

export default Login

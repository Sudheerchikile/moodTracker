import React from 'react'
import './index.css'

const Navbar = () => (
  <div className="nav">
    <p className="logo">Daily Mood Tracker</p>
    <div className="title-div">
      <p>Home</p>
      <p>Reports</p>
      <button className="logout-button">Logout</button>
    </div>
  </div>
)

export default Navbar

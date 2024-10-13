import React from 'react'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="notFound-con">
    <Navbar />
    <div className="image-con">
      <img
        src="https://res.cloudinary.com/dmgwybgud/image/upload/v1727754137/Group_7520_fzb1xp.png"
        alt="not-found-img"
        className="not-found-img"
      />
      <h1>Page Not Found</h1>
      <p>We are Sorry,The Page You are Requesting could not be found</p>
    </div>
  </div>
)

export default NotFound

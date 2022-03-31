import React from 'react'
import '../Common/Style/landing.scss'
import Image from '../Common/Images/landing_img.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="content-wrapper">
      <h1>Welcome to the <span>farm</span>!</h1>
      <p>Web App for managing your farm.</p>
      <img src={Image} alt="homeImage" id='image'/>
      <p><Link className="link" to='/login'>Login</Link> or <Link className="link" to="/signup">Register</Link> to continue.</p>
    </div>
  )
}

export default LandingPage
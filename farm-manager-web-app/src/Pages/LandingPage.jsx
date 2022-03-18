import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Register</Link>
    </>
  )
}

export default LandingPage
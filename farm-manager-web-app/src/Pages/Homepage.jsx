import React from 'react'
import AuthService from '../Common/Services/AuthService'

const Homepage = () => {
  return (
    <>
      <h1>Welcome</h1>
      <br />
      <button onClick={AuthService.logout}>Log Out</button>
    </>
  )
}

export default Homepage
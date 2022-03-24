import React from 'react'
import AuthService from '../Common/Services/AuthService'
import { Link, useNavigate } from 'react-router-dom'
import CropsStore from '../Stores/CropsStore'

const Homepage = () => {
  const history = useNavigate()
  function LogoutHandler() {
    AuthService.logout()
    history("/")
  }
  return (
    <>
      <h1>Welcome</h1>
      <br />
      <button onClick={LogoutHandler}>Log Out</button>
      <Link to="/crops" onClick={CropsStore.getCrops}>Crops</Link>
    </>
  )
}

export default Homepage
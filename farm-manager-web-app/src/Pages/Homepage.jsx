import React from 'react'
import AuthService from '../Common/Services/AuthService'
import { Link, useNavigate } from 'react-router-dom'
import CropsStore from '../Stores/CropsStore'
import AnimalStore from '../Stores/AnimalStore'
import VehicleStore from '../Stores/VehicleStore'
import FieldStore from '../Stores/FieldStore'

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
      <br />
      <Link to="/crops" onClick={CropsStore.getCrops}>Crops</Link>
      <br />
      <Link to="/animals" onClick={AnimalStore.getAnimals}>Animals</Link>
      <br />
      <Link to="/vehicles" onClick={VehicleStore.getVehicles}>Vehicles</Link>
      <br />
      <Link to="/fields" onClick={FieldStore.getFields}>Fields</Link>
    </>
  )
}

export default Homepage
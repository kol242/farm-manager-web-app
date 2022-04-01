import React from 'react'
import { Link } from 'react-router-dom'
import CropsStore from '../Stores/CropsStore'
import AnimalStore from '../Stores/AnimalStore'
import VehicleStore from '../Stores/VehicleStore'
import FieldStore from '../Stores/FieldStore'
import AuthService from '../Common/Services/AuthService'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="header">
          {AuthService.userData.farmName}
        </div>
        <Link className="link" to="/crops" onClick={CropsStore.getCrops}>Crops</Link>
        <Link className="link" to="/animals" onClick={AnimalStore.getAnimals}>Animals</Link>
        <Link className="link" to="/vehicles" onClick={VehicleStore.getVehicles}>Vehicles</Link>
        <Link className="link" to="/fields" onClick={FieldStore.getFields}>Fields</Link>  
    </div>
  )
}

export default Sidebar
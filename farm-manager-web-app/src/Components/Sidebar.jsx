import React from 'react'
import { Link } from 'react-router-dom'
import CropsStore from '../Stores/CropsStore'
import AnimalStore from '../Stores/AnimalStore'
import VehicleStore from '../Stores/VehicleStore'
import FieldStore from '../Stores/FieldStore'
import AuthService from '../Common/Services/AuthService'
import { observer } from 'mobx-react'
import Crop from '../Common/Images/crop.png'
import Animal from '../Common/Images/animal.png'
import Vehicle from '../Common/Images/vehicle.png'
import Field from '../Common/Images/fields.png'
import Farm from '../Common/Images/farm.png'

const Sidebar = observer(() => {
  return (
    <div className="sidebar">
        <div className="header">
          <img src={Farm} alt="homeImage" className="icon"/>{AuthService.userData.farmName}
        </div>
        <Link className="link" to="/crops" onClick={CropsStore.getCrops}><img src={Crop} alt="homeImage" className="icon"/>Crops</Link>
        <Link className="link" to="/animals" onClick={AnimalStore.getAnimals}><img src={Animal} alt="homeImage" className="icon"/>Animals</Link>
        <Link className="link" to="/vehicles" onClick={VehicleStore.getVehicles}><img src={Vehicle} alt="homeImage" className="icon"/>Vehicles</Link>
        <Link className="link" to="/fields" onClick={FieldStore.getFields}><img src={Field} alt="homeImage" className="icon"/>Fields</Link>  
    </div>
  )
})

export default Sidebar
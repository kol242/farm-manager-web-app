import { observer } from 'mobx-react'
import React from 'react'
import VehicleStore from '../../../../Stores/VehicleStore'
import ItemList from '../../../ItemList'

const Main = observer(() => {
  return (
    <div className="body-content__main">
        { VehicleStore.Vehicles.length === 0 ? <p>No vehicles to show. Please add new vehicle.</p> : 
        <ItemList items={VehicleStore.Vehicles} deleteItem={VehicleStore.deleteVehicle} editItem={VehicleStore.modalHandler} info={VehicleStore.InfoModalHandler}/> }    
    </div>
  )
})

export default Main
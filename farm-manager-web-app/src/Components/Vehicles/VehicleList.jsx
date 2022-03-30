import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import VehicleStore from '../../Stores/VehicleStore'

const VehicleList = observer(({items}) => {
  return (
    <div>
        { items.map((item) => 
            <ul key={item.docId}>
                <li>Name: {item.name}</li>
                <li>Type: {item.type}</li>
                <li>Quantity: {item.quantity}</li>
                <li>Cost: {item.cost} {AuthService.userData.currency}</li>
                <li>Description: {item.descr}</li>
                <button onClick={() => VehicleStore.deleteVehicle(item.docId)}>Delete</button>
                <button onClick={() => VehicleStore.modalHandler(item)}>Update</button>
            </ul>
        )}
    </div> 
  )
})

export default VehicleList
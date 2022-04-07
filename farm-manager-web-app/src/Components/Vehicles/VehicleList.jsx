import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import VehicleStore from '../../Stores/VehicleStore'

const VehicleList = observer(({items}) => {
  return (
    <div>
        { items.map((item) => 
            <ul className="card-list" key={item.docId}>
                <li className="card">
                  <p className="card-item">
                    <span className="label">Name</span> 
                    {item.name}
                  </p>
                  <p className="card-item">
                    <span className="label">Type</span> 
                    {item.type}
                  </p>
                  <p className="card-item">
                    <span className="label">Cost</span>
                    {item.cost} {AuthService.userData.currency}
                  </p>
                  <p className="card-item">
                    <span className="label">Description</span>
                    {item.descr}
                  </p>
                  <div className="btn-wrapper">
                    <button id="btn-delete" onClick={() => VehicleStore.deleteVehicle(item.docId)}>Delete</button>
                    <button id="btn-update" onClick={() => VehicleStore.modalHandler(item)}>Update</button>  
                  </div>
                </li>
            </ul>
        )}
    </div>
  )
})

export default VehicleList
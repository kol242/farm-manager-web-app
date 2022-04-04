import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import CropsStore from '../../Stores/CropsStore'
import '../../Common/Style/list.scss'

const CropsList = observer(({items}) => {
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
                    <span className="label">Quantity</span>
                    {item.quantity} {item.unit}
                  </p>
                  <p className="card-item">
                    <span className="label">Cost</span>
                    {item.cost} {AuthService.userData.currency}/{item.unit}
                  </p>
                  <p className="card-item">
                    <span className="label">Description</span>
                    {item.descr}
                  </p>
                  <p className="card-item">
                    <span className="label">State</span>
                    {item.state}
                  </p>
                  <p className="card-item">
                    <span className="label">Harvested</span> 
                    {item.harvested}
                  </p>
                  <p className="card-item">
                    <span className="label">Profit</span> 
                    {item.profit} {AuthService.userData.currency}/{item.unit}
                  </p>
                  <div className="btn-wrapper">
                    <button id="btn-delete" onClick={() => CropsStore.deleteCrop(item.docId)}>Delete</button>
                    <button id="btn-update" onClick={() => CropsStore.modalHandler(item)}>Update</button>  
                  </div>
                </li>
            </ul>
        )}
    </div> 
  )
})

export default CropsList
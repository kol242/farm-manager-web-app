import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import AnimalStore from '../../Stores/AnimalStore'
import '../../Common/Style/list.scss'

const AnimalsList = observer(({items}) => {
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
                    {item.cost} {AuthService.userData.currency}
                  </p>
                  <p className="card-item">
                    <span className="label">Description</span>
                    {item.descr}
                  </p>
                  <p className="card-item">
                    <span className="label">Product</span>
                    {item.product}
                  </p>
                  <p className="card-item">
                    <span className="label">Profit</span> 
                    {item.profit} {AuthService.userData.currency}
                  </p>
                  <div className="btn-wrapper">
                    <button id="btn-delete" onClick={() => AnimalStore.deleteCrop(item.docId)}>Delete</button>
                    <button id="btn-update" onClick={() => AnimalStore.modalHandler(item)}>Update</button>  
                  </div>
                </li>
            </ul>
        )}
    </div>
  )
})

export default AnimalsList
import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import CropsStore from '../../Stores/CropsStore'

const CropsList = observer(({items}) => {
  return (
    <div>
        { items.map((item) => 
            <ul key={item.docId}>
                <li>Name: {item.name}</li>
                <li>Type: {item.type}</li>
                <li>Quantity: {item.quantity} {item.unit}</li>
                <li>Cost: {item.cost} {AuthService.userData.currency}</li>
                <li>Description: {item.description}</li>
                <li>State: {item.state}</li>
                <li>Harvested: {item.harvested}</li>
                <li>Profit: {item.profit}</li>
                <button onClick={() => CropsStore.deleteCrop(item.docId)}>Delete</button>
                <button onClick={() => CropsStore.modalHandler(item)}>Update</button>
            </ul>
        )}
    </div> 
  )
})

export default CropsList
import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import AnimalStore from '../../Stores/AnimalStore'

const AnimalsList = observer(({items}) => {
  return (
    <div>
        { items.map((item) => 
            <ul key={item.docId}>
                <li>Name: {item.name}</li>
                <li>Type: {item.type}</li>
                <li>Quantity: {item.quantity}</li>
                <li>Cost: {item.cost} {AuthService.userData.currency}</li>
                <li>Description: {item.descr}</li>
                <li>Product: {item.product}</li>
                <li>Profit: {item.profit}</li>
                <button onClick={() => AnimalStore.deleteAnimal(item.docId)}>Delete</button>
                <button onClick={() => AnimalStore.modalHandler(item)}>Update</button>
            </ul>
        )}
    </div> 
  )
})

export default AnimalsList
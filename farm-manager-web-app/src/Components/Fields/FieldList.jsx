import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import FieldStore from '../../Stores/FieldStore'

const FieldList = observer(({items}) => {
  return (
    <div>
        { items.map((item) => 
            <ul key={item.docId}>
                <li>Name: {item.name}</li>
                <li>Type: {item.type}</li>
                <li>Quantity: {item.quantity}</li>
                <li>Cost: {item.cost} {AuthService.userData.currency}</li>
                <li>Description: {item.descr}</li>
                <li>Size: {item.size} {item.unit}</li>
                <li>Crop: {item.crop}</li>
                <li>Treatment: {item.treatment}</li>
                <button onClick={() => FieldStore.deleteField(item.docId)}>Delete</button>
                <button onClick={() => FieldStore.modalHandler(item)}>Update</button>
            </ul>
        )}
    </div> 
  )
})

export default FieldList
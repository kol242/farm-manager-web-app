import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import FieldStore from '../../Stores/FieldStore'
import '../../Common/Style/list.scss'
import { MdDeleteForever } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'

const FieldList = observer(({items}) => {
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
                    {item.quantity}
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
                    <span className="label">Size</span>
                    {item.size} {item.unit}
                  </p>
                  <p className="card-item">
                    <span className="label">Crop Treatment</span> 
                    {item.treatment}
                  </p>
                  <p className="card-item">
                    <span className="label">Crop</span> 
                    {item.crop}
                  </p>
                  <p className="card-item">
                    <span className="label">Profit</span> 
                    {item.profit} {AuthService.userData.currency}/{item.unit}
                  </p>
                  <div className="btn-wrapper">
                    <button id="btn-delete" onClick={() => FieldStore.deleteField(item.docId)}><MdDeleteForever className="icon"/></button>
                    <button id="btn-update" onClick={() => FieldStore.modalHandler(item)}><AiFillEdit className="icon"/></button>  
                  </div>
                </li>
            </ul>
        )}
    </div>
  )
})

export default FieldList
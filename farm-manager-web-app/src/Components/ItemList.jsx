import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../Common/Services/AuthService'
import { MdDeleteForever } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import '../Common/Style/list.scss'

const ItemList = observer(({items, deleteCrop, editCrop}) => {
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
                    {item.cost} {AuthService.userData.currency}
                  </p>
                  <p className="card-item">
                    <span className="label">Description</span>
                    {item.descr}
                  </p>
                  <div className="btn-wrapper">
                    <button id="btn-delete" onClick={() => deleteCrop(item.docId)}><MdDeleteForever className="icon"/></button>
                    <button id="btn-update" onClick={() => editCrop(item)}><AiFillEdit className="icon"/></button>  
                  </div>
                </li>
            </ul>
        )}
    </div>
  )
})

export default ItemList
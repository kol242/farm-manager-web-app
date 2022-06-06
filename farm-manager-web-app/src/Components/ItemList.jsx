import React from 'react'
import AuthService from '../Common/Services/AuthService'
import '../Common/Style/list.scss'
import Name from './List/Name'
import Type from './List/Type'
import Quantity from './List/Quantity'
import Cost from './List/Cost'
import Description from './List/Description'
import Buttons from './List/Buttons'

const ItemList = ({ items, deleteItem, editItem, info }) => {
  return (
    <div>
        { items.map((item) => 
            <ul className="card-list" key={item.docId}>
                <li className="card">
                  <Name item={item} />
                  <Type item={item} />
                  <Quantity item={item} /> 
                  <Cost item={item} service={AuthService}/> 
                  <Description item={item} />
                  <Buttons item={item} deleteItem={deleteItem} editItem={editItem} info={info} />
                </li>
            </ul>
        )}
    </div>
  )
}

export default ItemList
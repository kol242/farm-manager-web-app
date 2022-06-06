import { observer } from 'mobx-react'
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { AiFillEdit, AiOutlineInfoCircle } from 'react-icons/ai'

const Buttons = observer(({ item, deleteItem, editItem, info }) => {
  return (
    <div className="btn-wrapper">
      <button id="btn-icon" onClick={() => deleteItem(item.docId)}><MdDeleteForever className="icon-delete"/></button>
      <button id="btn-icon" onClick={() => editItem(item)}><AiFillEdit className="icon-edit"/></button>  
      <button id="btn-icon" onClick={() => info(item)}><AiOutlineInfoCircle className="icon-info"/></button>  
    </div>
  )
})

export default Buttons

import { observer } from 'mobx-react'
import React from 'react'
import FieldStore from '../../../../Stores/FieldStore'
import ItemList from '../../../ItemList'

const Main = observer(() => {
  return (
    <div className="body-content__main">
        { FieldStore.Fields.length === 0 ? <p>No fields to show. Please add new field.</p> : 
        <ItemList items={FieldStore.Fields} deleteItem={FieldStore.deleteField} editItem={FieldStore.modalHandler} info={FieldStore.InfoModalHandler}/> }    
    </div>
  )
})

export default Main
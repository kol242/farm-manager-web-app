import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../../../../Stores/CropsStore'
import ItemList from '../../../ItemList'

const Main = observer(() => {
  return (
    <div className="body-content__main">
        { CropsStore.crops.length === 0 ? <p>No crops to show. Please add new crops.</p> : 
        <ItemList items={CropsStore.crops} deleteItem={CropsStore.deleteCrop} editItem={CropsStore.modalHandler} info={CropsStore.InfoModalHandler}/> }    
    </div>
  )
})

export default Main
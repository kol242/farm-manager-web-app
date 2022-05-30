import { observer } from 'mobx-react'
import React from 'react'
import AnimalStore from '../../../../Stores/AnimalStore'
import ItemList from '../../../ItemList'

const Main = observer(() => {
  return (
    <div className="body-content__main">
        { AnimalStore.Animals.length === 0 ? <p>No animals to show. Please add new animal.</p> : 
        <ItemList items={AnimalStore.Animals} deleteItem={AnimalStore.deleteAnimal} editItem={AnimalStore.modalHandler} info={AnimalStore.InfoModalHandler}/> }    
    </div>
  )
})

export default Main
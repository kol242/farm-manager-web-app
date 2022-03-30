import { observer } from 'mobx-react'
import React from 'react'
import AnimalStore from '../../Stores/AnimalStore'
import Cost from '../FilterInputs/Cost'
import Profit from '../FilterInputs/Profit'
import Quantity from '../FilterInputs/Quantity'
import Name from '../FilterInputs/Name'
import Type from '../FilterInputs/Type'
import AnimalFilter from './AnimalFilter'
import Product from '../FilterInputs/Product'

const Filter = observer(() => {
  const filterSubmit = (e) => {
    e.preventDefault()
    AnimalStore.getFilteredAnimals()
  }
  return (
    <>
      <AnimalFilter />
      <form onSubmit={filterSubmit}>
        { AnimalStore.filter === "Quantity" ? <Quantity /> : null }
        { AnimalStore.filter === "Cost" ? <Cost /> : null }
        { AnimalStore.filter === "Profit" ? <Profit /> : null }
        { AnimalStore.filter === "Name" ? <Name /> : null }
        { AnimalStore.filter === "Type" ? <Type /> : null }
        { AnimalStore.filter === "Product" ? <Product /> : null }
        <button type="submit">Search</button>
      </form>
    </>
  )
})

export default Filter
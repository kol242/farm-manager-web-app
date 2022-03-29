import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../Stores/CropsStore'
import Cost from './FilterInputs/Cost'
import Profit from './FilterInputs/Profit'
import Quantity from './FilterInputs/Quantity'
import Name from './FilterInputs/Name'
import Type from './FilterInputs/Type'
import Harvested from './FilterInputs/Harvested'
import State from './FilterInputs/State'
import FilterSelect from './FilterInputs/FilterSelect'

const Filter = observer(() => {
  const filterSubmit = (e) => {
    e.preventDefault()
    CropsStore.getFilteredCrops()
  }
  return (
    <>
      <FilterSelect />
      <form onSubmit={filterSubmit}>
        { CropsStore.filter === "Quantity" ? <Quantity /> : null }
        { CropsStore.filter === "Cost" ? <Cost /> : null }
        { CropsStore.filter === "Profit" ? <Profit /> : null }
        { CropsStore.filter === "Name" ? <Name /> : null }
        { CropsStore.filter === "Type" ? <Type /> : null }
        { CropsStore.filter === "Harvested" ? <Harvested /> : null }
        { CropsStore.filter === "State" ? <State /> : null }
        <button type="submit">Search</button>
      </form>
    </>
  )
})

export default Filter
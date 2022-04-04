import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../../Stores/CropsStore'
import Cost from '../FilterInputs/Cost'
import Profit from '../FilterInputs/Profit'
import Quantity from '../FilterInputs/Quantity'
import Name from '../FilterInputs/Name'
import Type from '../FilterInputs/Type'
import Harvested from '../FilterInputs/Harvested'
import State from '../FilterInputs/State'
import CropFilter from './CropFilter'
import Product from '../FilterInputs/Product'
import '../../Common/Style/filter.scss'

const Filter = observer(() => {
  const filterSubmit = (e) => {
    e.preventDefault()
    CropsStore.getFilteredCrops()
  }
  return (
    <>
      <CropFilter />
      <form className="filter-input" onSubmit={filterSubmit}>
        { CropsStore.filter === "Quantity" ? <Quantity className="filter-input"/> : null }
        { CropsStore.filter === "Cost" ? <Cost className="filter-input" /> : null }
        { CropsStore.filter === "Profit" ? <Profit className="filter-input" /> : null }
        { CropsStore.filter === "Name" ? <Name className="filter-input" /> : null }
        { CropsStore.filter === "Type" ? <Type className="filter-input" /> : null }
        { CropsStore.filter === "Harvested" ? <Harvested className="filter-input" /> : null }
        { CropsStore.filter === "State" ? <State className="filter-input" /> : null }
        { CropsStore.filter === "Product" ? <Product className="filter-input" /> : null }
        <button type="submit">Search</button>
      </form>
    </>
  )
})

export default Filter
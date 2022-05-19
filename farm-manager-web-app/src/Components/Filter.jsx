import { observer } from 'mobx-react'
import React from 'react'
import Cost from './FilterInputs/Cost'
import Profit from './FilterInputs/Profit'
import Quantity from './FilterInputs/Quantity'
import Name from './FilterInputs/Name'
import Type from './FilterInputs/Type'
import Product from './FilterInputs/Product'
import '../Common/Style/filter.scss'
import FilterDropdown from './FilterDropdown'
import FilterService from '../Common/Services/FilterService'
import Size from './FilterInputs/Size'
import Crop from './FilterInputs/Crop'
import Harvested from './FilterInputs/Harvested'
import State from './FilterInputs/State'

const Filter = observer(({ store, array }) => {
  const filterSubmit = (e) => {
    e.preventDefault()
    return store()
  }
  return (
    <>
      <FilterDropdown filterArray={array}/>
      <form className="filter-input" onSubmit={filterSubmit}>
        { FilterService.filterName === "Quantity" ? <Quantity /> : null }
        { FilterService.filterName === "Cost" ? <Cost /> : null }
        { FilterService.filterName === "Profit" ? <Profit /> : null }
        { FilterService.filterName === "Name" ? <Name /> : null }
        { FilterService.filterName === "Type" ? <Type /> : null }
        { FilterService.filterName === "Product" ? <Product /> : null }
        { FilterService.filterName === "Size" ? <Size /> : null }
        { FilterService.filterName === "Crop" ? <Crop /> : null }
        { FilterService.filterName === "Harvested" ? <Harvested className="filter-input" /> : null }
        { FilterService.filterName === "State" ? <State className="filter-input" /> : null }
        <button type="submit">Search</button>
      </form>
    </>
  )
})

export default Filter
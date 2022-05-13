import { observer } from 'mobx-react'
import React from 'react'
import FieldStore from '../../Stores/FieldStore'
import Cost from '../FilterInputs/Cost'
import Profit from '../FilterInputs/Profit'
import Quantity from '../FilterInputs/Quantity'
import Name from '../FilterInputs/Name'
import Type from '../FilterInputs/Type'
import Size from '../FilterInputs/Size'
import Crop from '../FilterInputs/Crop'
import Treatment from '../FilterInputs/Treatment'
import FilterDropdown from '../Filters/FilterDropdown'

const Filter = observer(() => {
  const filterSubmit = (e) => {
    e.preventDefault()
    FieldStore.getFilteredFields()
  }
  return (
    <>
      <FilterDropdown store={FieldStore} filterArray={FieldStore.filterArray} />
      <form className="filter-input" onSubmit={filterSubmit}>
        { FieldStore.filter === "Quantity" ? <Quantity /> : null }
        { FieldStore.filter === "Cost" ? <Cost /> : null }
        { FieldStore.filter === "Profit" ? <Profit /> : null }
        { FieldStore.filter === "Name" ? <Name /> : null }
        { FieldStore.filter === "Type" ? <Type /> : null }
        { FieldStore.filter === "Size" ? <Size /> : null }
        { FieldStore.filter === "Crop" ? <Crop /> : null }
        { FieldStore.filter === "Treatment" ? <Treatment /> : null }
        <button type="submit">Search</button>
      </form>
    </>
  )
})

export default Filter
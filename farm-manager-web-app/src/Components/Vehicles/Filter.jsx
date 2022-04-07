import { observer } from 'mobx-react'
import React from 'react'
import VehicleStore from '../../Stores/VehicleStore'
import Cost from '../FilterInputs/Cost'
import Profit from '../FilterInputs/Profit'
import Quantity from '../FilterInputs/Quantity'
import Name from '../FilterInputs/Name'
import Type from '../FilterInputs/Type'
import VehicleFilter from './VehicleFilter'
import '../../Common/Style/filter.scss'

const Filter = observer(() => {
  const filterSubmit = (e) => {
    e.preventDefault()
    VehicleStore.getFilteredVehicles()
  }
  return (
    <>
      <VehicleFilter />
      <form className="filter-input" onSubmit={filterSubmit}>
        { VehicleStore.filter === "Quantity" ? <Quantity /> : null }
        { VehicleStore.filter === "Cost" ? <Cost /> : null }
        { VehicleStore.filter === "Profit" ? <Profit /> : null }
        { VehicleStore.filter === "Name" ? <Name /> : null }
        { VehicleStore.filter === "Type" ? <Type /> : null }
        <button type="submit">Search</button>
      </form>
    </>
  )
})

export default Filter
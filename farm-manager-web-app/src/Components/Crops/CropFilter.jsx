import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../../Stores/CropsStore'

const CropFilter = observer(() => {
    const filterTypeChecker = (e) => {
        e.preventDefault()
        const type = e.target.value
        CropsStore.filterType(type)
    }
  return (
    <>
        <select defaultValue={'default'} onChange={filterTypeChecker} name="filter-type" id="filter-type">
            <option value="default" disabled>Filter by...</option>
            <option key="quantity" value="Quantity">Quantity</option>        
            <option key="name" value="Name">Name</option>        
            <option key="cost" value="Cost">Cost</option>        
            <option key="state" value="State">State</option>        
            <option key="harvested" value="Harvested">Harvested</option>        
            <option key="profit" value="Profit">Profit</option>        
            <option key="type" value="Type">Type</option>        
        </select>
    </>
  )
})

export default CropFilter
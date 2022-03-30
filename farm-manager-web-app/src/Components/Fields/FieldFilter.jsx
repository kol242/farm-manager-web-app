import { observer } from 'mobx-react'
import React from 'react'
import FieldStore from '../../Stores/FieldStore'

const FieldFilter = observer(() => {
    const filterTypeChecker = (e) => {
        e.preventDefault()
        const type = e.target.value
        FieldStore.filterType(type)
    }
  return (
    <>
        <select defaultValue={'default'} onChange={filterTypeChecker} name="filter-type" id="filter-type">
            <option value="default" disabled>Filter by...</option>
            <option key="quantity" value="Quantity">Quantity</option>        
            <option key="name" value="Name">Name</option>            
            <option key="cost" value="Cost">Cost</option>       
            <option key="type" value="Type">Type</option> 
            <option key="size" value="Size">Size</option> 
            <option key="crop" value="Crop">Crop</option> 
            <option key="treatment" value="Treatment">Treatment</option> 
        </select>
    </>
  )
})

export default FieldFilter
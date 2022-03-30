import { observer } from 'mobx-react'
import React from 'react'
import AnimalStore from '../../Stores/AnimalStore'

const AnimalFilter = observer(() => {
    const filterTypeChecker = (e) => {
        e.preventDefault()
        const type = e.target.value
        AnimalStore.filterType(type)
    }
  return (
    <>
        <select defaultValue={'default'} onChange={filterTypeChecker} name="filter-type" id="filter-type">
            <option value="default" disabled>Filter by...</option>
            <option key="quantity" value="Quantity">Quantity</option>        
            <option key="name" value="Name">Name</option>        
            <option key="product" value="Product">Product</option>        
            <option key="cost" value="Cost">Cost</option>        
            <option key="profit" value="Profit">Profit</option>        
            <option key="type" value="Type">Type</option>        
        </select>
    </>
  )
})

export default AnimalFilter
import { observer } from 'mobx-react'
import React from 'react'

const FilterDropdown = observer(({ filterArray, store }) => {
    const filterTypeChecker = (e) => {
        e.preventDefault()
        const type = e.target.value
        store.filterType(type)
    }
  return (
    <>
        <select defaultValue={'default'} onChange={filterTypeChecker} name="filter-type" id="filter-type">
            { filterArray.map((e) => 
              <option key={e} value={e}>{e}</option>
            ) }      
        </select>
    </>
  )
})

export default FilterDropdown
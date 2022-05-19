import { observer } from 'mobx-react'
import React from 'react'
import FilterService from '../Common/Services/FilterService'

const FilterDropdown = observer(({ filterArray }) => {
    const filterTypeChecker = (e) => {
        e.preventDefault()
        const type = e.target.value
        FilterService.filterType(type)
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
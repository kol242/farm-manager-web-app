import { observer } from 'mobx-react'
import React from 'react'
import FilterService from '../../Common/Services/FilterService'

const Harvested = observer(() => {

  const input = (e) => {
    FilterService.filterData(e.target.value)
    }

  return (
    <> 
        <select defaultValue={'default'} onChange={input} name="harvested">
          <option value="default" disabled>Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
    </>
  )
})

export default Harvested
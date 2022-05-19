import { observer } from 'mobx-react'
import React from 'react'

const Harvested = observer(() => {
  return (
    <>
        <label htmlFor="harvested">Harvested</label>
        <select name="harvested">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </>
  )
})

export default Harvested
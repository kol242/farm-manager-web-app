import { observer } from 'mobx-react'
import React from 'react'

const SizeUnit = observer(() => {
  return (
    <>
        <label htmlFor="unit">Size unit</label> 
        <select defaultValue={'default'} name="unit">
            <option value="default">Select...</option>
            <option value="km2">km2</option>
            <option value="ha">ha</option>
            <option value="a">a</option>
        </select>
    </>
  )
})

export default SizeUnit
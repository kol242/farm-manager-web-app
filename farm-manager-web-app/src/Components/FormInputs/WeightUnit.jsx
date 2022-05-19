import { observer } from 'mobx-react'
import React from 'react'

const WeightUnit = observer(() => {
  return (
    <>
        <label htmlFor="unit">Weight unit</label> 
        <select name="unit">
            <option value="kg">kg</option>
            <option value="t">t</option>
            <option value="lb">lb</option>
        </select>
    </>
  )
})

export default WeightUnit
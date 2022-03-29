import { observer } from 'mobx-react'
import React from 'react'
import FilterService from '../../Common/Services/FilterService'

const Quantity = observer(() => {

  const input = (e) => {
    FilterService.filterData(Number(e.target.value))
    }

  const operator = (e) => {
    FilterService.filterOperator(e.target.value)
    }

  return (
    <>
          <select defaultValue={'default'} onChange={operator} name="operator">
            <option value="default" disabled>Operator...</option>
            <option value="<">Less than</option>
            <option value=">">More than</option>
            <option value="==">Equal to</option>
          </select>
          <input onChange={input} type="number" name="quantity"/>
          kg/t/lb
      </>
  )
})

export default Quantity
import { observer } from 'mobx-react'
import React from 'react'
import FilterService from '../../Common/Services/FilterService'

const Treatment = observer(() => {

  const input = (e) => {
    FilterService.filterData(e.target.value)
    }

  return (
    <>
        <input onChange={input} type="text" name="treatment"/>
    </>
  )
})

export default Treatment
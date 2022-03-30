import { observer } from 'mobx-react'
import React from 'react'
import FilterService from '../../Common/Services/FilterService'

const Product = observer(() => {

  const input = (e) => {
    FilterService.filterData(e.target.value)
    }

  return (
    <>
        <input onChange={input} type="text" name="product"/>
    </>
  )
})

export default Product
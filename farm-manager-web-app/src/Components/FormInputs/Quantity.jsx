import { observer } from 'mobx-react'
import React from 'react'

const Quantity = observer(() => {
  return (
    <>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" name='quantity' />
    </>
  )
})

export default Quantity
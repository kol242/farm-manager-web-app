import { observer } from 'mobx-react'
import React from 'react'

const Quantity = observer(({ item }) => {
  return (
    <>
        <p className="card-item">
          <span className="label">Quantity</span> 
          {item.quantity}
        </p>
    </>
  )
})

export default Quantity

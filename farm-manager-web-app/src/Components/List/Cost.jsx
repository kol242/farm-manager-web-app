import { observer } from 'mobx-react'
import React from 'react'

const Cost = observer(({ item, service }) => {
  return (
    <>
        <p className="card-item">
          <span className="label">Cost</span>
          {item.cost} {service.userData.currency}
        </p>
    </>
  )
})

export default Cost

import { observer } from 'mobx-react'
import React from 'react'

const Type = observer(({ item }) => {
  return (
    <>
        <p className="card-item">
          <span className="label">Type</span> 
          {item.type}
        </p>
    </>
  )
})

export default Type

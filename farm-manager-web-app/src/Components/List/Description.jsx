import { observer } from 'mobx-react'
import React from 'react'

const Description = observer(({ item }) => {
  return (
    <>
        <p className="card-item">
          <span className="label">Description</span>
          {item.descr}
        </p>
    </>
  )
})

export default Description

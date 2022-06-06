import { observer } from 'mobx-react'
import React from 'react'

const Name = observer(({ item }) => {
  return (
    <>
        <p className="card-item">
            <span className="label">Name</span> 
            {item.name}
        </p>
    </>
  )
})

export default Name

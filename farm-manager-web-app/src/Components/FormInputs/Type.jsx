import { observer } from 'mobx-react'
import React from 'react'

const Type = observer(() => {
  return (
    <>
        <label htmlFor="type">Type</label>
        <input type="text" name='type' />
    </>
  )
})

export default Type
import { observer } from 'mobx-react'
import React from 'react'

const State = observer(() => {
  return (
    <>
        <label htmlFor="state">Crop state</label>
        <input type="text" name='state' />
    </>
  )
})

export default State
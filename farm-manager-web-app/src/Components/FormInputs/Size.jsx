import { observer } from 'mobx-react'
import React from 'react'

const Size = observer(() => {
  return (
    <>
        <label htmlFor="size">Size</label>
        <input type="number" name='size' />
    </>
  )
})

export default Size
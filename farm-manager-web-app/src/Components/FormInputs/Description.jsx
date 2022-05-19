import { observer } from 'mobx-react'
import React from 'react'

const Description = observer(() => {
  return (
    <>
        <label htmlFor="descr">Description</label>
        <input type="text" name='descr' />
    </>
  )
})

export default Description
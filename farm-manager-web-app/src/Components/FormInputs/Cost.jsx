import { observer } from 'mobx-react'
import React from 'react'

const Cost = observer(({ text }) => {
  return (
    <>
        <label htmlFor="cost">{text}</label>
        <input type="number" name='cost' />
    </>
  )
})

export default Cost
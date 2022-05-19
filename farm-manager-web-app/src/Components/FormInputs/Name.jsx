import { observer } from 'mobx-react'
import React from 'react'

const Name = observer(({ text }) => {
  return (
    <>
        <label htmlFor="name">{text}</label>
        <input type="text" name='name' />
    </>
  )
})

export default Name
import { observer } from 'mobx-react'
import React from 'react'

const Profit = observer(() => {
  return (
    <>
        <label htmlFor="profit">Profit</label>
        <input type="number" name='profit' />
    </>
  )
})

export default Profit
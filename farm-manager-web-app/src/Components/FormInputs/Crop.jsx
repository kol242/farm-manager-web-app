import { observer } from 'mobx-react'
import React from 'react'

const Crop = observer(() => {
  return (
    <>
        <label htmlFor="crop">Crop</label>
        <input type="text" name='crop' />
    </>
  )
})

export default Crop
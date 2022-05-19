import { observer } from 'mobx-react'
import React from 'react'

const CropTreatment = observer(() => {
  return (
    <>
        <label htmlFor="treatment">Crop Treatment</label>
        <input type="text" name='treatment' />
    </>
  )
})

export default CropTreatment
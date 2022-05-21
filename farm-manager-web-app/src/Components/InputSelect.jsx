import { observer } from 'mobx-react'
import React from 'react'

const InputSelect = observer(({ field, unit }) => {
  return (
    <>
        <label htmlFor={field.name}>{field.label}</label>
        <select {...field.bind()}>
            <option defaultValue>Select...</option>
            {unit.map(item => 
                <option key={item} value={item}>{item}</option>)} 
        </select>
    </>
  )
})

export default InputSelect
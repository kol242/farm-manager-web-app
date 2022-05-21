import { observer } from 'mobx-react'
import React from 'react'

const Countries = observer(({ field, unit }) => {
  return (
    <>
        <label htmlFor={field.name}>{field.label}</label>
        <select {...field.bind()}>
            <option defaultValue>Select...</option>
            {unit.map(item => 
                <option key={item.name} value={item.name}>{item.name}</option>)} 
        </select>
    </>
  )
})

export default Countries
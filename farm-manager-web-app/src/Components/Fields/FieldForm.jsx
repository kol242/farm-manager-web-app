import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import FieldStore from '../../Stores/FieldStore'

const FieldForm = observer(() => {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value,
            crop: e.target.crop.value,
            treatment: e.target.treatment.value,
            size: e.target.size.value,
            unit: e.target.unit.value,
        }
        CreateService.newField(payload)
        return FieldStore.getFields()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Name..."/>
            <br />
            <input type="text" name='type' placeholder="Type..."/>
            <br />
            <input type="number" name='quantity' placeholder="Quantity..."/>
            <br />
            <input type="number" name='cost' placeholder="Cost..."/>
            <br />
            <input type="number" name='size' placeholder="Size..."/>
            <br />
            <input type="text" name='descr' placeholder="Description..."/>
            <br />
            <input type="text" name='treatment' placeholder="Treatment..."/>
            <br />
            <input type="text" name='crop' placeholder="Crop..."/>
            <br />
            <select name="unit">
                <option value="km2">km2</option>
                <option value="ha">ha</option>
                <option value="a">a</option>
            </select>
            <button type="submit">Add field</button>
        </form>
    </div>
  )
})

export default FieldForm
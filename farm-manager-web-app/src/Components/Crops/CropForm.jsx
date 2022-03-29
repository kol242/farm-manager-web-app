import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import CropsStore from '../../Stores/CropsStore'

const CropForm = observer(() => {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value,
            state: e.target.state.value,
            harvested: e.target.harvested.value,
            profit: e.target.profit.value,
            unit: e.target.unit.value
        }
        CreateService.newCrop(payload)
        return CropsStore.getCrops()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Name..."/>
            <br />
            <input type="text" name='type' placeholder="Type..."/>
            <br />
            <input type="number" name='quantity' placeholder="Quantity..."/>
            <select name="unit">
                <option value="kg">kg</option>
                <option value="t">t</option>
                <option value="lb">lb</option>
            </select>
            <br />
            <input type="number" name='cost' placeholder="Cost..."/>
            <br />
            <input type="text" name='descr' placeholder="Description..."/>
            <br />
            <input type="text" name='state' placeholder="State..."/>
            <br />
            <label htmlFor="harvested">Harvested</label>
            <select name="harvested">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            <br />
            <input type="number" name='profit' placeholder="Profit..."/>
            <br />
            <button type="submit">Add crop</button>
        </form>
    </div>
  )
})

export default CropForm
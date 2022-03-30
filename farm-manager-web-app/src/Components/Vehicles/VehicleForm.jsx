import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import VehicleStore from '../../Stores/VehicleStore'

const VehicleForm = observer(() => {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value
        }
        CreateService.newVehicle(payload)
        return VehicleStore.getVehicles()
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
            <input type="text" name='descr' placeholder="Description..."/>
            <br />
            <button type="submit">Add vehicle</button>
        </form>
    </div>
  )
})

export default VehicleForm
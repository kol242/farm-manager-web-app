import { observer } from 'mobx-react'
import React from 'react'
import '../../Common/Style/modal.scss'
import VehicleStore from '../../Stores/VehicleStore'

const VehicleModal = observer(() => {
    async function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value
        }
        await VehicleStore.updateVehicle(payload)
    }
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Edit Vehicle</p>
                <span className="close" onClick={VehicleStore.modalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' defaultValue={VehicleStore.Vehicle.name}/>
                    <br />
                    <input type="text" name='type' defaultValue={VehicleStore.Vehicle.type} />
                    <br />
                    <input type="number" name='quantity' defaultValue={VehicleStore.Vehicle.quantity} />
                    <br />
                    <input type="number" name='cost' defaultValue={VehicleStore.Vehicle.cost} />
                    <br />
                    <input type="text" name='descr' defaultValue={VehicleStore.Vehicle.descr} />
                    <br />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
})

export default VehicleModal
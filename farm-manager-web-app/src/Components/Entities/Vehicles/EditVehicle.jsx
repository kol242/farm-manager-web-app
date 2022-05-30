import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/Style/modal.scss'
import VehicleStore from '../../../Stores/VehicleStore'

const EditVehicle = observer(() => {
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
                <p>Edit Crop</p>
                <span className="close" onClick={VehicleStore.modalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-form__inputs">
                    <div>
                        <label htmlFor="name">Vehicle Name</label>
                        <input type="text" name='name' defaultValue={VehicleStore.Vehicle.name}/>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name='quantity' defaultValue={VehicleStore.Vehicle.quantity} />
                        <label htmlFor="cost">Cost</label>
                        <input type="number" name='cost' defaultValue={VehicleStore.Vehicle.cost} />
                    </div>
                    <div>
                        <label htmlFor="type">Vehicle type</label>
                        <input type="text" name='type' defaultValue={VehicleStore.Vehicle.type} />
                        <label htmlFor="profit">Description</label>
                        <input type="text" name='descr' defaultValue={VehicleStore.Vehicle.descr} />
                    </div>    
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
        </div>
    </div>
  )
})

export default EditVehicle
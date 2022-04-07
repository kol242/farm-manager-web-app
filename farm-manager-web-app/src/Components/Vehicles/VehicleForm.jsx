import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import VehicleStore from '../../Stores/VehicleStore'
import '../../Common/Style/modal.scss'

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
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Create Vehicle</p>
                <span className="close" onClick={VehicleStore.addingChecker}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-form__inputs">
                        <div>
                            <label htmlFor="name">Vehicle Name</label>
                            <input type="text" name='name' />
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name='quantity' />
                            <label htmlFor="type">Vehicle type</label>
                            <input type="text" name='type' />
                        </div>
                        <div>
                            <label htmlFor="descr">Description</label>
                            <input type="text" name='descr' />
                            <label htmlFor="cost">Cost</label>
                            <input type="text" name='cost' />
                        </div>    
                    </div>
                    <button type="submit">Add Vehicle</button>
                </form>
            </div>
        </div>
    </div>
  )
})

export default VehicleForm
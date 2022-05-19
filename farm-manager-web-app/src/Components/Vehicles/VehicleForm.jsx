import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import VehicleStore from '../../Stores/VehicleStore'
import '../../Common/Style/modal.scss'
import Name from '../FormInputs/Name'
import Quantity from '../FormInputs/Quantity'
import Type from '../FormInputs/Type'
import Description from '../FormInputs/Description'
import Cost from '../FormInputs/Cost'

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
                            <Name text={'Vehicle Name'} />
                            <Quantity />
                            <Type />
                        </div>
                        <div>
                            <Description />
                            <Cost text={'Cost'} />
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
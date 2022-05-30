import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../../Common/Services/AuthService'
import '../../../Common/Style/modal.scss'
import VehicleStore from '../../../Stores/VehicleStore'

const InfoModal = observer(() => {
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Info</p>
                <span className="close" onClick={VehicleStore.InfoModalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
            <div className="modal-form">
                <div className="modal-form__inputs">
                    <div>
                        <p className="modal-label">Name</p>
                        <p>{VehicleStore.Vehicle.name}</p>
                        <p className="modal-label">Quantity</p>
                        <p>{VehicleStore.Vehicle.quantity}</p>
                        <p className="modal-label">Cost</p>
                        <p>{VehicleStore.Vehicle.cost} {AuthService.userData.currency}</p>
                    </div>
                    <div>
                        <p className="modal-label">Type</p>
                        <p>{VehicleStore.Vehicle.type}</p>
                        <p className="modal-label">Description</p>
                        <p>{VehicleStore.Vehicle.descr}</p>
                    </div>    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
})

export default InfoModal
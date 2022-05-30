import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../../Common/Services/AuthService'
import '../../../Common/Style/modal.scss'
import CropsStore from '../../../Stores/CropsStore'

const InfoModal = observer(() => {
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Info</p>
                <span className="close" onClick={CropsStore.InfoModalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
            <div className="modal-form">
                <div className="modal-form__inputs">
                    <div>
                        <p className="modal-label">Name</p>
                        <p>{CropsStore.crop.name}</p>
                        <p className="modal-label">Quantity</p>
                        <p>{CropsStore.crop.quantity} {CropsStore.crop.weight}</p>
                        <p className="modal-label">Cost</p>
                        <p>{CropsStore.crop.cost} {AuthService.userData.currency}</p>
                        <p className="modal-label">Profit</p>
                        <p>{CropsStore.crop.profit} {AuthService.userData.currency}</p>
                    </div>
                    <div>
                        <p className="modal-label">Type</p>
                        <p>{CropsStore.crop.type}</p>
                        <p className="modal-label">State</p>
                        <p>{CropsStore.crop.state}</p>
                        <p className="modal-label">Description</p>
                        <p>{CropsStore.crop.descr}</p>
                        <p className="modal-label">Harvested</p>
                        <p>{CropsStore.crop.harvested}</p> 
                    </div>    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
})

export default InfoModal
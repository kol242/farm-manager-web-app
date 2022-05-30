import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../../Common/Services/AuthService'
import '../../../Common/Style/modal.scss'
import FieldStore from '../../../Stores/FieldStore'

const InfoModal = observer(() => {
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Info</p>
                <span className="close" onClick={FieldStore.InfoModalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
            <div className="modal-form">
                <div className="modal-form__inputs">
                    <div>
                        <p className="modal-label">Name</p>
                        <p>{FieldStore.Field.name}</p>
                        <p className="modal-label">Quantity</p>
                        <p>{FieldStore.Field.quantity} {FieldStore.Field.unit}</p>
                        <p className="modal-label">Cost</p>
                        <p>{FieldStore.Field.cost} {AuthService.userData.currency}</p>
                        <p className="modal-label">Profit</p>
                        <p>{FieldStore.Field.profit} {AuthService.userData.currency}</p>
                    </div>
                    <div>
                        <p className="modal-label">Type</p>
                        <p>{FieldStore.Field.type}</p>
                        <p className="modal-label">Description</p>
                        <p>{FieldStore.Field.descr}</p>
                        <p className="modal-label">Crop Treatment</p>
                        <p>{FieldStore.Field.treatment}</p> 
                        <p className="modal-label">Crop</p>
                        <p>{FieldStore.Field.crop}</p> 
                    </div>    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
})

export default InfoModal
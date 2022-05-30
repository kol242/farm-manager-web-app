import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../../Common/Services/AuthService'
import '../../../Common/Style/modal.scss'
import AnimalStore from '../../../Stores/AnimalStore'

const InfoModal = observer(() => {
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Info</p>
                <span className="close" onClick={AnimalStore.InfoModalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
            <div className="modal-form">
                <div className="modal-form__inputs">
                    <div>
                        <p className="modal-label">Name</p>
                        <p>{AnimalStore.Animal.name}</p>
                        <p className="modal-label">Quantity</p>
                        <p>{AnimalStore.Animal.quantity}</p>
                        <p className="modal-label">Cost</p>
                        <p>{AnimalStore.Animal.cost} {AuthService.userData.currency}</p>
                        <p className="modal-label">Profit</p>
                        <p>{AnimalStore.Animal.profit} {AuthService.userData.currency}</p>
                    </div>
                    <div>
                        <p className="modal-label">Type</p>
                        <p>{AnimalStore.Animal.type}</p>
                        <p className="modal-label">Description</p>
                        <p>{AnimalStore.Animal.descr}</p>
                        <p className="modal-label">Product</p>
                        <p>{AnimalStore.Animal.product}</p> 
                    </div>    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
})

export default InfoModal
import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import AnimalStore from '../../Stores/AnimalStore'
import Cost from '../FormInputs/Cost'
import Description from '../FormInputs/Description'
import Name from '../FormInputs/Name'
import Product from '../FormInputs/Product'
import Profit from '../FormInputs/Profit'
import Quantity from '../FormInputs/Quantity'
import Type from '../FormInputs/Type'

const AnimalForm = observer(() => {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value,
            product: e.target.product.value,
            profit: e.target.profit.value
        }
        CreateService.newAnimal(payload)
        return AnimalStore.getAnimals()
    }

  return (

    <div>
        <div className="modal">
        <div className="modal-content">
        <div className="modal-header">
            <p>Create Animal</p>
            <span className="close" onClick={AnimalStore.addingChecker}>&times;</span>
        </div>
        <hr />
        <div className="modal-body">
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-form__inputs">
                    <div>
                        <Name text={'Animal Name'} />
                        <Quantity />
                        <Cost />
                        <Profit />
                    </div>
                    <div>
                        <Type />
                        <Description />
                        <Product />
                    </div>    
                </div>
                <button type="submit">Add Animal</button>
            </form>
        </div>
    </div>
</div>
    </div>
  )
})

export default AnimalForm
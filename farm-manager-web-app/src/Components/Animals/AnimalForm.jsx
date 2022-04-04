import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import AnimalStore from '../../Stores/AnimalStore'

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
                        <label htmlFor="name">Animal Name</label>
                        <input type="text" name='name' />
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name='quantity' />
                        <label htmlFor="cost">Cost</label>
                        <input type="number" name='cost' />
                        <label htmlFor="profit">Profit</label>
                        <input type="number" name='profit' />
                    </div>
                    <div>
                        <label htmlFor="type">Animal type</label>
                        <input type="text" name='type' />
                        <label htmlFor="descr">Description</label>
                        <input type="text" name='descr' />
                        <label htmlFor="product">Product</label>
                        <input type="text" name='product' />
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
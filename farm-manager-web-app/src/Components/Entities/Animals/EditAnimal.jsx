import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/Style/modal.scss'
import AnimalStore from '../../../Stores/AnimalStore'

const EditAnimal = observer(() => {
    async function handleSubmit(e) {
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
        await AnimalStore.updateAnimal(payload)
    }
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Edit Animal</p>
                <span className="close" onClick={AnimalStore.modalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-form__inputs">
                    <div>
                        <label htmlFor="name">Animal Name</label>
                        <input type="text" name='name' defaultValue={AnimalStore.Animal.name}/>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name='quantity' defaultValue={AnimalStore.Animal.quantity} />
                        <label htmlFor="cost">Cost</label>
                        <input type="number" name='cost' defaultValue={AnimalStore.Animal.cost} />
                        <label htmlFor="profit">Profit</label>
                        <input type="number" name='profit' defaultValue={AnimalStore.Animal.profit} />
                    </div>
                    <div>
                        <label htmlFor="type">Animal type</label>
                        <input type="text" name='type' defaultValue={AnimalStore.Animal.type} />
                        <label htmlFor="profit">Description</label>
                        <input type="text" name='descr' defaultValue={AnimalStore.Animal.descr} />
                        <label htmlFor="product">Product</label>
                        <input type="text" name='product' defaultValue={AnimalStore.Animal.product} />
                    </div>    
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
        </div>
    </div>
  )
})

export default EditAnimal
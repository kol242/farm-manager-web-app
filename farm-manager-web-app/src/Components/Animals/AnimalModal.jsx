import { observer } from 'mobx-react'
import React from 'react'
import '../../Common/Style/modal.scss'
import AnimalStore from '../../Stores/AnimalStore'

const AnimalModal = observer(() => {
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
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' defaultValue={AnimalStore.Animal.name}/>
                    <br />
                    <input type="text" name='type' defaultValue={AnimalStore.Animal.type} />
                    <br />
                    <input type="number" name='quantity' defaultValue={AnimalStore.Animal.quantity} />
                    <br />
                    <input type="number" name='cost' defaultValue={AnimalStore.Animal.cost} />
                    <br />
                    <input type="text" name='descr' defaultValue={AnimalStore.Animal.descr} />
                    <br />
                    <input type="text" name='product' defaultValue={AnimalStore.Animal.product} />
                    <br />
                    <input type="number" name='profit' defaultValue={AnimalStore.Animal.profit} />
                    <br />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
})

export default AnimalModal
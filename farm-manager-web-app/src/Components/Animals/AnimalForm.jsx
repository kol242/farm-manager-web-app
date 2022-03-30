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
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Name..."/>
            <br />
            <input type="text" name='type' placeholder="Type..."/>
            <br />
            <input type="number" name='quantity' placeholder="Quantity..."/>
            <br />
            <input type="number" name='cost' placeholder="Cost..."/>
            <br />
            <input type="text" name='descr' placeholder="Description..."/>
            <br />
            <input type="text" name='product' placeholder="Product..."/>
            <br />
            <input type="number" name='profit' placeholder="Profit..."/>
            <br />
            <button type="submit">Add animal</button>
        </form>
    </div>
  )
})

export default AnimalForm
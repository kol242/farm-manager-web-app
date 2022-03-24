import React from 'react'
import { observer } from 'mobx-react'
import CropsStore from '../../Stores/CropsStore'
import CreateService from '../../Common/Services/CreateService'
import { Link } from 'react-router-dom'
import AuthService from '../../Common/Services/AuthService'
import Modal from '../../Components/Modal/Modal'

const Crops = observer(() => {

    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value,
            state: e.target.state.value,
            harvested: e.target.harvested.value,
            profit: e.target.profit.value,
            unit: e.target.unit.value
        }
        CreateService.newCrop(payload)
        return CropsStore.getCrops()
    }

  return (
    <>
        { CropsStore.modal ? <Modal /> : null }
        <Link to="/home">Homepage</Link>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder="Name..."/>
                <br />
                <input type="text" name='type' placeholder="Type..."/>
                <br />
                <input type="number" name='quantity' placeholder="Quantity..."/>
                <select name="unit">
                    <option value="kg">kg</option>
                    <option value="t">t</option>
                    <option value="lb">lb</option>
                </select>
                <br />
                <input type="number" name='cost' placeholder="Cost..."/>
                <br />
                <input type="text" name='descr' placeholder="Description..."/>
                <br />
                <input type="text" name='state' placeholder="State..."/>
                <br />
                <label htmlFor="harvested">Harvested</label>
                <select name="harvested">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                <input type="number" name='profit' placeholder="Profit..."/>
                <br />
                <button type="submit">Add crop</button>
            </form>
        </div>
        { CropsStore.crops.length === 0 ? <p>No crops to show. Please add new crops.</p> : 
            <div>
                { CropsStore.crops.map((item) => 
                    <ul key={item.docId}>
                        <li>Name: {item.name}</li>
                        <li>Type: {item.type}</li>
                        <li>Quantity: {item.quantity} {item.unit}</li>
                        <li>Cost: {item.cost} {AuthService.userData.currency}</li>
                        <li>Description: {item.description}</li>
                        <li>State: {item.state}</li>
                        <li>Harvested: {item.harvested}</li>
                        <li>Profit: {item.profit}</li>
                        <button onClick={() => CropsStore.deleteCrop(item.docId)}>Delete</button>
                        <button onClick={() => CropsStore.modalHandler(item)}>Update</button>
                    </ul>
                )}
            </div>    
        }
    </>
  )
})

export default Crops
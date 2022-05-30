import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/Style/modal.scss'
import CropsStore from '../../../Stores/CropsStore'

const EditCrop = observer(() => {
    async function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value,
            state: e.target.state.value,
            harvested: e.target.harvested.value,
            profit: e.target.profit.value
        }
        await CropsStore.updateCrop(payload)
    }
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Edit Crop</p>
                <span className="close" onClick={CropsStore.modalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-form__inputs">
                    <div>
                        <label htmlFor="name">Crop Name</label>
                        <input type="text" name='name' defaultValue={CropsStore.crop.name}/>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name='quantity' defaultValue={CropsStore.crop.quantity} />
                        <label htmlFor="cost">Cost per kg/t/lb</label>
                        <input type="number" name='cost' defaultValue={CropsStore.crop.cost} />
                        <label htmlFor="state">Crop state</label>
                        <input type="text" name='state' defaultValue={CropsStore.crop.state} />
                        <label htmlFor="profit">Profit</label>
                        <input type="number" name='profit' defaultValue={CropsStore.crop.profit} />
                    </div>
                    <div>
                        <label htmlFor="type">Crop type</label>
                        <input type="text" name='type' defaultValue={CropsStore.crop.type} />
                        <label htmlFor="unit">Weight unit</label> 
                        <select name="unit">
                            <option value="kg">kg</option>
                            <option value="t">t</option>
                            <option value="lb">lb</option>
                        </select>
                        <label htmlFor="profit">Description</label>
                        <input type="text" name='descr' defaultValue={CropsStore.crop.descr} />
                        <label htmlFor="harvested">Harvested</label>
                        <select defaultValue={CropsStore.crop.harvested} name="harvested">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>    
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
        </div>
    </div>
  )
})

export default EditCrop
import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import CropsStore from '../../Stores/CropsStore'
import '../../Common/Style/modal.scss'

const CropForm = observer(() => {
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
    <div className="modal">
    <div className="modal-content">
        <div className="modal-header">
            <p>Create Crop</p>
            <span className="close" onClick={CropsStore.addingChecker}>&times;</span>
        </div>
        <hr />
        <div className="modal-body">
            <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-form__inputs">
                    <div>
                        <label htmlFor="name">Crop Name</label>
                        <input type="text" name='name' />
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name='quantity' />
                        <label htmlFor="cost">Cost per kg/t/lb</label>
                        <input type="number" name='cost' />
                        <label htmlFor="state">Crop state</label>
                        <input type="text" name='state' />
                        <label htmlFor="profit">Profit</label>
                        <input type="number" name='profit' />
                    </div>
                    <div>
                        <label htmlFor="type">Crop type</label>
                        <input type="text" name='type' />
                        <label htmlFor="unit">Weight unit</label> 
                        <select name="unit">
                            <option value="kg">kg</option>
                            <option value="t">t</option>
                            <option value="lb">lb</option>
                        </select>
                        <label htmlFor="descr">Description</label>
                        <input type="text" name='descr' />
                        <label htmlFor="harvested">Harvested</label>
                        <select name="harvested">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>    
                </div>
                <button type="submit">Add Crop</button>
            </form>
        </div>
    </div>
</div>
  )
})

export default CropForm
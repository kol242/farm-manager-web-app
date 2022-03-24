import { observer } from 'mobx-react'
import React from 'react'
import '../../Common/Style/modal.scss'
import CropsStore from '../../Stores/CropsStore'

const Modal = observer(() => {
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
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' defaultValue={CropsStore.crop.name}/>
                    <br />
                    <input type="text" name='type' defaultValue={CropsStore.crop.type} />
                    <br />
                    <input type="number" name='quantity' defaultValue={CropsStore.crop.quantity} />
                    <br />
                    <input type="number" name='cost' defaultValue={CropsStore.crop.cost} />
                    <br />
                    <input type="text" name='descr' defaultValue={CropsStore.crop.descr} />
                    <br />
                    <input type="text" name='state' defaultValue={CropsStore.crop.state} />
                    <br />
                    <label htmlFor="harvested">Harvested</label>
                    <select defaultValue={CropsStore.crop.harvested} name="harvested">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <input type="number" name='profit' defaultValue={CropsStore.crop.profit} />
                    <br />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
})

export default Modal
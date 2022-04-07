import { observer } from 'mobx-react'
import React from 'react'
import '../../Common/Style/modal.scss'
import FieldStore from '../../Stores/FieldStore'

const FieldModal = observer(() => {
    async function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value,
            unit: e.target.unit.value,
            size: e.target.size.value,
            treatment: e.target.treatment.value,
            crop: e.target.crop.value
        }
        await FieldStore.updateField(payload)
    }
  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Edit Field</p>
                <span className="close" onClick={FieldStore.modalHandler}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-form__inputs">
                        <div>
                            <label htmlFor="name">Field Name</label>
                            <input type="text" name='name' defaultValue={FieldStore.Field.name}/>
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name='quantity' defaultValue={FieldStore.Field.quantity} />
                            <label htmlFor="cost">Cost per km2/ha/a</label>
                            <input type="number" name='cost' defaultValue={FieldStore.Field.cost} />
                            <label htmlFor="crop">Crop</label>
                            <input type="text" name='crop' defaultValue={FieldStore.Field.crop} />
                        </div>
                        <div>
                            <label htmlFor="profit">Profit</label>
                            <input type="number" name='profit' defaultValue={FieldStore.Field.profit} />
                            <label htmlFor="type">Field type</label>
                            <input type="text" name='type' defaultValue={FieldStore.Field.type} />
                            <label htmlFor="unit">Size unit</label> 
                            <select defaultValue={'default'} name="unit">
                                <option value="default">{FieldStore.Field.unit}</option>
                                <option value="km2">km2</option>
                                <option value="ha">ha</option>
                                <option value="a">a</option>
                            </select>
                            <label htmlFor="profit">Description</label>
                            <input type="text" name='descr' defaultValue={FieldStore.Field.descr} />
                            <label htmlFor="treatment">Crop Treatment</label>
                            <input type="text" name='treatment' defaultValue={FieldStore.Field.treatment} />
                        </div>    
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
})

export default FieldModal
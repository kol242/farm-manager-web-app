import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import FieldStore from '../../Stores/FieldStore'

const FieldForm = observer(() => {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            cost: e.target.cost.value,
            descr: e.target.descr.value,
            crop: e.target.crop.value,
            treatment: e.target.treatment.value,
            size: e.target.size.value,
            unit: e.target.unit.value,
        }
        CreateService.newField(payload)
        return FieldStore.getFields()
    }

  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <p>Create Field</p>
                <span className="close" onClick={FieldStore.addingChecker}>&times;</span>
            </div>
            <hr />
            <div className="modal-body">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-form__inputs">
                        <div>
                            <label htmlFor="name">Field Name</label>
                            <input type="text" name='name' />
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name='quantity' />
                            <label htmlFor="cost">Cost per km2/ha/a</label>
                            <input type="number" name='cost' />
                            <label htmlFor="crop">Crop</label>
                            <input type="text" name='crop' />
                            <label htmlFor="size">Size</label>
                            <input type="number" name='size' />
                        </div>
                        <div>
                            <label htmlFor="profit">Profit</label>
                            <input type="number" name='profit' />
                            <label htmlFor="type">Field type</label>
                            <input type="text" name='type'/>
                            <label htmlFor="unit">Size unit</label> 
                            <select defaultValue={'default'} name="unit">
                                <option value="default">Select...</option>
                                <option value="km2">km2</option>
                                <option value="ha">ha</option>
                                <option value="a">a</option>
                            </select>
                            <label htmlFor="profit">Description</label>
                            <input type="text" name='descr' />
                            <label htmlFor="treatment">Crop Treatment</label>
                            <input type="text" name='treatment' />
                        </div>    
                    </div>
                    <button type="submit">Create New Field</button>
                </form>
            </div>
        </div>
    </div>
    // <div>
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" name='name' placeholder="Name..."/>
    //         <br />
    //         <input type="text" name='type' placeholder="Type..."/>
    //         <br />
    //         <input type="number" name='quantity' placeholder="Quantity..."/>
    //         <br />
    //         <input type="number" name='cost' placeholder="Cost..."/>
    //         <br />
    //         <input type="number" name='size' placeholder="Size..."/>
    //         <br />
    //         <input type="text" name='descr' placeholder="Description..."/>
    //         <br />
    //         <input type="text" name='treatment' placeholder="Treatment..."/>
    //         <br />
    //         <input type="text" name='crop' placeholder="Crop..."/>
    //         <br />
    //         <select name="unit">
    //             <option value="km2">km2</option>
    //             <option value="ha">ha</option>
    //             <option value="a">a</option>
    //         </select>
    //         <button type="submit">Add field</button>
    //     </form>
    // </div>
  )
})

export default FieldForm
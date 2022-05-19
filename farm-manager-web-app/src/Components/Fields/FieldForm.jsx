import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import FieldStore from '../../Stores/FieldStore'
import Cost from '../FormInputs/Cost'
import Crop from '../FormInputs/Crop'
import CropTreatment from '../FormInputs/CropTreatment'
import Description from '../FormInputs/Description'
import Name from '../FormInputs/Name'
import Profit from '../FormInputs/Profit'
import Quantity from '../FormInputs/Quantity'
import Size from '../FormInputs/Size'
import SizeUnit from '../FormInputs/SizeUnit'
import Type from '../FormInputs/Type'

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
                            <Name text={'Crop Name'} />
                            <Quantity />
                            <Cost text={'Cost per km2/ha/a'}/>
                            <Crop />
                            <Size />
                        </div>
                        <div>
                            <Profit />
                            <Type />
                            <SizeUnit />
                            <Description />
                            <CropTreatment />
                        </div>    
                    </div>
                    <button type="submit">Create New Field</button>
                </form>
            </div>
        </div>
    </div>
  )
})

export default FieldForm
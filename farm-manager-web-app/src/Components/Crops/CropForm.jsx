import { observer } from 'mobx-react'
import React from 'react'
import CreateService from '../../Common/Services/CreateService'
import CropsStore from '../../Stores/CropsStore'
import '../../Common/Style/modal.scss'
import State from '../FormInputs/State'
import Type from '../FormInputs/Type'
import Description from '../FormInputs/Description'
import Profit from '../FormInputs/Profit'
import Cost from '../FormInputs/Cost'
import Quantity from '../FormInputs/Quantity'
import Name from '../FormInputs/Name'
import WeightUnit from '../FormInputs/WeightUnit'
import Harvested from '../FormInputs/Harvested'

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
                        <Name text={'Crop Name'} />
                        <Quantity />
                        <Cost text={'Cost per kg/t/lb'}/>
                        <Profit />
                        <State />
                    </div>
                    <div>
                        <Type />
                        <WeightUnit />
                        <Description />
                        <Harvested />
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
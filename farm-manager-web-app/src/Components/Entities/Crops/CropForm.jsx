import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/Style/modal.scss'
import Units from '../../../Stores/Units'
import Input from '../../Input'
import InputSelect from '../../InputSelect'

const CropForm = observer(({ form }) => {
  return (
    <>
        <form className="modal-form" onSubmit={form.onSubmit}>
            <div className="modal-form__inputs">
                <div>
                    <Input field={form.$('name')} />
                    <Input field={form.$('type')} />
                    <Input field={form.$('description')} />
                    <Input field={form.$('state')} />
                </div>
                <div>
                    <Input field={form.$('quantity')} />
                    <InputSelect unit={Units.harvested} field={form.$('harvested')} />
                    <InputSelect unit={Units.weight} field={form.$('weight')} />
                    <Input field={form.$('cost')} />
                    <Input field={form.$('profit')} />
                </div>    
            </div>
            <button type="submit" onClick={form.onSubmit}>Add Crop</button>
        </form>
    </>
  )
})

export default CropForm
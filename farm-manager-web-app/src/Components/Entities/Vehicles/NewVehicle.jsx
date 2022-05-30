import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/Style/modal.scss'
import Input from '../../Input'

const NewVehicle = observer(({ form }) => {
  return (
    <>
        <form className="modal-form" onSubmit={form.onSubmit}>
            <div className="modal-form__inputs">
                <div>
                    <Input field={form.$('name')} />
                    <Input field={form.$('type')} />
                    <Input field={form.$('description')} />
                </div>
                <div>
                    <Input field={form.$('quantity')} />
                    <Input field={form.$('cost')} />
                </div>    
            </div>
            <button type="submit" onClick={form.onSubmit}>Add Vehicle</button>
        </form>
    </>
  )
})

export default NewVehicle
import { observer } from 'mobx-react'
import React from 'react'
import Units from '../../../Stores/Units'
import Input from '../../Input'
import InputSelect from '../../InputSelect'

const NewField = observer(({ form }) => {
  return (
    <>
        <form className="modal-form" onSubmit={form.onSubmit}>
            <div className="modal-form__inputs">
                <div>
                    <Input field={form.$('name')} />
                    <Input field={form.$('type')} />
                    <Input field={form.$('description')} />
                    <Input field={form.$('treatment')} />
                    <Input field={form.$('crop')} />
                </div>
                <div>
                    <Input field={form.$('quantity')} />
                    <InputSelect unit={Units.size} field={form.$('sizeUnit')} />
                    <Input field={form.$('size')} />
                    <Input field={form.$('cost')} />
                    <Input field={form.$('profit')} />
                </div>    
            </div>
            <button type="submit" onClick={form.onSubmit}>Add Field</button>
        </form>
    </>
  )
})

export default NewField
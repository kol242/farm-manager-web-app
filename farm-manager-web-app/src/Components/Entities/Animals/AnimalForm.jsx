import { observer } from 'mobx-react'
import React from 'react'
import Input from '../../Input'

const AnimalForm = observer(({ form }) => {
  return (
    <>
        <form className="modal-form" onSubmit={form.onSubmit}>
            <div className="modal-form__inputs">
                <div>
                    <Input field={form.$('name')} />
                    <Input field={form.$('type')} />
                    <Input field={form.$('description')} />
                    <Input field={form.$('product')} />
                </div>
                <div>
                    <Input field={form.$('quantity')} />
                    <Input field={form.$('cost')} />
                    <Input field={form.$('profit')} />
                </div>    
            </div>
            <button type="submit" onClick={form.onSubmit}>Add Animal</button>
        </form>
    </>
  )
})

export default AnimalForm
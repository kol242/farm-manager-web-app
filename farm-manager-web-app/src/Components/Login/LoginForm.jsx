import { observer } from 'mobx-react'
import React from 'react'
import Input from '../Input'

const LoginForm = observer(({ form }) => {
  return (
    <>
        <form onSubmit={form.onSubmit} className="form-content">
          <div className="form-input">
            <Input field={form.$('email')} />
          </div>
          <div className="form-input">
            <Input field={form.$('password')} />
          </div>
          <button type='submit'>Log In</button>
        </form>
    </>
  )
})

export default LoginForm
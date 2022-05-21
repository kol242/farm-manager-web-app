import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'
import Input from '../Input'
import Countries from './Countries'
import InputSelect from '../InputSelect'

const SignupForm = observer(({ form }) => {
  return (
    <>
        <form onSubmit={form.onSubmit} className="signup-form__wrapper">
          <div className="signup-form__content">
            <div>
              <div className="signup-form__input">
                <Input field={form.$('email')} /> 
              </div>
              <div className="signup-form__input">
                <Input field={form.$('password')} />
              </div>
              <div className="signup-form__input">
                <Input field={form.$('username')} /> 
              </div>
            </div>
            <div>
              <div className="signup-form__input">
                <Input field={form.$('farmName')} /> 
              </div>
              <div className="signup-form__input">
                <Countries field={form.$('country')} unit={AuthService.countries}/>
              </div>
              <div className="signup-form__input">
                <InputSelect field={form.$('currency')} unit={AuthService.currencies}/>
              </div>
            </div>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
    </>
  )
})

export default SignupForm
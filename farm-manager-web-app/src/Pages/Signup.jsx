import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../Common/Services/AuthService'
import '../Common/Style/signup.scss'
import '../Common/Style/form.scss'

const Signup = () => {
  const history = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.username.value,
      farm: e.target.farm.value,
      country: e.target.country.value,
      currency: e.target.currency.value,
    }
    AuthService.signup(userData)
    history("/login")
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-content">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="signup-form__wrapper">
          <div className="signup-form__content">
            <div>
              <div className="signup-form__input">
                <label htmlFor="email">Email</label>
                <input type="text" name="email"/>  
              </div>
              <div className="signup-form__input">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Password'/>  
              </div>
              <div className="signup-form__input">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder='Username'/>
              </div>
            </div>
            <div>
              <div className="signup-form__input">
                <label htmlFor="farm">Farm Name</label>
                <input type="text" name="farm"/>
              </div>
              <div className="signup-form__input">
                <label htmlFor="country">Country</label>
                <input id="country" placeholder="Start typing..." list="country-list"/>
                <datalist id="country-list" name="country">
                {AuthService.countries.map(option => 
                  <option key={option.name} value={option.name}>{option.name}</option>)} 
                </datalist>
              </div>
              <div className="signup-form__input">
                <label htmlFor="currency">Currency</label>
                <select name='currency'>
                  <option defaultValue>Select...</option>
                  {AuthService.currencies.map(option => 
                      <option key={option} value={option}>{option}</option>)} 
                </select> 
              </div>
            </div>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <div>
            Already have an account? <Link to="/login">Log In</Link>
        </div> 
      </div>
    </div>
  )
}

export default Signup
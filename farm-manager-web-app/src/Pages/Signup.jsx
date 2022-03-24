import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../Common/Services/AuthService'

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
    <>
      <h1>Signup</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <input type="text" name="username" placeholder='Username'/>
        <input type="text" name="farm" placeholder='Farm Name'/>
        <input id="country" placeholder="Start typing..." list="country-list"/>
        <datalist id="country-list" name="country">
          {AuthService.countries.map(option => 
            <option key={option.name} value={option.name}>{option.name}</option>)} 
        </datalist>
        <select name='currency'>
            <option defaultValue>Select...</option>
            {AuthService.currencies.map(option => 
                <option key={option} value={option}>{option}</option>)} 
        </select>
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default Signup
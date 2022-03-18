import React from 'react'
import AuthService from '../Common/Services/AuthService'

const Signup = () => {
  function handleSubmit(e) {
    e.preventDefault()
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.username.value,
      farm: e.target.farm.value,
      country: e.target.country.value
    }
    AuthService.signup(userData)
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
        <input type="text" name="country" placeholder='Country'/>
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default Signup
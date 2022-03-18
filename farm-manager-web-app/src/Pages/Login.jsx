import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../Common/Services/AuthService'

const Login = () => {
  const history = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    await AuthService.login(userData)
    history("/home")
  }

  return (
    <>
      <h1>Log In</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <button type='submit'>Log In</button>
      </form>
    </>
  )
}

export default Login
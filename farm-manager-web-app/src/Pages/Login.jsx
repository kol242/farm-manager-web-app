import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthService from '../Common/Services/AuthService'
import '../Common/Style/login.scss'

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

  return AuthService.loggedIn === true ? <Navigate to="/dashboard" /> : (
    <div className="content-wrapper">
      <div className="content">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="text" name="email"/>
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder='Password'/>
          </div>
          <button type='submit'>Log In</button>
        </form>
        <div>
            Need an account? <Link to="/signup">Sign Up</Link>
        </div>   
      </div>
    </div>
  )
}

export default Login
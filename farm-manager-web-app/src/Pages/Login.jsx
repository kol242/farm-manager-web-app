import { observer } from 'mobx-react'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import AuthService from '../Common/Services/AuthService'
import '../Common/Style/login.scss'
import LoginFormClass from '../Components/Login/form.class'
import LoginForm from '../Components/Login/LoginForm'

const form = new LoginFormClass()

const Login = observer(() => {
  return AuthService.loggedIn === true ? <Navigate to="/home" /> : (
    <div className="content-wrapper">
      <div className="content">
        <h2>Log In</h2>
        <LoginForm form={form} />
        <div>
            Need an account? <Link to="/signup">Sign Up</Link>
        </div>   
      </div>
    </div>
  )
})

export default Login
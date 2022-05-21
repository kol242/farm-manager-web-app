import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../Common/Style/signup.scss'
import '../Common/Style/form.scss'
import SignupForm from '../Components/Signup/SignupForm'
import SignupFormClass from '../Components/Signup/form.class'
import AuthService from '../Common/Services/AuthService'
import { observer } from 'mobx-react'

const form = new SignupFormClass()

const Signup = observer(() => {
  return AuthService.loggedIn === true ? <Navigate to="/home" /> : (
    <div className="signup-wrapper">
      <div className="signup-content">
        <h1>Signup</h1>
          <SignupForm form={form} />
        <div>
            Already have an account? <Link to="/login">Log In</Link>
        </div> 
      </div>
    </div>
  )
})

export default Signup
import { observer } from 'mobx-react'
import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import AuthService from '../Common/Services/AuthService'

const PrivateRoute = observer(() => {
    return AuthService.currentUser ? <Outlet /> : <Navigate to="/login" />
})

export default PrivateRoute

import { observer } from 'mobx-react'
import React from 'react'
import AuthService from '../../Common/Services/AuthService'

const Header = observer(() => {
  return (
    <div className="body-title">
        <h1>Welcome <span>{AuthService.userData.username}</span></h1> 
        <p id="body-subtitle">From here you can manage your daily tasks on farm or just keep track of your crops, livestock, vehicles or fields.</p>
        <p id="body-subtitle">To continue, enter one of the dashboards located on sidebar.</p>
    </div>
  )
})

export default Header
import React from 'react'
import '../Common/Style/home.scss'
import AuthService from '../Common/Services/AuthService'
import Sidebar from '../Components/Sidebar'

const Homepage = () => {
  return (
    <div className="content-home">
      <Sidebar />
      <div className="body">
        <div className="body-header">
          <h1>Welcome <span>{AuthService.userData.username}</span></h1> 
          <p id="sub-heading">From here you can manage your daily tasks on farm or just keeping track of crop, livestock or field status.</p>
        </div>
        <div className="body-content">
          <h2>Farm analytics</h2>
        </div>
      </div>
    </div>
  )
}

export default Homepage
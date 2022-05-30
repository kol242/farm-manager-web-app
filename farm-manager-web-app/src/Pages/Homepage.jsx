import React from 'react'
import '../Common/Style/home.scss'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Homepage/Header'
import Body from '../Components/Homepage/Body'

const Homepage = () => {
  return (
    <div className="content-home">
      <Sidebar />
      <div className="body">
        <Header />
        <Body />
      </div>
    </div>
  )
}

export default Homepage
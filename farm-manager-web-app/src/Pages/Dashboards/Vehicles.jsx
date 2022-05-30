import React from 'react'
import '../../Common/Style/home.scss'
import Sidebar from '../../Components/Sidebar'
import Modals from '../../Components/Entities/Vehicles/Dashboard/Modals'
import Body from '../../Components/Entities/Vehicles/Dashboard/Body'

const Vehicles = () => {
    return (
        <div className="content-home">
            <Modals />
            <Sidebar />
            <Body />
        </div>
    )
}

export default Vehicles
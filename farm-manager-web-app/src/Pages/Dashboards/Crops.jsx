import React from 'react'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import Modals from '../../Components/Entities/Crops/Dashboard/Modals'
import Body from '../../Components/Entities/Crops/Dashboard/Body'

const Crops = () => {
    return (
        <div className="content-home">
            <Sidebar />
            <Modals />
            <Body />
        </div>
    )
}

export default Crops
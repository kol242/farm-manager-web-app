import React from 'react'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import Modals from '../../Components/Entities/Fields/Dashboard/Modals'
import Body from '../../Components/Entities/Fields/Dashboard/Body'

const Fields = () => {
    return (
        <div className="content-home">
            <Modals />
            <Sidebar />
            <Body />
        </div>
    )
}

export default Fields
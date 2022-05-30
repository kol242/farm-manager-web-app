import React from 'react'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import Modals from '../../Components/Entities/Animals/Dashboard/Modals'
import Body from '../../Components/Entities/Animals/Dashboard/Body'

const Animals = () => {
    return (
        <div className="content-home">
            <Modals />
            <Sidebar />
            <Body />
        </div>
    )
}

export default Animals
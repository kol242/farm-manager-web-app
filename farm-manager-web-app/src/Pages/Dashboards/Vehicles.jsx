import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Vehicles/Filter'
import VehicleForm from '../../Components/Vehicles/VehicleForm'
import VehicleList from '../../Components/Vehicles/VehicleList'
import VehicleSorter from '../../Components/Vehicles/VehicleSorter'
import VehicleModal from '../../Components/Vehicles/VehicleModal'
import VehicleStore from '../../Stores/VehicleStore'
import '../../Common/Style/home.scss'
import Sidebar from '../../Components/Sidebar'

const Vehicles = observer(() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = VehicleStore.Vehicles.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="content-home">
            { VehicleStore.modal ? <VehicleModal /> : null }
            { VehicleStore.addingCheck ? <VehicleForm /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <VehicleSorter />
                        <button id="btn-primary" onClick={VehicleStore.filterChecker}>Filter</button>
                        { VehicleStore.filterCheck ? <Filter /> : null }
                    </div>
                    <button id="btn-add" onClick={VehicleStore.addingChecker}>New vehicle</button>
                    <div className="body-content__main">
                        { VehicleStore.Vehicles.length === 0 ? <p>No vehicles to show. Please add new vehicle.</p> : <VehicleList items={currentPosts}/> }    
                    </div>
                    <div className="body-content__foot">
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={VehicleStore.Vehicles.length}
                            paginate={paginate}
                        />    
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Vehicles
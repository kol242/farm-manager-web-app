import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Filter'
import VehicleForm from '../../Components/Vehicles/VehicleForm'
import Sorter from '../../Components/Sorter'
import VehicleModal from '../../Components/Vehicles/VehicleModal'
import VehicleStore from '../../Stores/VehicleStore'
import '../../Common/Style/home.scss'
import Sidebar from '../../Components/Sidebar'
import ItemList from '../../Components/ItemList'

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
                        <Sorter store={VehicleStore.getSortedVehicles} array={VehicleStore.sortArray}/> 
                        <button id="btn-primary" onClick={VehicleStore.filterChecker}>Filter</button>
                        { VehicleStore.filterCheck ? <Filter store={VehicleStore.getFilteredVehicles} array={VehicleStore.filterArray}/> : null }
                    </div>
                    <button id="btn-add" onClick={VehicleStore.addingChecker}>New vehicle</button>
                    <div className="body-content__main">
                        { VehicleStore.Vehicles.length === 0 ? <p>No vehicles to show. Please add new vehicle.</p> : 
                        <ItemList items={currentPosts} deleteCrop={VehicleStore.deleteVehicle} editCrop={VehicleStore.modalHandler}/> }    
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
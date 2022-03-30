import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Vehicles/Filter'
import VehicleForm from '../../Components/Vehicles/VehicleForm'
import VehicleList from '../../Components/Vehicles/VehicleList'
import VehicleSorter from '../../Components/Vehicles/VehicleSorter'
import VehicleModal from '../../Components/Vehicles/VehicleModal'
import VehicleStore from '../../Stores/VehicleStore'

const Vehicles = observer(() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = VehicleStore.Vehicles.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <button onClick={VehicleStore.filterChecker}>Filter</button>
            { VehicleStore.filterCheck ? <Filter /> : null }
            { VehicleStore.modal ? <VehicleModal /> : null }
            <VehicleSorter />
            <Link to="/home">Homepage</Link>
            <VehicleForm />
            { VehicleStore.Vehicles.length === 0 ? <p>No vehicles to show. Please add new vehicle.</p> : <VehicleList items={currentPosts}/> }
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={VehicleStore.Vehicles.length}
                paginate={paginate}
            />
        </>
    )
})

export default Vehicles
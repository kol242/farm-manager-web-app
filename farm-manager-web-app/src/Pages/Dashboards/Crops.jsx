import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CropsStore from '../../Stores/CropsStore'
import { Link } from 'react-router-dom'
import Modal from '../../Components/Modal/Modal'
import CropsList from '../../Components/Crops/CropsList'
import Pagination from '../../Components/Pagination'
import CropForm from '../../Components/Crops/CropForm'
import Filter from '../../Components/Filter'
import CropSorter from '../../Components/Crops/CropSorter'

const Crops = observer(() => {

    // prebacit u STORE !!!!!!!!! =================================
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = CropsStore.crops.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    // ============================================================

    return (
        <>
            <button onClick={CropsStore.filterChecker}>Filter</button>
            { CropsStore.filterCheck ? <Filter /> : null }
            { CropsStore.modal ? <Modal /> : null }
            <CropSorter />
            <Link to="/home">Homepage</Link>
            <CropForm />
            { CropsStore.crops.length === 0 ? <p>No crops to show. Please add new crops.</p> : <CropsList items={currentPosts}/> }
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={CropsStore.crops.length}
                paginate={paginate}
            />
        </>
    )
})

export default Crops
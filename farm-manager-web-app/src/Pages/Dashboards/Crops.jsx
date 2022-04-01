import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CropsStore from '../../Stores/CropsStore'
import { Link } from 'react-router-dom'
import CropModal from '../../Components/Crops/CropModal'
import CropsList from '../../Components/Crops/CropsList'
import Pagination from '../../Components/Pagination'
import CropForm from '../../Components/Crops/CropForm'
import Filter from '../../Components/Crops/Filter'
import CropSorter from '../../Components/Crops/CropSorter'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'

const Crops = observer(() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = CropsStore.crops.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="content-home">
            <Sidebar />
            <div className="body">
                <button onClick={CropsStore.filterChecker}>Filter</button>
                { CropsStore.filterCheck ? <Filter /> : null }
                { CropsStore.modal ? <CropModal /> : null }
                <CropSorter />
                <Link to="/home">Homepage</Link>
                <CropForm />
                { CropsStore.crops.length === 0 ? <p>No crops to show. Please add new crops.</p> : <CropsList items={currentPosts}/> }
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={CropsStore.crops.length}
                    paginate={paginate}
                />    
            </div>
        </div>
    )
})

export default Crops
import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CropsStore from '../../Stores/CropsStore'
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
            { CropsStore.modal ? <CropModal /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <CropSorter />
                        <button id="btn-primary" onClick={CropsStore.filterChecker}>Filter</button>
                        { CropsStore.filterCheck ? <Filter /> : null }
                    </div>
                    <button id="btn-add" onClick={CropsStore.addingChecker}>New crop</button>
                    <div className="body-content__main">
                        { CropsStore.addingCheck ? <CropForm /> : null } 
                        { CropsStore.crops.length === 0 ? <p>No crops to show. Please add new crops.</p> : <CropsList items={currentPosts}/> }    
                    </div>
                    <div className="body-content__foot">
                        <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={CropsStore.crops.length}
                        paginate={paginate}
                    />    
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Crops
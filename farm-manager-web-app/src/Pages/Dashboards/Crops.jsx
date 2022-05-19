import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CropsStore from '../../Stores/CropsStore'
import CropModal from '../../Components/Crops/CropModal'
import Pagination from '../../Components/Pagination'
import CropForm from '../../Components/Crops/CropForm'
import Filter from '../../Components/Filter'
import Sorter from '../../Components/Sorter'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import ItemList from '../../Components/ItemList'

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
            { CropsStore.addingCheck ? <CropForm /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <Sorter store={CropsStore.getSortedCrops} array={CropsStore.sortArray}/>
                        <button id="btn-primary" onClick={CropsStore.filterChecker}>Filter</button>
                        { CropsStore.filterCheck ? <Filter store={CropsStore.getFilteredCrops} array={CropsStore.filterArray}/> : null }
                    </div>
                    <button id="btn-add" onClick={CropsStore.addingChecker}>New crop</button>
                    <div className="body-content__main">
                        { CropsStore.crops.length === 0 ? <p>No crops to show. Please add new crops.</p> : 
                        <ItemList items={currentPosts} deleteCrop={CropsStore.deleteCrop} editCrop={CropsStore.modalHandler}/> }    
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
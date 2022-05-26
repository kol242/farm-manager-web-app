import React from 'react'
import { observer } from 'mobx-react'
import CropsStore from '../../Stores/CropsStore'
import CropModal from '../../Components/Entities/Crops/CropModal'
import PaginateScroll from '../../Components/PaginateScroll'
import Filter from '../../Components/Filter'
import Sorter from '../../Components/Sorter'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import ItemList from '../../Components/ItemList'
import Modal from '../../Components/Modal'

const Crops = observer(() => {
    return (
        <div className="content-home">
            { CropsStore.modal ? <CropModal /> : null }
            { CropsStore.addingCheck ? <Modal item='Crops' store={CropsStore} /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <Sorter store={CropsStore}/>
                        <button id="btn-primary" onClick={CropsStore.filterChecker}>Filter</button>
                        { CropsStore.filterCheck ? <Filter store={CropsStore.getFilteredCrops} array={CropsStore.filterArray}/> : null }
                    </div>
                    <button id="btn-add" onClick={CropsStore.addingChecker}>New crop</button>
                    <div className="body-content__main">
                        { CropsStore.crops.length === 0 ? <p>No crops to show. Please add new crops.</p> : 
                        <ItemList items={CropsStore.crops} deleteCrop={CropsStore.deleteCrop} editCrop={CropsStore.modalHandler}/> }    
                    </div>
                    <div className="body-content__foot">
                        { CropsStore.crops.length > 0 ? <PaginateScroll store={CropsStore}/> : null }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Crops
import React from 'react'
import AnimalStore from '../../Stores/AnimalStore'
// import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Filter'
import Sorter from '../../Components/Sorter'
import AnimalModal from '../../Components/Entities/Animals/AnimalModal'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import ItemList from '../../Components/ItemList'
import Modal from '../../Components/Modal'
import { observer } from 'mobx-react'
import PaginateScroll from '../../Components/PaginateScroll'

const Animals = observer(() => {

    return (
        <div className="content-home">
            { AnimalStore.modal ? <AnimalModal /> : null }
            { AnimalStore.addingCheck ? <Modal item='Animals' store={AnimalStore} /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <Sorter store={AnimalStore}/> 
                        <button id="btn-primary" onClick={AnimalStore.filterChecker}>Filter</button>
                        { AnimalStore.filterCheck ? <Filter store={AnimalStore.getFilteredAnimals} array={AnimalStore.filterArray}/> : null }
                    </div>
                    <button id="btn-add" onClick={AnimalStore.addingChecker}>New animal</button>
                    <div className="body-content__main">
                        { AnimalStore.Animals.length === 0 ? <p>No animals to show. Please add new animal.</p> : 
                        <ItemList items={AnimalStore.Animals} deleteCrop={AnimalStore.deleteAnimal} editCrop={AnimalStore.modalHandler}/> }    
                    </div>
                    <div className="body-content__foot">
                        { AnimalStore.Animals.length > 0 ? <PaginateScroll store={AnimalStore}/> : null }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Animals
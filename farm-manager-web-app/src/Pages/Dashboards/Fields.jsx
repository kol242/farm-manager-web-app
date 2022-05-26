import React from 'react'
import { observer } from 'mobx-react'
import FieldStore from '../../Stores/FieldStore'
import Filter from '../../Components/Filter'
import Sorter from '../../Components/Sorter'
import FieldModal from '../../Components/Entities/Fields/FieldModal'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import ItemList from '../../Components/ItemList'
import Modal from '../../Components/Modal'
import PaginateScroll from '../../Components/PaginateScroll'

const Fields = observer(() => {
    return (
        <div className="content-home">
            { FieldStore.modal ? <FieldModal /> : null }
            { FieldStore.addingCheck ? <Modal item='Fields' store={FieldStore} /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <Sorter store={FieldStore}/> 
                        <button id="btn-primary" onClick={FieldStore.filterChecker}>Filter</button>
                        { FieldStore.filterCheck ? <Filter store={FieldStore.getFilteredFields} array={FieldStore.filterArray}/> : null }
                    </div>
                    <button id="btn-add" onClick={FieldStore.addingChecker}>New field</button>
                    <div className="body-content__main">
                        { FieldStore.Fields.length === 0 ? <p>No fields to show. Please add new field.</p> : 
                        <ItemList items={FieldStore.Fields} deleteCrop={FieldStore.deleteField} editCrop={FieldStore.modalHandler}/> }    
                    </div>
                    <div className="body-content__foot">
                        { FieldStore.Fields.length > 0 ? <PaginateScroll store={FieldStore}/> : null }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Fields
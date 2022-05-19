import React, { useState } from 'react'
import { observer } from 'mobx-react'
import FieldStore from '../../Stores/FieldStore'
import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Filter'
import FieldForm from '../../Components/Fields/FieldForm'
import Sorter from '../../Components/Sorter'
import FieldModal from '../../Components/Fields/FieldModal'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'
import ItemList from '../../Components/ItemList'

const Fields = observer(() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = FieldStore.Fields.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="content-home">
            { FieldStore.modal ? <FieldModal /> : null }
            { FieldStore.addingCheck ? <FieldForm /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <Sorter store={FieldStore.getSortedFields} array={FieldStore.sortArray}/> 
                        <button id="btn-primary" onClick={FieldStore.filterChecker}>Filter</button>
                        { FieldStore.filterCheck ? <Filter store={FieldStore.getFilteredFields} array={FieldStore.filterArray}/> : null }
                    </div>
                    <button id="btn-add" onClick={FieldStore.addingChecker}>New field</button>
                    <div className="body-content__main">
                        { FieldStore.Fields.length === 0 ? <p>No fields to show. Please add new field.</p> : 
                        <ItemList items={currentPosts} deleteCrop={FieldStore.deleteField} editCrop={FieldStore.modalHandler}/> }    
                    </div>
                    <div className="body-content__foot">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={FieldStore.Fields.length}
                        paginate={paginate}
                    /> 
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Fields
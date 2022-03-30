import React, { useState } from 'react'
import { observer } from 'mobx-react'
import FieldStore from '../../Stores/FieldStore'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Fields/Filter'
import FieldForm from '../../Components/Fields/FieldForm'
import FieldList from '../../Components/Fields/FieldList'
import FieldSorter from '../../Components/Fields/FieldSorter'
import FieldModal from '../../Components/Fields/FieldModal'

const Fields = observer(() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = FieldStore.Fields.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <button onClick={FieldStore.filterChecker}>Filter</button>
            { FieldStore.filterCheck ? <Filter /> : null }
            { FieldStore.modal ? <FieldModal /> : null }
            <FieldSorter />
            <Link to="/home">Homepage</Link>
            <FieldForm />
            { FieldStore.Fields.length === 0 ? <p>No fields to show. Please add new field.</p> : <FieldList items={currentPosts}/> }
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={FieldStore.Fields.length}
                paginate={paginate}
            />
        </>
    )
})

export default Fields
import React, { useState } from 'react'
import { observer } from 'mobx-react'
import AnimalStore from '../../Stores/AnimalStore'
import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Animals/Filter'
import AnimalForm from '../../Components/Animals/AnimalForm'
import AnimalsList from '../../Components/Animals/AnimalsList'
import AnimalSorter from '../../Components/Animals/AnimalSorter'
import AnimalModal from '../../Components/Animals/AnimalModal'
import Sidebar from '../../Components/Sidebar'
import '../../Common/Style/home.scss'

const Animals = observer(() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = AnimalStore.Animals.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="content-home">
            { AnimalStore.modal ? <AnimalModal /> : null }
            { AnimalStore.addingCheck ? <AnimalForm /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <AnimalSorter /> 
                        <button id="btn-primary" onClick={AnimalStore.filterChecker}>Filter</button>
                        { AnimalStore.filterCheck ? <Filter /> : null }
                    </div>
                    <button id="btn-add" onClick={AnimalStore.addingChecker}>New animal</button>
                    <div className="body-content__main">
                        { AnimalStore.Animals.length === 0 ? <p>No animals to show. Please add new animal.</p> : <AnimalsList items={currentPosts}/> }    
                    </div>
                    <div className="body-content__foot">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={AnimalStore.Animals.length}
                        paginate={paginate}
                    /> 
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Animals
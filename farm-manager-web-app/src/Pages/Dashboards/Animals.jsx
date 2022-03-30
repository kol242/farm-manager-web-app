import React, { useState } from 'react'
import { observer } from 'mobx-react'
import AnimalStore from '../../Stores/AnimalStore'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination'
import Filter from '../../Components/Animals/Filter'
import AnimalForm from '../../Components/Animals/AnimalForm'
import AnimalsList from '../../Components/Animals/AnimalsList'
import AnimalSorter from '../../Components/Animals/AnimalSorter'
import AnimalModal from '../../Components/Animals/AnimalModal'

const Animals = observer(() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = AnimalStore.Animals.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <button onClick={AnimalStore.filterChecker}>Filter</button>
            { AnimalStore.filterCheck ? <Filter /> : null }
            { AnimalStore.modal ? <AnimalModal /> : null }
            <AnimalSorter />
            <Link to="/home">Homepage</Link>
            <AnimalForm />
            { AnimalStore.Animals.length === 0 ? <p>No animals to show. Please add new animal.</p> : <AnimalsList items={currentPosts}/> }
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={AnimalStore.Animals.length}
                paginate={paginate}
            />
        </>
    )
})

export default Animals
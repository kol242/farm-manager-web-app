import { observer } from 'mobx-react'
import React from 'react'
import '../Common/Style/pagination.scss'

const Pagination = observer(({ postsPerPage, totalPosts, paginate }) => {
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

  return (
    <nav className="pagination-nav">
      <ul className='pagination-nav__item'>
        {pageNumbers.map(number => (
          <li key={number}>
            <button className="pagination-nav__button" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
})

export default Pagination
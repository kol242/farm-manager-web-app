import { observer } from 'mobx-react'
import React from 'react'

const Pagination = observer(({ postsPerPage, totalPosts, paginate }) => {
    
    // prebacit u STORE !!!!!!!!!!!!!!!!! ================================
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    // ====================================================================

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
})

export default Pagination
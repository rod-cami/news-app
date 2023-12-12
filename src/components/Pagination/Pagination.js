import React, { useState } from 'react'

const Pagination = ({page, setPage, totalPage}) => {
  const miArray = Array.from({ length: 50 }, (_, index) => index + 1);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(9);
  const [pagination, setPagination] = useState(miArray.slice(0,9))
  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePaginationPrev = () =>{
    setPrev(prev-1)
    setNext(next-1)
    setPagination(miArray.slice(prev-1,next-1))
  }
  const handlePaginationNext = () =>{
    setPrev(prev+1)
    setNext(next+1)
    setPagination(miArray.slice(prev+1,next+1))
  }

  return (
    <div className='pagination'>
      <div class="pagination-item">
        <button
          onClick={() => handlePaginationPrev()}
          disabled={page == 1 && prev == 0}
          className='page-normal'
        >
          <span>A</span>
        </button>
      </div>

      <ul>
        {pagination.map(i=> (
          <li key={i} class="pagination-item">
            <button
              onClick={() => handlePageChange(i)}
              disabled={page == i}
              className={`${i == page ? 'page-active' : 'page-normal'}`}
            >
              <span>{i}</span>
            </button>
          </li>
        ))}
      </ul>

      <div class="pagination-item">
        <button
          onClick={() => handlePaginationNext()}
          disabled={page == totalPage}
          className='page-normal'
        >
          <span>P</span>
        </button>
      </div>
    </div>
  );
}

export default Pagination
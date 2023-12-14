import React, { useState } from 'react';

const Pagination = ({ page, setPage, totalPage }) => {
  const totalPages = 50;
  const itemsPerPage = 9;
  const miArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage - 1);
  const [pagination, setPagination] = useState(miArray.slice(startIndex, endIndex + 1));

  const updatePagination = (start, end) => {
    setStartIndex(start);
    setEndIndex(end);
    setPagination(miArray.slice(start, end + 1));
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handlePaginationPrev = () => {
    updatePagination(startIndex-1,endIndex-1);
  };

  const handlePaginationNext = () => {
    updatePagination(startIndex+1,endIndex+1);
  };

  return (
    <div className='pagination'>
      <div className="pagination-item">
        <button
          onClick={handlePaginationPrev}
          disabled={page === 1 && startIndex === 0}
          className='page-normal'
        >
          <span>A</span>
        </button>
      </div>

      <ul>
        {pagination.map((pageNumber) => (
          <li key={pageNumber} className="pagination-item">
            <button
              onClick={() => handlePageChange(pageNumber)}
              disabled={page === pageNumber}
              className={`${page === pageNumber ? 'page-active' : 'page-normal'}`}
            >
              <span>{pageNumber}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="pagination-item">
        <button
          onClick={handlePaginationNext}
          disabled={page === totalPage}
          className='page-normal'
        >
          <span>P</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
